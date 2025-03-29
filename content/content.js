(function () {
    if (window.opener) return; // Evitar que se ejecute en ventanas emergentes
    if (window !== window.top) return; // Evitar que se ejecute en iframes
    // div para los recuadros
    const boxesContainer = document.createElement("div");
    boxesContainer.className = "tb_boxGroup";
    // CHEQUEAR TEMA DE LA PAGINA
    if (Boolean(document.querySelectorAll('html')[0].attributes.dark)) { boxesContainer.style.color = "white" }
    // CHEQUEAR SI ES ADMINISTRADOR DE ARCHIVOS
    if(document.URL.startsWith('file:///')) {
        const isPDFPage = Array.from(document.querySelectorAll('embed, iframe')).some(element => { const typeAttribute = element.getAttribute('type'); return typeAttribute && typeAttribute.toLowerCase().includes('pdf'); });
        if (isPDFPage) {
           document.embeds[0].style.filter = "invert(0.99) hue-rotate(190deg) sepia(0.5)";
        } else if (document.querySelectorAll('#parentDirLinkBox').length > 0) {
            const match = document.querySelector("#header").textContent.match(/[^\\]+(?=\\*$)/);
            if (match && match[0]) { 
                document.querySelectorAll('h1#header')[0].style.setProperty('--contenido-before', `"${match[0]}"`); 
                document.body.id = 'files'; 
                const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
                favicon.rel = "icon";
                favicon.type = "image/png";
                favicon.href = chrome.runtime.getURL("icons/icon.png");
                if (!document.head.contains(favicon)) {
                    document.head.appendChild(favicon);
                }
            }
        }
    };
    //div para los recuadros de la derecha
    const rightBoxes = document.createElement("div");
    rightBoxes.className = "tb_rightBoxGroup";

    // HORA Y TIEMPO DE USO POR DOMINIO ___________________________________________________________________________________________
    const hourDiv = document.createElement("div");
    hourDiv.className = "tb_rightBox";
    hourDiv.id = `tb_hour`;
    hourDiv.textContent = `--:--:--`;
    rightBoxes.appendChild(hourDiv);

    function getDomain(url) {
        let domain = new URL(url).hostname;
        let parts = domain.split(".");
        if (parts.length > 2) {
            return parts.slice(-2).join("."); // Extrae solo dominio y TLD (ejemplo: youtube.com)
        }
        return domain;
    }

    function getFormattedDate() {
        let today = new Date();
        return today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    }

    let currentDomain = getDomain(window.location.href);
    let startTime = Date.now();

    chrome.storage.local.get(["domainTimes", "lastTrackedDate"], (data) => {
        let domainTimes = data.domainTimes || {};
        let lastTrackedDate = data.lastTrackedDate || getFormattedDate();
        let today = getFormattedDate();

        if (lastTrackedDate !== today) {
            // Si ha pasado un día, reiniciar el contador
            domainTimes = {};
            chrome.storage.local.set({ domainTimes, lastTrackedDate: today });
        }

        if (!domainTimes[currentDomain]) {
            domainTimes[currentDomain] = 0;
        }
        updateTimeDisplay(domainTimes[currentDomain]);
    });

    function updateTimeDisplay(time) {
        var options = { weekday: 'long' };
        var hoy = new Date();
        let remaining = formatRemaining(time*1000, 'h, m, s', false);
        hourDiv.innerHTML = `<div>Uso: ${remaining}</div>${hoy.toLocaleDateString("es-ES", options).toUpperCase()} ${hoy.toLocaleTimeString()}`;
    }

    function saveTime() {
        chrome.storage.local.get(["domainTimes"], (data) => {
            let domainTimes = data.domainTimes || {};
            let elapsedTime = Math.floor((Date.now() - startTime) / 1000);

            if (!domainTimes[currentDomain]) {
                domainTimes[currentDomain] = 0;
            }
            domainTimes[currentDomain] += elapsedTime;

            chrome.storage.local.set({ domainTimes, lastTrackedDate: getFormattedDate() });
        });
    }

    window.addEventListener("beforeunload", saveTime);
    window.addEventListener("visibilitychange", () => {
        if (document.hidden) saveTime();
        else startTime = Date.now(); // Reset start time on return
    });

    let domainInterval = setInterval(() => {
        if (!chrome.runtime?.id) return clearInterval(domainInterval);
        
        chrome.storage.local.get(["domainTimes"], (data) => {
            let domainTimes = data.domainTimes || {};
            
            if (domainTimes[currentDomain] !== undefined) {
                let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                updateTimeDisplay(domainTimes[currentDomain] + elapsedTime);
                /*VERIFICA SI HAZ ESTADO MÁS DE UNA HORA*/
                if ((domainTimes[currentDomain] + elapsedTime)==3600 && !document.hidden) { 
                    chrome.runtime.sendMessage({ action: "showNotification", payload: { title: currentDomain, message: "Haz estado 1 HORA en esta página"} });
                }
            }
        });
    }, 1000);
    
    // TAREAS ___________________________________________________________________________________________
    function createTaskContainer() {
        let taskContainer = document.getElementById("tb_taskProgressContainer");

        if (!taskContainer) {
            taskContainer = document.createElement("div");
            taskContainer.id = "tb_taskProgressContainer";
            rightBoxes.appendChild(taskContainer);
        }

        return taskContainer;
    }
    function updateTaskCircles() {
        const key = new Date().toISOString().split("T")[0]; // Clave de la fecha actual
        chrome.storage.local.get([key + "_tasks"], (data) => {
            let taskContainer = createTaskContainer();
            taskContainer.innerHTML = ""; // Limpiar antes de volver a agregar

            let tasks = data[key + "_tasks"] || [];
            let taskExists = false;

            tasks.forEach((task, index) => {
                if (task.text.trim() !== "") {
                    let circle = document.createElement("div");
                    circle.style.background = task.completed ? "green" : "red";
                    circle.title = `${index + 1}: ${task.text} [${task.completed ? "COMPLETADO" : "PENDIENTE"}]`; // Tooltip con la tarea
                    taskContainer.appendChild(circle);
                    taskExists = true;
                }
            });

            taskContainer.style.display = taskExists ? "flex" : "none";
        });
    }
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "updateTasks") {
            updateTaskCircles();
        }
    });
    updateTaskCircles();

    // ANIMO ____________________________________________________________________________________________
    const moodFace = document.createElement("div");
    moodFace.className = "tb_rightBox";
    moodFace.id = `tb_mood`;
    moodFace.title = "Promedio de Estado de Ánimo mensual"
    chrome.storage.local.get(["averageMoodFace"], (result) => {
        moodFace.textContent = result.averageMoodFace ?? "😀";;
    });
    rightBoxes.appendChild(moodFace);

    //div para el marquee (frases del medio)
    const quotes = [
    "El obstáculo es el camino. 🛤️",
    "Amor fati - Amor al destino. 💖",
    "Memento mori - Recordar la muerte. 💀",
    "La incomodidad es la moneda del éxito. 💪",
    "Quien tiene un por qué para vivir puede soportar casi cualquier cómo. ❓",
    "No pierdas más tiempo discutiendo lo que debe ser un buen hombre. Sé uno. 🌟",
    "Si no es correcto, no lo hagas. Si no es verdad, no lo digas. 🛑",
    "Podrías dejar la vida ahora mismo. Deja que eso determine lo que haces y dices. ⌛",
    "No es la muerte lo que un hombre debe temer, sino el no empezar a vivir. 🌱",
    "La mejor venganza es no ser como tu enemigo. 🎯",
    "El impedimento a la acción hace avanzar la acción. Lo que se interpone en el camino se convierte en el camino. 🚧",
    "Elige no ser dañado y no te sentirás dañado. 🛡️",
    "El mundo se desvía para dejar pasar a cualquier hombre que sepa a dónde va. 🌍",
    "Tienes poder sobre tu mente, no sobre los acontecimientos externos. Date cuenta de esto y encontrarás fuerza. 💪",
    "Tenemos más miedo que dolor; y sufrimos más en la imaginación que en la realidad. 💭",
    "Las dificultades fortalecen la mente, como el trabajo fortalece el cuerpo. 💪",
    "No expliques tu filosofía. Encarnala. 👤",
    "Las cosas externas no son el problema. Es tu evaluación de ellas. 🔍",
    "El hombre conquista el mundo conquistándose a sí mismo. 🌍",
    "Ningún hombre es libre si no es dueño de sí mismo. 🔑",
    "Tu mente tomará la forma de lo que frecuentemente sostengas en tus pensamientos. 🎨",
    "La riqueza no consiste en tener grandes posesiones, sino en tener pocos deseos. 💸",
    "Lo que importa no es lo que te sucede, sino cómo reaccionas ante ello. 🔄",
    "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad. 🍀",
    "Cuanto más valoramos las cosas que están fuera de nuestro control, menos control tenemos. 🎯",
    "Todo el futuro está en la incertidumbre: vive de inmediato. 🌅",
    "Una gema no puede pulirse sin fricción, ni un hombre perfeccionarse sin pruebas. 💎",
    "Es el poder de la mente ser invencible. 🧠",
    "Soportar las pruebas con una mente tranquila le quita a la desgracia su fuerza y ​​su carga. 🧘‍♂️",
    "El destino guía a los dispuestos y arrastra a los reacios. 🌀",
    "Ninguna gran cosa se crea de repente. ⌛",
    "La verdadera felicidad es... disfrutar el presente, sin depender ansiosamente del futuro. 🌼",
    "No busques que todo suceda como deseas, sino más bien desea que todo suceda como realmente sucederá. ⚖️",
    "El único camino hacia la libertad es a través de la autodisciplina. 🔓",
    "El que teme a la muerte nunca hará nada que valga la pena para un hombre que está vivo. 🌅",
    "El autocontrol es fuerza. La calma es maestría. Tienes que llegar a un punto en el que tu estado de ánimo no cambie en función de las acciones insignificantes de otra persona. 🎯",
    "No expliques tu filosofía. Encarnala. 👤",
    "Podrías dejar la vida ahora mismo. Deja que eso determine lo que haces y dices. 💀",
    "Dedícate a la belleza de la vida. Observa las estrellas y mírate a ti mismo corriendo con ellas. 🌌",
    "Para vivir una buena vida: tenemos el potencial para ello. Si pudiéramos aprender a ser indiferentes ante lo que no hace ninguna diferencia. ⚖️",
    "Siempre parece imposible hasta que se hace (Nelson Mandela) 💡",
    "La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas (Jim Ryun) 🚀",
    "La buena fortuna favorece a los atrevidos (Virgilio) 🍀",
    "No hay un sustituto para el trabajo duro (Thomas Edison) 🔨",
    "He fallado una y otra vez a lo largo de mi vida. Es por eso por lo que he tenido éxito (Michael Jordan) 🏀",
    "El hombre que es un maestro de la paciencia, es un maestro de todo lo demás (George Saville) ⏳",
    "Tus talentos y habilidades irán mejorando con el tiempo, pero para eso has de empezar (Martin Luther King) 🎯",
    "Nuestra paciencia conseguirá más cosas que nuestra fuerza (Edmund Burke) 🕰️",
    "Si no vas hasta el final… ¿Por qué empezar? (Joe Namath) 🏁",
    "Los campeones siguen jugando hasta que lo hacen bien (Billie Jean King) 🏆",
    "Es posible recuperarse de una derrota, pero cuesta más perdonarse a uno mismo por no haberlo intentado (George Edward Woodberry) 🤔",
    "La perseverancia puede transformar el fracaso en un logro extraordinario (Matt Biondi) 🌟",
    "La energía y la persistencia conquistan todas las cosas (Benjamin Franklin) ⚡",
    "¡Nunca te rindas! El fracaso y el rechazo son sólo el primer escalón hacia el éxito (Jim Valvano) 🔥",
    "No importa cuán despacio vayas mientras no te detengas (Confucio) 🐢",
    "Ganar no lo es todo, pero querer ganar sí lo es (Vince Lombardi) 🎖️",
    "Puedes encontrar derrotas, pero no debes ser derrotado (Maya Angelou) 🛡️",
    "No es que sea muy listo, es que me quedo durante más tiempo trabajando en los problemas (Albert Einstein) 🧠",
    "El 80% del éxito se basa simplemente en insistir (Woody Allen) 💪",
    "Siempre he creído que si uno se pone a trabajar, los resultados llegarán tarde o temprano (Michael Jordan) ⏳",
    "La fuerza no viene de ganar. Sus luchas desarrollan sus fortalezas. Cuando uno atraviesa dificultades y decide no rendirse, eso es fuerza (Arnold Schwarzenegger) 🏋️",
    "Los tiempos difíciles nunca duran, pero las personas fuertes sí (Robert H. Schuller) 🌅",
    "La fuerza no viene de la capacidad física. Proviene de una voluntad indomable (Mahatma Gandhi) 🕊️",
    "Toda la adversidad que he tenido en mi vida, todos mis problemas y obstáculos, me han fortalecido. Es posible que no te des cuenta cuando sucede, pero una patada en los dientes puede ser la mejor cosa del mundo para ti (Walt Disney) 🎢",
    "Cualquiera puede esconderse. Enfrentar los problemas y buscar la solución es lo que te hace fuerte (Sarah Dessen) 🏋️‍♂️",
    "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer (John R. Wooden) 🚀",
    "Cuanto más trabajo, más suerte parezco tener (Thomas Jefferson) 🍀",
    "La calidad nunca es un accidente, siempre es resultado de un esfuerzo de la inteligencia (John Ruskin) 🏆",
    "Cambia tus pensamientos y cambiarás tu mundo (Norman Vincent Peale) 🔄",
    "Tu educación más importante no está ocurriendo en una clase (Jim Rohn) 🎓",
    "Lo maravilloso de aprender algo es que nadie puede arrebatárnoslo (B. B. King) 📚",
    "El hombre bien preparado para la lucha ha conseguido medio triunfo (Miguel de Cervantes) ⚔️",
    "El éxito depende del esfuerzo (Sófocles) 💪",
    "Haz de cada día una obra maestra (John Wooden) 🎨",
    "No mires el reloj. Haz lo mismo que él: ve avanzando (Sam Levenson) ⏳",
    "Lo que puedes hacer hoy puede mejorar todos tus mañanas (Ralph Martson) 🌅",
    "Todos nosotros sabemos algo. Todos nosotros ignoramos algo. Por eso, aprendemos siempre (Paulo Freire) 🔍",
    "Enseñar no es transferir conocimiento, sino crear las posibilidades para su propia producción o construcción (Paulo Freire) 🏗️",
    "Pregúntate si lo que estás haciendo hoy te acerca al lugar en el que quieres estar mañana (Walt Disney) 🤔",
    "Tú tienes poder sobre tu mente – no fuera en los acontecimientos. Date cuenta de esto y encontrarás la fuerza (Marco Aurelio) 🧠",
    "El estudio no se mide por el número de páginas leídas en una noche, ni por la cantidad de libros leídos en un semestre. Estudiar no es un acto de consumir ideas, sino de crearlas y recrearlas (Paulo Freire) ✨",
    "Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber (Albert Einstein) 🌍"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const marqueeContainer = document.createElement("div");
    marqueeContainer.className = "tb_marqueeContainer";
    marqueeContainer.title = quotes[randomIndex]
    //MOSTRAR PRIMERO EDAD Y TIEMPO RESTANTE PARA DORMIR
    const actualDate = new Date();
    const birthDate = new Date("2006-03-15");
    const ageInMilliseconds = actualDate - birthDate; // Calcular la diferencia en milisegundos entre la fecha actual y la fecha de nacimiento
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const remainingMilliseconds = ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
    const ageInMonths = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    const remainingDays = Math.floor(remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000) / (24 * 60 * 60 * 1000));
    const timeforSleep = new Date().setHours(21, 30, 0, 0) - actualDate; // Establecer la hora para dormir (21:30:00);
    let ageAndSleep = (timeforSleep>=0?`Te quedan ${formatRemaining(timeforSleep, 'h, m, s', true)}`:`Es hora de dormir`) + " | " + `Tienes ${ageInYears} años, ${ageInMonths} meses y ${remainingDays} días`
    marqueeContainer.innerHTML = `<div class="tb_marqueeWrapper"><div class="tb_marqueeContent">${ageAndSleep}</div><div class="tb_marqueeContent">${ageAndSleep}</div></div>`;
    setTimeout(() => { marqueeContainer.innerHTML = `<div class="tb_marqueeWrapper"><div class="tb_marqueeContent">${quotes[randomIndex]}</div><div class="tb_marqueeContent">${quotes[randomIndex]}</div></div>`; }, 20000);
  
    //div para los recuadros de la izquierda
    const leftBoxes = document.createElement("div");
    leftBoxes.className = "tb_leftBoxGroup";
  
    // Crear contenedor flex principal
    const container = document.createElement("tb");

    // div para las barras
    const barsContainer = document.createElement("div");
    barsContainer.className = "tb_barGroup";
    function createProgressBar(color, id, group, text, pointerToggle = false) {
      var bar = document.createElement("div"); 
      color?(bar.style.backgroundColor = color):{}; 
      bar.title = text;
      bar.id = id; 
      bar.className = 'tb_bar';
      group.appendChild(bar);
  
      let box = document.createElement("div");
      box.className = "tb_leftBox";
      box.style.backgroundColor = color;
      box.id = id+"Info";
      box.innerHTML = `${text} (--%)<div>--</div>`;
      if(pointerToggle){ 
        box.style.cursor = "pointer"
        box.title = chrome.i18n.getMessage('toggleTimer');
        bar.style.display = "none"; box.style.display = "none"
        };
      leftBoxes.appendChild(box);
      return [bar, box, text];
    };
  
    //✅ Crear barras de progreso
    let eventProgressBar = createProgressBar("#FF1DCF", "eventProgressBar", barsContainer, "Evento");
    let globalTimerProgressBar = createProgressBar("#5eff00", "globalTimerProgressBar", barsContainer, "Tempo. global", true);
    let localTimerProgressBar = createProgressBar("#FF0000", "localTimerProgressBar", barsContainer, "Tempo. local", true);
    //let birthdayProgressBar = createProgressBar(null, "birthdayProgressBar", barsContainer, "Cumpleaños");
    let ruleProgressBar = createProgressBar("#ff006a", "ruleProgressBar", barsContainer, "30-30-30");
    let dayProgressBar = createProgressBar("#F59E0B", "dayProgressBar", barsContainer, "Día");
    let weekProgressBar = createProgressBar("#3A81F6", "weekProgressBar", barsContainer, "Semana");
    let monthProgressBar = createProgressBar("#0BB87F", "monthProgressBar", barsContainer, "Mes");
    let yearProgressBar = createProgressBar("#6366F1", "yearProgressBar", barsContainer, "Año");
  
    // Agregar los elementos al DOM
    boxesContainer.appendChild(leftBoxes);
    boxesContainer.appendChild(marqueeContainer);
    boxesContainer.appendChild(rightBoxes);
    container.appendChild(boxesContainer);
    container.appendChild(barsContainer);
    document.body.appendChild(container);

    // TEMPORIZADOR GLOBAL ______________________________________________________________________________
    chrome.storage.local.get(["globalEndTime", "globalColor", "globalPaused"], (data) => {
        if (data.globalEndTime) {
            globalTimerProgressBar[0].style.backgroundColor = data.globalColor || "#5eff00";
            updateGlobalTimer();
        }
        if (data.globalPaused) {
            globalTimerProgressBar[1].style.opacity = "0.5"; // Indicar que está pausado
        }
    });

    function updateGlobalTimer() {
        chrome.storage.local.get(["remainingTime", "globalPaused", "globalTimer"], (data) => {
            if (data.remainingTime !== undefined) {
                let totalTime = data.globalTimer*60; // Tiempo total de segundos a minutos
                let remaining = data.remainingTime; // Tiempo restante en minutos
                if (totalTime <= 0) return 100; // Evitar división por cero
                let percentage = ((totalTime - remaining) / totalTime) * 100;
                var globalTimerRemaining = formatRemaining(remaining*1000, 'h, m, s', false);
                globalTimerProgressBar[1].innerHTML = `${globalTimerProgressBar[2]} (${percentage.toFixed(0)}%) <div>${globalTimerRemaining}</div>`;
                globalTimerProgressBar[1].style.display = "flex";
                globalTimerProgressBar[0].style.display = "flex";

                if (!data.globalPaused) {
                    globalTimerProgressBar[1].style.opacity = "1";
                } else {
                    globalTimerProgressBar[1].style.opacity = "0.5";
                }
            }
        });
    }

    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "updateGlobalTimer") {
            let totalTime = message.totalTime*60;
            let timeLeft = message.timeLeft;
            let percentage = ((totalTime - timeLeft) / totalTime) * 100;
            if (timeLeft <= 0) {
                globalTimerProgressBar[0].style.width = `100%`;
                setTimeout(() => {globalTimerProgressBar[0].style.width = `0%`; globalTimerProgressBar[0].style.display = "none"; globalTimerProgressBar[1].style.display = "none"}, 1000);
            } else {
            globalTimerProgressBar[0].style.width = `${percentage}%`;
            globalTimerProgressBar[0].style.display = "flex";
            globalTimerProgressBar[1].style.display = "flex";
            }
            let globalTimerRemaining = formatRemaining(message.timeLeft*1000, 'h, m, s', false);
            globalTimerProgressBar[1].innerHTML = `${globalTimerProgressBar[2]} (${percentage.toFixed(0)}%) <div>${globalTimerRemaining}</div>`;
            if (message.isPaused) {
                globalTimerProgressBar[1].style.opacity = "0.5";
            } else {
                globalTimerProgressBar[1].style.opacity = "1";
            }
        }
    });

    globalTimerProgressBar[1].addEventListener("click", () => {
        chrome.storage.local.get("globalPaused", (data) => {
            if (data.globalPaused) {
                chrome.runtime.sendMessage({ action: "resumeGlobalTimer" });
            } else {
                chrome.runtime.sendMessage({ action: "pauseGlobalTimer" });
            }
        });
    });

    // TEMPORIZADOR LOCAL ______________________________________________________________________________
    let timeLeft = 0;
    let interval = null;
    let paused = false;

    localTimerProgressBar[1].addEventListener("click", () => {
        paused = !paused;
        paused ? (localTimerProgressBar[1].style.opacity = "0.5") : (localTimerProgressBar[1].style.opacity = "1");
    });

    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "startLocalTimer") {
            timeLeft = message.minutes * 60;
            localTimerProgressBar[0].style.backgroundColor = message.color || "#FF0000";
            localTimerProgressBar[0].style.display = "flex";
            localTimerProgressBar[1].style.display = "flex";

            if (interval) clearInterval(interval);
            interval = setInterval(() => {
                if (!chrome.runtime?.id) return clearInterval(interval);
                if (!paused) {
                    if (timeLeft <= 0) {
                        clearInterval(interval);
                        localTimerProgressBar[1].style.display = "none";
                        localTimerProgressBar[0].style.width = `100%`;
                        setTimeout(() => {localTimerProgressBar[0].style.width = `0%`; localTimerProgressBar[0].style.display = "none";}, 1000);
                        chrome.runtime.sendMessage({ action: "showNotification", payload: { title: chrome.i18n.getMessage('localEndTime'), message: message.minutes+" "+chrome.i18n.getMessage('minutos')} });
                        return;
                    }
                    let percentage = ((message.minutes * 60 - timeLeft) / (message.minutes * 60)) * 100;
                    let localTimerRemaining = formatRemaining(timeLeft*1000, 'h, m, s', false);
                    localTimerProgressBar[0].style.width = `${percentage}%`;
                    localTimerProgressBar[1].innerHTML = `${localTimerProgressBar[2]} (${percentage.toFixed(0)}%) <div>${localTimerRemaining}</div>`;
                    timeLeft--;
                }
            }, 1000);
        }
    });

    // CUMPLEAÑOS ______________________________________________________________________________
    chrome.storage.local.get(["birthdayDate", "birthdayColor"], (data) => {
        if (data.birthdayDate) {
            let birthdayProgressBar = createProgressBar("ff7300", "birthdayProgressBar", barsContainer, "Cumpleaños");
            birthdayProgressBar[0].style.color = data.birthdayColor || "black";
            function ajustarCumpleaños(fechaCumpleaños) {
                let fecha = new Date(fechaCumpleaños);
                let offsetMinutos = fecha.getTimezoneOffset();
                let offsetMilisegundos = offsetMinutos * 60 * 1000;
                let fechaAjustada = new Date(fecha.getTime() + offsetMilisegundos);
                return fechaAjustada;
            }
            let today = new Date();
            let birthDate = ajustarCumpleaños(data.birthdayDate); // Ajusta la fecha aquí
            birthDate.setFullYear(today.getFullYear()); // Mantener el mismo año
            if (birthDate < today) {
                birthDate.setFullYear(today.getFullYear() + 1); // Mover al próximo año si ya pasó
            }
            let añoCumpleaños = birthDate.getFullYear();
            let añoAnteriorCumpleaños = añoCumpleaños - 1;
            let totalYearDays = ((añoAnteriorCumpleaños % 4 === 0 && añoAnteriorCumpleaños % 100 !== 0) || añoAnteriorCumpleaños % 400 === 0)? 366 : 365;
            let daysLeft = Math.ceil((birthDate - today) / (1000 * 60 * 60 * 24));
            let percentage = ((totalYearDays - daysLeft) / totalYearDays) * 100;
            let millisecondsLeft = birthDate - today;
            let birthdayRemaining = formatRemaining(millisecondsLeft, 'd, h, m', false);
            var ageInMilliseconds = new Date - new Date(data.birthdayDate);
            birthdayProgressBar[0].style.width = `${percentage}%`;
            birthdayProgressBar[1].innerHTML = `${birthdayProgressBar[2]} (${percentage.toFixed(0)}%) <div>${birthdayRemaining} | ${(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)).toFixed(3)}</div>`;
            }
    });
    
    // REGLA DEL 30-30-30 ______________________________________________________________________________
    let update30Rule = setInterval(update30RuleDisplay, 1000);
    function update30RuleDisplay() {
        //Chequear si chrome funciona
        if (!chrome.runtime?.id) return clearInterval(update30Rule);

        chrome.runtime.sendMessage({ action: "get30RuleTime" }, (response) => {
            if (response && response.remaining > 0) {
                let timeLeft = response.remaining;
                let totalTime = response.rule30Time*60; // minutos a segundos
                let percentage = ((totalTime - timeLeft) / totalTime) * 100; // De 0% a 100%
                let ruleRemaining = formatRemaining(timeLeft*1000, 'h, m, s', false);
                ruleProgressBar[0].style.width = `${percentage}%`;
                ruleProgressBar[1].innerHTML = `${ruleProgressBar[2]} (${percentage.toFixed(0)}%) <div>${ruleRemaining}</div>`;
            }
        });
        
    }

    // EVENTOS ____________________________________________________________________________________________
    eventProgressBar[1].style.display = "none";
    function encontrarEventoActual(eventos) {
        let ahora = new Date();
        let eventoEncontrado = null;

        for (let i = 0; i < eventos.length; i++) {
            let inicioEvento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), eventos[i].inicio.hora, eventos[i].inicio.minutos);
            let finEvento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), eventos[i].fin.hora, eventos[i].fin.minutos);

            if (ahora >= inicioEvento && ahora <= finEvento) {
                return { index: i, evento: eventos[i] };
            }

            if (ahora < inicioEvento && !eventoEncontrado) {
                eventoEncontrado = { index: i, evento: eventos[i] }; // Guardamos el próximo evento
            }
        }

        return eventoEncontrado; // Si no hay evento actual, devolver el próximo
    }

    const updateEvents = setInterval(actualizarEventos, 1000);
    function actualizarEventos() {
        if (!chrome.runtime?.id) return clearInterval(updateEvents);
        chrome.storage.local.get(["eventos"], (data) => {
            let eventos = data.eventos || [];
            if (eventos.length === 0) {
                eventProgressBar[1].innerHTML = `${eventProgressBar[2]} <div>No hay eventos programados</div>`;
                eventProgressBar[0].style.display = "none"; eventProgressBar[1].style.display = "none"; eventProgressBar[0].style.width = "0";
                return;
            }

            let eventoData = encontrarEventoActual(eventos);
            if (!eventoData) {
                eventProgressBar[1].innerHTML = `${eventProgressBar[2]} <div>No hay eventos ahora</div>`;
                eventProgressBar[0].style.display = "none"; eventProgressBar[1].style.display = "none"; eventProgressBar[0].style.width = "0";
                return;
            }

            let eventoActual = eventoData.evento;
            let ahora = new Date();
            let inicioEvento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), eventoActual.inicio.hora, eventoActual.inicio.minutos);
            let finEvento = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), eventoActual.fin.hora, eventoActual.fin.minutos);

            if (ahora > finEvento) {
                eventProgressBar[1].innerHTML = `${eventProgressBar[2]} <div>No hay eventos ahora</div>`;
                eventProgressBar[0].style.display = "none"; eventProgressBar[1].style.display = "none"; eventProgressBar[0].style.width = "0";
                return;
            }

            let tiempoRestante = finEvento - ahora;
            let porcentajeAvance = ((ahora - inicioEvento) / (finEvento - inicioEvento)) * 100;
            porcentajeAvance = Math.min(100, Math.max(0, porcentajeAvance)); // Mantener entre 0% y 100%
            eventProgressBar[0].style.width = `${porcentajeAvance}%`;
            eventProgressBar[0].style.display = "flex"; eventProgressBar[1].style.display = "flex";
            eventProgressBar[1].innerHTML = `${eventoActual.nombre} (${porcentajeAvance.toFixed(0)}%) <div> ${formatRemaining(tiempoRestante, 'h, m, s', false)}</div>`;
            eventProgressBar[1].title = eventoActual.descripcion;
        });
    }
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === "saveEvents") {
            actualizarEventos();
        }
    });

    //FUNCION DE VERIFICAR 3 BARRAS
    function verify2bars() {
        count = 0;
        Array.from(barsContainer.children).forEach(bar => {
            const width = bar.style.width ? parseFloat(bar.style.width) : 0;
            const display = bar.style.display;
            if (width > 0 || display === "flex") {
                count++;
            }
        });
        let hiddenBars = count>2?(count-2):0;
        container.style.bottom = `calc(-0.3rem*${hiddenBars} - 1px*${hiddenBars})`;
    }
    verify2bars();
    // DIA, SEMANA, MES, AÑO ______________________________________________________________________________
        chrome.storage.local.get(["dayColor", "weekColor", "monthColor", "yearColor"], (data) => {
            if (data.dayColor) dayProgressBar[0].style.backgroundColor = data.dayColor;
            if (data.weekColor) weekProgressBar[0].style.backgroundColor = data.weekColor;
            if (data.monthColor) monthProgressBar[0].style.backgroundColor = data.monthColor;
            if (data.yearColor) yearProgressBar[0].style.backgroundColor = data.yearColor;
        });
        const updateDay = setInterval(updateAllTimers, 1000);
        function updateAllTimers() {
            if (!chrome.runtime?.id) return clearInterval(updateDay) & document.querySelectorAll("tb")[0].remove();
            if(document.hidden) return;
            /*Verificar que haya solo 2 barras */
            verify2bars();
            /*All timers*/

            let now = new Date();
            let totalMonthdays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            var año = new Date().getFullYear(); 
            let totalYeardays = ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0))?366:365;
            let currentDateNow = new Date()
            let currentTime = currentDateNow.getTime();
            let elapsedDayTime = currentTime - new Date(currentTime).setHours(0, 0, 0, 0);
            let startOfMonth = new Date(currentDateNow.getFullYear(), currentDateNow.getMonth(), 1);
            let elapsedMonthTime = currentTime - startOfMonth.getTime();
            let elapsedYearTime = currentTime - new Date(currentTime).setMonth(0, 1);
            let totalDayTime = 24 * 60 * 60 * 1000;
            let totalMonthTime = totalMonthdays * totalDayTime;
            let totalYearTime = totalYeardays * totalDayTime;
            let dayPercentage = (elapsedDayTime / totalDayTime) * 100;
            let startOfWeek = new Date(currentDateNow);
            startOfWeek.setDate(currentDateNow.getDate() - currentDateNow.getDay());
            let endOfWeek = new Date(startOfWeek);
            endOfWeek.setDate(startOfWeek.getDate() + 7);
            let startOfYear = new Date(currentDateNow.getFullYear(), 0, 1);
            let endOfYear = new Date(currentDateNow.getFullYear(), 11, 31);
            let totalDaysInYear = (endOfYear - startOfYear) / (24 * 60 * 60 * 1000) + 1;
            let totalWeeksInYear = Math.ceil(totalDaysInYear / 7);
            let startOfYearWeek = new Date(startOfYear);
            startOfYearWeek.setDate(startOfYear.getDate() - startOfYear.getDay());
            let currentWeekOfYear = Math.ceil(((currentDateNow - startOfYearWeek) / (24 * 60 * 60 * 1000) + 1) / 7);
            let weekPercentage = ((currentDateNow - startOfWeek) / (endOfWeek - startOfWeek)) * 100;
            let monthPercentage = (elapsedMonthTime / totalMonthTime) * 100;
            let yearPercentage = (elapsedYearTime / totalYearTime) * 100;
        
            dayProgressBar[0].style.width = `${dayPercentage}%`;
            weekProgressBar[0].style.width = `${weekPercentage}%`;
            monthProgressBar[0].style.width = `${monthPercentage}%`;
            yearProgressBar[0].style.width = `${yearPercentage}%`;
            let dayTimeRemaining = formatRemaining(totalDayTime - elapsedDayTime, 'h, m, s', false);
            let weekTimeRemaining = formatRemaining(endOfWeek - now, 'd', false);
            let monthTimeRemaining = formatRemaining(totalMonthTime - elapsedMonthTime, 'd, h', false);
            let yearTimeRemaining = formatRemaining(totalYearTime - elapsedYearTime, 't, d', false);
            dayProgressBar[1].innerHTML = `${dayProgressBar[2]} (${dayPercentage.toFixed(0)}%) <div>${dayTimeRemaining}</div>`;
            weekProgressBar[1].innerHTML = `${weekProgressBar[2]} (${weekPercentage.toFixed(0)}%) <div>${weekTimeRemaining} | ${currentWeekOfYear}/${totalWeeksInYear}</div>`;
            monthProgressBar[1].innerHTML = `${monthProgressBar[2]} (${monthPercentage.toFixed(0)}%) <div>${monthTimeRemaining}</div>`;
            yearProgressBar[1].innerHTML = `${yearProgressBar[2]} (${yearPercentage.toFixed(0)}%) <div>${yearTimeRemaining.replace(",", " |")}</div>`;
    }

    // Formatea el tiempo restante en formato 'días horas'
    function formatRemaining(remainingTime, format, fullDescriptions = true) {
      const dayInMilliseconds = 24 * 60 * 60 * 1000;
      const hourInMilliseconds = 60 * 60 * 1000;
      const minuteInMilliseconds = 60 * 1000;
      const monthInMilliseconds = 30.44 * dayInMilliseconds;
      const days = Math.floor(remainingTime / dayInMilliseconds);
      const hours = Math.floor((remainingTime % dayInMilliseconds) / hourInMilliseconds);
      const minutes = Math.floor((remainingTime % hourInMilliseconds) / minuteInMilliseconds);
      const seconds = Math.floor((remainingTime % minuteInMilliseconds) / 1000);
      const months = Math.floor(remainingTime / monthInMilliseconds);
      const formatArray = format.split(',').map((item) => item.trim());
      let result = '';
      formatArray.forEach((item) => {
        switch (item) {
          case 't':
            if (months > 0) {
              result += fullDescriptions ? `${months} mes${months !== 1 ? 'es' : ''}, ` : `${months} m, `;
            }
            break;
          case 'd':
            if (days >= 0) {
                if(days == 0 && months <= 0) break;
              result += fullDescriptions ? `${days} día${days !== 1 ? 's' : ''}, ` : `${days} d, `;
            }
            break;
          case 'h':
            if (hours >= 0) {
                if(hours == 0 && days <= 0 && months <= 0) break;
              result += fullDescriptions ? `${hours} hora${hours !== 1 ? 's' : ''}, ` : `${hours} h, `;
            }
            break;
          case 'm':
            if (minutes >= 0) {
                if(minutes == 0 && hours <= 0 && days <= 0 && months <= 0) break;
              result += fullDescriptions ? `${minutes} minuto${minutes !== 1 ? 's' : ''}, ` : `${minutes} m, `;
            }
            break;
          case 's':
            if (seconds >= 0) {
              result += fullDescriptions ? `${seconds} segundo${seconds !== 1 ? 's' : ''}, ` : `${seconds} s, `;
            }
            break;
        }
      });
      result = fullDescriptions?result.slice(0, -2).replace(/,([^,]*)$/, ' y$1'):result.slice(0, -2); // Reemplaza la última coma con "and"
      return result;
    };

    /* VISUALIZADOR */
    let audioContext = null;
    let analyser = null;
    let dataArray = null;
    let bars = [];
    let currentSource = null;
    let lastPlayedElement = null;
    let sourceMap = new WeakMap();

    chrome.storage.sync.get(["allowedDomains", "visualizerEnabled"], function (data) {
        const allowed = data.allowedDomains || ["youtube.com", "spotify.com"];
        const isEnabled = data.visualizerEnabled !== false;
    
        if (!isEnabled || !allowed.some(domain => window.location.hostname.includes(domain))) return;
    
        createVisualizer();
        observeMediaChanges();
    });

    // 🔹 Crea el visualizador si no existe
    function createVisualizer() {
    let visualizer = document.getElementById("tb_visualizer");
    if (!visualizer) {
        visualizer = document.createElement("div");
        visualizer.id = "tb_visualizer";
        container.appendChild(visualizer);

        let numBars = 50;
        for (let i = 0; i < numBars; i++) {
        let bar = document.createElement("div");
        bar.style.height = "0%";
        visualizer.appendChild(bar);
        bars.push(bar);
        }
    }
    }

    // 🔹 Detecta cuál `<video>` o `<audio>` está reproduciéndose
    function detectPlayingElement() {
    let elements = [...document.querySelectorAll("video, audio")];
    let playingElement = elements.find(el => !el.paused && el.readyState >= 2);

    if (!playingElement) return lastPlayedElement; // Mantener el último si no hay ninguno
    return playingElement;
    }

    // 🔹 Escanea todo el documento en busca de audio oculto (para Discord)
    function findHiddenAudio() {
    let hiddenAudio = [...document.querySelectorAll("audio")].find(audio => {
        return audio.readyState >= 2 && !audio.paused;
    });
    return hiddenAudio || detectPlayingElement();
    }

    // 🔹 Aplica AudioContext correctamente
    function applyAudioContext(element) {
    if (!element || element === lastPlayedElement) return;

    if (!audioContext) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
    }

    // 🛠️ Reanudar el `AudioContext` si está suspendido
    if (audioContext.state === "suspended") {
        audioContext.resume().catch(err => console.warn("Error reanudando AudioContext:", err));
    }

    // ⚡ Reutilizar conexión si ya existe
    if (sourceMap.has(element)) {
        currentSource = sourceMap.get(element);
    } else {
        try {
        currentSource = audioContext.createMediaElementSource(element);
        sourceMap.set(element, currentSource);
        } catch (e) {
        console.warn("Error asignando AudioContext:", e);
        return;
        }
    }

    // 🛑 Si ya estaba conectado, no volver a conectar
    if (!currentSource) return;

    currentSource.connect(analyser);
    analyser.connect(audioContext.destination);
    lastPlayedElement = element;

    renderFrame();
    checkAudioProcessing(); // Verifica si se está procesando audio
    }

    // 🔹 Renderiza el visualizador de audio
    function renderFrame() {
    if (!analyser) return;
    requestAnimationFrame(renderFrame);
    if (document.fullscreenElement || document.hidden) return;
    analyser.getByteFrequencyData(dataArray);
    let isSilent = dataArray.every(value => value === 0);
    // 🎛️ Mostrar u ocultar el visualizador
    let visualizer = document.getElementById("tb_visualizer");
    if (visualizer) {
        visualizer.style.display = isSilent ? "none" : "flex";
    }
    // 🔊 Actualizar barras solo si hay audio
    if (!isSilent) {
        bars.forEach((bar, i) => {
            let barHeight = (dataArray[i] / 255) * 100;
            bar.style.height = barHeight + "%";
        });
    }
    }

    // 🔹 Verifica si hay datos en el audio
    function checkAudioProcessing() {
    setTimeout(() => {
        analyser.getByteFrequencyData(dataArray);
        let isSilent = dataArray.every(value => value === 0);

        if (isSilent) {
        console.warn("No se detecta audio. Intentando reconectar...");
        let newElement = findHiddenAudio();
        if (newElement) applyAudioContext(newElement);
        }
    }, 2000); // Revisa después de 2 segundos
    }

    // 🔹 Observa cambios en la reproducción
    function observeMediaChanges() {
    setInterval(() => {
        let activeElement = findHiddenAudio();
        applyAudioContext(activeElement);
    }, 500);
    }

})();
