// POPUP COMPLETED
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      loader.classList.toggle("fade")
      setTimeout(() => { document.querySelector("#loader").style.display = "none" }, 500)
      document.querySelector("body").style.visibility = "visible"
    }
};
var el = document.body;
var x = null;
var y = null;
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    el.style.backgroundPositionX = -x*(2/100) + "px";
    el.style.backgroundPositionY = -y*(2/100) + "px";
}
  

//CARGAR IDIOMA
(function localizeHtmlPage() {
    var objects = document.getElementsByTagName("body"); // Solo el body
    for (var j = 0; j < objects.length; j++) {
      var obj = objects[j];
  
      var valStrH = obj.innerHTML.toString();
      var valNewH = valStrH.replace(/__MSG_(\w+)__/g, function (match, v1) {
        return v1 ? chrome.i18n.getMessage(v1) : "";
      });
  
      if (valNewH != valStrH) {
        obj.innerHTML = valNewH;
      }
    }
})();

//AGREGAR LINKS DE REDES SOCIALES Agregar los links de los botones
(function links() {
    document.getElementById('link_tutorial').addEventListener("click", () => {
        chrome.tabs.create({ url: 'https://github.com/Manzanitabot123/tickbar/issues' });
    });
    document.getElementById('link_repo').addEventListener("click", () => {
        chrome.tabs.create({ url: 'https://github.com/Manzanitabot123/tickbar' });
    });
    document.getElementById('link_sugerencia').addEventListener("click", () => {
        chrome.tabs.create({ url: 'https://github.com/Manzanitabot123/tickbar/issues' });
    });
})();

//CARGAR WALLPAPER
chrome.storage.local.get(["imageURL"], (obj) => {
  const defwallpaper = chrome.runtime.getURL("icons/icon.png"); // Puedes cambiarlo por otro URL
  var finalwallpaper;
  if (obj.imageURL !== undefined) {
     finalwallpaper = obj.imageURL
  } else {
     finalwallpaper = defwallpaper
  };
  document.getElementById("wallpaper").src = finalwallpaper;
  document.getElementById("wallpaperurl").href = finalwallpaper;
});

//SUBIR WALLPAPER POR URL
document.getElementById("activar").addEventListener('click', function() {
  var wallpaperurl = document.getElementById("wallpaperwithurl").value;
  try{
    function isImage(url) {
      return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }
    const wallpaperurlxd = document.getElementById("wallpaperwithurl").value;
    if (isImage(wallpaperurlxd) == true && wallpaperurlxd.length > 15) {
    chrome.storage.local.set({ imageURL: wallpaperurl }, function () {
        document.getElementById('wallpaper').src = wallpaperurl;
        document.getElementById('wallpaperurl').href = wallpaperurl;
    });
    alert("LISTO");
    } else if (wallpaperurlxd == "") {
    alert("FALTA URL");
    } else {
    alert("esa url no es una imagen");
    }
  } catch { 
    alert("Ha ocurrido un error");
  }
}, false)

//SUBIR WALLPAPER POR ARCHIVO
document.querySelector('input[type="file"]').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            try {
                var value = reader.result; // Base64 de la imagen
                chrome.storage.local.set({ imageURL: value }, function () { // Guarda correctamente en Chrome Storage
                    document.getElementById('wallpaper').src = value;
                    document.getElementById('wallpaperurl').href = value;
                });
            } catch (error) { 
                console.log(error);
            }
        };
        reader.readAsDataURL(file);
    }
});


//WALLPAPEER DEL POPUP
fetch('https://www.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=10')
.then(response => response.text())
.then(data => {
  var input=data.replace('/th?','https://bing.com/th?'); var expression = /(\/th\?)[^\s\.]+\.[^\s]{2,};pid=hp/gi;
  var matches = input.match(expression); const re = /\/th\?/gi; 
  const fondos = JSON.parse(JSON.stringify(matches).replace(re, 'https://bing.com/th?'));
  const randIndex = Math.floor(Math.random() * fondos.length);
  chrome.storage.sync.set({ fondosDiarios: fondos });
  document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${fondos[randIndex]}')`;
  console.log(fondos[randIndex]);
})
.catch(error => {
    var fondogod = [
    "https://c.tenor.com/M1z8DYZXVjkAAAAC/wallpaper.gif",
    "https://i.pinimg.com/originals/5f/8b/4a/5f8b4a682b9bb09ec3bac28d2ea4ad47.jpg",
    "https://giffiles.alphacoders.com/351/35116.gif",
    "https://c.tenor.com/WeOTjjZcq38AAAAC/starry-night-anime.gif",
    "https://c.tenor.com/IqSp4ITuCdcAAAAC/satorou-gojo-satoru-gojo.gif",
    "https://c.tenor.com/J2X-zwLs33AAAAAC/neko-wallpaper.gif",
    "https://cutewallpaper.org/26/best-anime-wallpaper-animated-gif/waifus-wallpaper-4k-gif-waifus-gifs-tenor-supports-processing-image-amp-gif-amp-video-at-the-same-time-lorna-shroyer.gif", "https://c.tenor.com/6LyXLgF8ksUAAAAd/anime-gif.gif", "https://giffiles.alphacoders.com/147/14784.gif", "https://c.tenor.com/_f2m8iblpNUAAAAM/anime.gif", "https://i.pinimg.com/originals/da/cc/5f/dacc5f9430c35c7af60e62d67a8abec7.gif", "https://thumbs.gfycat.com/NippyExhaustedAsiaticmouflon-max-1mb.gif", "https://wallpaperaccess.com/full/2641099.gif", "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg", "https://isenacode.com/wp-content/uploads/2020/09/wallpaper-iphone-w39-1-scaled.jpg", "https://www.redhoku.com/wp-content/uploads/IPhone_xs_wallpaper_-5ce861ae-18a8-4744-9641-13babbf54801-576x1024.jpg", "https://i.pinimg.com/originals/81/28/a4/8128a49d5f7b10b38d9aa6dd17544198.gif", "https://acegif.com/wp-content/uploads/2021/4fh5wi/animated-wallpaper-240x320px-acegif-38.gif",
    "https://c.tenor.com/M1z8DYZXVjkAAAAC/wallpaper.gif",
    "https://i.pinimg.com/originals/44/f0/df/44f0df362bbcf1e1fdbf39190e2a3818.gif",
    "https://acegif.com/wp-content/uploads/2021/4fh5wi/animated-wallpaper-240x320px-acegif-38.gif",
    "https://i.giphy.com/media/pOLspHmrKmQmc/giphy.gif",
    "https://raw.githubusercontent.com/adi1090x/files/master/dynamic-wallpaper/desert.gif",
    "https://wallpaperaccess.com/full/869910.gif",
    "https://64.media.tumblr.com/6cc55cb55e28123e2ad357d9f07c7bc5/tumblr_psa72bs62w1upcvga_540.gif",
    "https://swall.teahub.io/photos/small/292-2927812_burbujas-de-colores-gif.jpg",
    "https://i.pinimg.com/originals/33/1d/34/331d344c012c1ff4307858f8c9f38706.gif",
    "https://i.pinimg.com/736x/32/5b/3b/325b3b3520e91b88299725ce8cca315a.jpg",
    "http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg",
    "https://i.pinimg.com/736x/cf/2e/a8/cf2ea86518efd2e38f7b1e44ab108cd4.jpg",
    "https://w0.peakpx.com/wallpaper/305/842/HD-wallpaper-paisajes-lighthouse-night-water.jpg",
    "https://bestwallpapers.net/wp-content/uploads/2020/03/Android-Phone-Wallpapers-Most-Android-Phone-Wallpaper-Download.jpeg",
    "https://wallpapercave.com/wp/wp7504908.jpg",
    "https://www.fonewalls.com/wp-content/uploads/2019/11/Space-Wallpaper-for-Phone-001-300x585.jpg",
    "https://preview.redd.it/gdsbdf97ihq31.png?auto=webp&s=1c659c7827668b90ec2cae6b3a22bde9dd70fb19",
    "https://cdn.wallpapersafari.com/22/42/JCOAlr.jpg",
    "https://wallpapercave.com/wp/wp4768945.jpg",
    "https://wallpaperaccess.com/full/1682077.png",
    "https://wallpaperaccess.com/full/797185.png",
    "https://img.lovepik.com/background/20211029/medium/lovepik-cell-phone-wallpaper-for-boys-background-image_400268370.jpg",
    "https://wallpapercave.com/wp/wp4788621.jpg",
    "https://www.ixpap.com/images/2021/02/phone-wallpapers-ixpap-15.jpg",
    "https://www.teahub.io/photos/full/288-2886235_cyberpunk-2077-wallpaper-phone.jpg",
    "https://c.tenor.com/uLwvYaB7_68AAAAM/convenience-store-pixel-art.gif",
    "https://wallpapercave.com/wp/wp6650166.gif",
    "https://64.media.tumblr.com/fc94627a6c3fed6de7d6e76e08e4421a/tumblr_pb1cn2xhN81rnbw6mo1_1280.gif",
    "https://64.media.tumblr.com/9214f4d92f9ec02f0ef9099b03592591/tumblr_pblgs4H8WL1rnbw6mo1_1280.gif"
    ];
    var número = Math.floor((Math.random() * fondogod.length)); 
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('${fondogod[número]}')`;
    console.error(error)
    }
);
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";

/*
(async () => {
  try {  
    const res = await fetch("https://simplecustommeet.free.beeceptor.com");  
    const out = await res.json()  
    console.log("Versión Actual: " + out.version);
    if (out.version == "1.3.1") { } else { alert("No tienes la ultima versión, puedes actualizarla aquí -> https://github.com/Manzanitabot123/Simple-Custom-Meet-Extension")}
  } catch {  }  
})()
*/

//GLOBAL TIMER
document.addEventListener("DOMContentLoaded", function () {
    const globalSelect = document.getElementById("globalTimeSelect");
    const globalCustomInput = document.getElementById("globalCustomTime");
    const globalColor = document.getElementById("globalTimerColor");
    const startGlobalTimer = document.getElementById("startGlobalTimer");
    const toggleGlobalTimer = document.getElementById("toggleGlobalTimer");

    globalSelect.addEventListener("change", () => {
        globalCustomInput.style.display = globalSelect.value === "custom" ? "block" : "none";
    });

    startGlobalTimer.addEventListener("click", () => {
        let minutes = globalSelect.value === "custom" ? parseInt(globalCustomInput.value) : parseInt(globalSelect.value);
        let color = globalColor.value;

        if (isNaN(minutes) || minutes <= 0) {
            alert("Ingresa un tiempo válido");
            return;
        }

        chrome.storage.local.set({ globalTimer: minutes, globalColor: color });

        chrome.runtime.sendMessage({ action: "startGlobalTimer", minutes });

        window.close();
    });

    toggleGlobalTimer.addEventListener("click", () => {
        chrome.storage.local.get("globalPaused", (data) => {
            if (data.globalPaused) {
                chrome.runtime.sendMessage({ action: "resumeGlobalTimer" });
            } else {
                chrome.runtime.sendMessage({ action: "pauseGlobalTimer" });
            }
        });
    });

    chrome.storage.local.get("globalColor", (data) => {
        if (data.globalColor) {
            globalColor.value = data.globalColor;
        }
    });
});


//LOCAL TIMER
document.addEventListener("DOMContentLoaded", function () {
    const localSelect = document.getElementById("localTimeSelect");
    const localCustomInput = document.getElementById("localCustomTime");
    const localColor = document.getElementById("localTimerColor");
    const startLocalTimer = document.getElementById("startLocalTimer");

    // Mostrar input si selecciona "Personalizado"
    localSelect.addEventListener("change", () => {
        localCustomInput.style.display = localSelect.value === "custom" ? "block" : "none";
    });

    // Iniciar temporizador local cuando el usuario lo decida
    startLocalTimer.addEventListener("click", () => {
        let minutes = localSelect.value === "custom" ? parseInt(localCustomInput.value) : parseInt(localSelect.value);
        let color = localColor.value;

        if (isNaN(minutes) || minutes <= 0) {
            alert("Ingresa un tiempo válido");
            return;
        }

        // Guardar configuración
        chrome.storage.local.set({ localTimer: minutes, localColor: color });

        // Enviar mensaje a `content.js` en la pestaña actual
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "startLocalTimer", minutes, color });
        });

        window.close();
    });

    // Cargar color previamente guardado
    chrome.storage.local.get("localColor", (data) => {
        if (data.localColor) {
            localColor.value = data.localColor;
        } else { localColor.value = "#FF0000" }
    });
});



// BIRTHDAY TIMER
document.addEventListener("DOMContentLoaded", function () {
    const birthdayInput = document.getElementById("birthdayDate");
    const birthdayColor = document.getElementById("birthdayColor");
    const saveBirthday = document.getElementById("saveBirthday");

    // Cargar valores guardados
    chrome.storage.local.get(["birthdayDate", "birthdayColor"], (data) => {
        if (data.birthdayDate) {
            birthdayInput.value = data.birthdayDate;
        } else {
            let today = new Date();
            birthdayInput.value = `${today.getFullYear()}-12-25`; // 25 de diciembre por defecto
        }

        if (data.birthdayColor) {
            birthdayColor.value = data.birthdayColor;
        }
    });

    saveBirthday.addEventListener("click", () => {
        let date = birthdayInput.value;
        let color = birthdayColor.value;

        chrome.storage.local.set({ birthdayDate: date, birthdayColor: color });

        // Enviar mensaje a content.js
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "updateBirthday", date });
        });

        // Cerrar popup
        window.close();
    });
});

// 30-30-30 RULE
document.addEventListener("DOMContentLoaded", function () {
    const rule30TimeDisplay = document.getElementById("rule30Time");
    const rule30Increase = document.getElementById("increaseRule30");
    const rule30Decrease = document.getElementById("decreaseRule30");
    const rule30Save = document.getElementById("saveRule30Time");
    const rule30Color = document.getElementById("rule30Color");
    const rule30Toggle = document.getElementById("toggleRule30");

    let rule30Time = 30;

    chrome.storage.local.get(["rule30Time", "rule30Color"], (data) => {
        if (data.rule30Time) rule30Time = data.rule30Time;
        rule30TimeDisplay.innerText = `${rule30Time} min`;
        if (data.rule30Color) rule30Color.value = data.rule30Color;
    });

    rule30Increase.addEventListener("click", () => {
        rule30Time += 1;
        rule30TimeDisplay.innerText = `${rule30Time} min`;
    });

    rule30Decrease.addEventListener("click", () => {
        if (rule30Time > 1) {
            rule30Time -= 1;
            rule30TimeDisplay.innerText = `${rule30Time} min`;
        }
    });

    rule30Save.addEventListener("click", () => {
        chrome.storage.local.set({ rule30Time, rule30Color: rule30Color.value });

        // Notificar a `background.js`
        chrome.runtime.sendMessage({ action: "update30RuleTime", minutes: rule30Time });

        // Notificar a `content.js`
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { action: "update30Rule", minutes: rule30Time });
        });

        window.close();
    });

    rule30Toggle.addEventListener("click", () => {
        let newState = rule30Toggle.innerText === "Activar";
        rule30Toggle.innerText = newState ? "Desactivar" : "Activar";

        chrome.runtime.sendMessage({ action: "toggle30Rule", state: newState });
    });
});

//DAY MONTH YEAR TIMER
document.addEventListener("DOMContentLoaded", function () {
    const dayColor = document.getElementById("dayColor");
    const weekColor = document.getElementById("weekColor");
    const monthColor = document.getElementById("monthColor");
    const yearColor = document.getElementById("yearColor");
    const saveColors = document.getElementById("saveColors");

    // Cargar colores guardados
    chrome.storage.local.get(["dayColor", "weekColor", "monthColor", "yearColor"], (data) => {
        if (data.dayColor) dayColor.value = data.dayColor;
        if (data.weekColor) weekColor.value = data.weekColor;
        if (data.monthColor) monthColor.value = data.monthColor;
        if (data.yearColor) yearColor.value = data.yearColor;
    });

    saveColors.addEventListener("click", () => {
        chrome.storage.local.set({
            dayColor: dayColor.value,
            weekColor: weekColor.value,
            monthColor: monthColor.value,
            yearColor: yearColor.value
        });

        window.close();
    });
});

//MUSIC
document.addEventListener("DOMContentLoaded", function () {
    const stationSelect = document.getElementById("stationSelect");
    const prevTrack = document.getElementById("prevTrack");
    const nextTrack = document.getElementById("nextTrack");
    const playPause = document.getElementById("togglePlay");
    const volumeControl = document.getElementById("volumeControl");

    var isPlaying = false;

    // Cargar configuración guardada
    chrome.storage.local.get(["currentStation", "volumeLevel", "isPlaying"], (data) => {
        if (data.currentStation) stationSelect.value = data.currentStation;
        if (data.volumeLevel !== undefined) volumeControl.value = data.volumeLevel;
        if (data.isPlaying !== undefined) {
            isPlaying = data.isPlaying;
        }
        playPause.innerText = isPlaying ? "Pausar" : "Reproducir";
    });

    stationSelect.addEventListener("change", () => {
        chrome.runtime.sendMessage({ action: "setStation", station: stationSelect.value });
        isPlaying = true;
        playPause.innerText = "Pausar";
    });

    prevTrack.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "prevTrack" });
        isPlaying = true;
        playPause.innerText = "Pausar";
    });

    nextTrack.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "nextTrack" });
        isPlaying = true;
        playPause.innerText = "Pausar";
    });

    playPause.addEventListener("click", () => {
        isPlaying = !isPlaying;
        playPause.innerText = isPlaying ? "Pausar" : "Reproducir";
        chrome.runtime.sendMessage({ action: "togglePlay" });
        console.log('aaa')
    });
    volumeControl.addEventListener("input", () => {
        chrome.runtime.sendMessage({ action: "setVolume", volume: volumeControl.value });
    });
});


//TAREAS Y ANIMO
document.addEventListener("DOMContentLoaded", function () {
    const taskContainer = document.getElementById("taskContainer");
    const addTaskBtn = document.getElementById("addTask");
    const saveTasksBtn = document.getElementById("saveTasks");
    const prevDayBtn = document.getElementById("prevDayBtn");
    const nextDayBtn = document.getElementById("nextDayBtn");
    const moodButtons = document.querySelectorAll(".feeling");
    const moodDisplay = document.getElementById("average-mood");
    const maxTasks = 8;
    let currentDate = new Date();
    let today = new Date();

    today.setHours(0, 0, 0, 0); // Asegurar que solo comparamos la fecha sin horas

    updateJournalDate(currentDate);
    loadTasks(currentDate);
    updateAverageMood();

    prevDayBtn.addEventListener("click", () => changeDay(-1));
    nextDayBtn.addEventListener("click", () => changeDay(1));
    saveTasksBtn.addEventListener("click", () => saveTasks());

    function changeDay(days) {
        currentDate.setDate(currentDate.getDate() + days);
        updateJournalDate(currentDate);
        loadTasks(currentDate);
        loadMood(currentDate);
    }

    function updateJournalDate(date) {
        document.getElementById("journal-date").innerText = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    function loadTasks(date) {
        if(date < today){addTaskBtn.style.display = "none" ;saveTasksBtn.style.display = "none" } else { addTaskBtn.style.display = "inline"; saveTasksBtn.style.display = "inline" }
        taskContainer.innerHTML = "";
        const key = formatDateKey(date);
        chrome.storage.local.get([key + "_tasks"], (data) => {
            let tasks = data[key + "_tasks"] || [];
            tasks.forEach((task, index) => createTaskElement(task.text, task.completed, index));
        });
    }

    function createTaskElement(text = "", completed = false, index = null) {
        let isPast = currentDate < today; // Si la fecha es pasada
        let isFuture = currentDate > today;
        if (taskContainer.children.length >= maxTasks) return; // Límite de 8 tareas

        let taskDiv = document.createElement("div");
        let taskInput = document.createElement("input");
        let checkBtn = document.createElement("button");
        let removeBtn = document.createElement("button");

        taskInput.type = "text";
        taskInput.maxLength = 45;
        taskInput.value = text;
        taskInput.placeholder = "Nueva tarea";
        taskInput.disabled = completed || isPast;

        checkBtn.innerText = "✔";
        checkBtn.style.display = text.trim() !== "" && !completed ? "inline-block" : "none";
        checkBtn.addEventListener("click", () => {
            taskInput.disabled = true;
            checkBtn.style.display = "none";
            removeBtn.style.display = "inline"; // Mostrar botón de eliminar
            taskInput.style.background = "lightgreen";
            saveTasks();
        });

        removeBtn.innerText = "❌";
        removeBtn.style.display = completed ? "inline" : "none"; // Solo visible si está completado
        removeBtn.addEventListener("click", () => {
            taskInput.value = "";
            taskInput.disabled = false;
            removeBtn.style.display = "none";
            taskInput.style.background = "white";
            saveTasks();
        });

        if (isPast) { checkBtn.style.display = "none"; removeBtn.style.display = "none";}
        if (completed) {
            taskInput.style.background = "lightgreen";
        } else if (isPast && text.trim() !== "") {
            taskInput.style.background = "lightcoral"; // Si no se completó, marcar en rojo
        } else if (isFuture) {
            taskInput.style.background = "white"; // Tareas futuras editables sin restricción
            taskInput.disabled = false;
        }

        taskInput.addEventListener("input", () => {
            checkBtn.style.display = taskInput.value.trim() !== "" && !completed ? "inline-block" : "none";
        });

        taskDiv.appendChild(taskInput);
        taskDiv.appendChild(checkBtn);
        taskDiv.appendChild(removeBtn);
        taskContainer.appendChild(taskDiv);
    }

    function saveTasks() {
        const key = formatDateKey(currentDate);
        let tasks = [];
        document.querySelectorAll("#taskContainer div").forEach((taskDiv) => {
            let input = taskDiv.querySelector("input");
            if (input.value.trim() !== "") {
                tasks.push({ text: input.value, completed: input.disabled });
            }
        });

        chrome.storage.local.set({ [key + "_tasks"]: tasks }, () => {
            notifyContentScript();
        });
    }

    addTaskBtn.addEventListener("click", () => createTaskElement());
    saveTasksBtn.addEventListener("click", saveTasks);

    function notifyContentScript() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "updateTasks" });
            }
        });
    }
    
    function formatDateKey(date) {
        return date.toISOString().split("T")[0];
    }

    moodButtons.forEach(mood => {
        mood.addEventListener("click", () => {
            moodButtons.forEach(m => m.classList.remove("selected"));
            mood.classList.add("selected");
            saveMood(mood.dataset.feeling);
        });
    });

    function saveMood(mood) {
        const key = formatDateKey(currentDate);
        chrome.storage.local.set({ [key + "_mood"]: mood });
        updateAverageMood();
    }

    function loadMood(date) {
        const key = formatDateKey(date);
        chrome.storage.local.get([key + "_mood"], (data) => {
            let mood = data[key + "_mood"];
            if (mood) {
                moodButtons.forEach(m => m.classList.remove("selected"));
                let selectedMood = document.querySelector(`.feeling[data-feeling="${mood}"]`);
                if (selectedMood) selectedMood.classList.add("selected");
            }
        });
    }

    function updateAverageMood() {
        const now = new Date();
        let totalMood = 0;
        let count = 0;
        for (let i = 0; i < 30; i++) {
            let pastDate = new Date(now);
            pastDate.setDate(now.getDate() - i);
            let key = formatDateKey(pastDate);
            chrome.storage.local.get([key + "_mood"], (data) => {
                if (data[key + "_mood"]) {
                    totalMood += parseInt(data[key + "_mood"]);
                    count++;
                }
                if (i === 29) displayAverageMood(count > 0 ? Math.round(totalMood / count) : 0);
            });
        }
    }

    function displayAverageMood(averageMood) {
        let emoji = ["😞", "😐", "😶", "🙂", "😁"][averageMood - 1] || "😐";
        moodDisplay.innerText = emoji;
        chrome.storage.local.set({ averageMoodFace: emoji });
    }
});

//EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    const eventContainer = document.getElementById("event-container");
    const addEventButton = document.getElementById("add-event");
    const saveChangesButton = document.getElementById("save-changes");
  
    let eventos = [];
  
    function createEventElement(evento, index) {
        const div = document.createElement("div");
        div.className = "event";
        div.draggable = true;
        div.dataset.index = index;
  
        // Eventos para arrastrar y soltar
        div.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", index);
            div.style.opacity = "0.5";
        });
  
        div.addEventListener("dragover", (e) => {
            e.preventDefault(); // Necesario para permitir el soltar
            div.style.border = "2px dashed #000";
        });
  
        div.addEventListener("dragleave", () => {
            div.style.border = "none";
        });
  
        div.addEventListener("drop", (e) => {
            e.preventDefault();
            div.style.border = "none";
            div.style.opacity = "1";
  
            const fromIndex = e.dataTransfer.getData("text/plain");
            const toIndex = div.dataset.index;
  
            if (fromIndex !== toIndex) {
                const movedEvent = eventos.splice(fromIndex, 1)[0];
                eventos.splice(toIndex, 0, movedEvent);
                renderEvents();
            }
        });
  
        div.addEventListener("dragend", () => {
            div.style.opacity = "1";
        });
  
        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = evento.color || "#000000"; // Negro por defecto
        colorInput.addEventListener("input", () => {
            evento.color = colorInput.value;
        });
        div.appendChild(colorInput);
  
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.setAttribute('maxlength', '24')
        nameInput.value = evento.nombre;
        nameInput.addEventListener("input", () => {
            evento.nombre = nameInput.value;
        });
        div.appendChild(nameInput);
  
        const descInput = document.createElement("textarea");
        descInput.value = evento.descripcion;
        descInput.addEventListener("input", () => {
            evento.descripcion = descInput.value;
        });
        div.appendChild(descInput);
  
        const startTime = document.createElement("input");
        startTime.type = "time";
        startTime.value = `${String(evento.inicio.hora).padStart(2, "0")}:${String(evento.inicio.minutos).padStart(2, "0")}`;
        startTime.addEventListener("change", () => {
            const [hour, minute] = startTime.value.split(":").map(Number);
            evento.inicio = { hora: hour, minutos: minute };
        });
        div.appendChild(startTime);
  
        const endTime = document.createElement("input");
        endTime.type = "time";
        endTime.value = `${String(evento.fin.hora).padStart(2, "0")}:${String(evento.fin.minutos).padStart(2, "0")}`;
        endTime.addEventListener("change", () => {
            const [hour, minute] = endTime.value.split(":").map(Number);
            evento.fin = { hora: hour, minutos: minute };
        });
        div.appendChild(endTime);
  
        const usarPCButton = document.createElement("button");
        usarPCButton.textContent = evento.usarPC ? "True" : "False";
        usarPCButton.addEventListener("click", () => {
            evento.usarPC = !evento.usarPC;
            usarPCButton.textContent = evento.usarPC ? "True" : "False";
        });
        div.appendChild(usarPCButton);
  
        const deleteButton = document.createElement("button");
          deleteButton.textContent = "❌";
          deleteButton.style.color = "red";
          deleteButton.addEventListener("click", () => {
              eventos.splice(index, 1);
              renderEvents();
          });
          div.appendChild(deleteButton);
            eventContainer.appendChild(div);
        }
  
    function renderEvents() {
        eventContainer.innerHTML = "";
        eventos.forEach((evento, index) => {
            createEventElement(evento, index);
        });
    }
  
    addEventButton.addEventListener("click", () => {
        eventos.push({
            nombre: "Nuevo Evento",
            descripcion: "",
            inicio: { hora: 0, minutos: 0 },
            fin: { hora: 0, minutos: 0 },
            usarPC: false
        });
        renderEvents();
    });
  
    saveChangesButton.addEventListener("click", async () => {
        await chrome.storage.local.set({ eventos });
        chrome.runtime.sendMessage({ action: "saveEvents", eventos });
    });
  
    (async function loadEvents() {
        const data = await chrome.storage.local.get("eventos");
        eventos = data.eventos || [];
        renderEvents();
    })();
  });
