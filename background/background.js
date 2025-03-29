chrome.runtime.tb = {
    events: [
        { nombre: 'EJEMPLO', descripción: "10 minutos ---- Apaga la PC", inicio: { hora: 4, minutos: 50 }, fin: { hora: 5, minutos: 0 }, usarPC: true},
    ],
    stations: {
        barroque: {name:"Barroco", urls:["https://strmreg.1.fm/baroque_mobile_mp3", "https://stream.srg-ssr.ch/m/rsc_de/aacp_96", "https://uk2.streamingpulse.com/ssl/vcr1/;", "https://baroquesonatasradio.stream.laut.fm/baroque_sonatas_radio?t302=2023-12-01_17-46-52&uuid=708826bc-c5a5-4fc6-8353-243e6bdd6a99", "https://streamingv2.shoutcast.com/Ambiance-classique", "http://148.251.43.231:8742/96.mp3"]},
        coffee_shop: {name:"Café", urls:["https://api.rofocus.com/audio/rofocus-coffee-shop-1.m4a", "https://api.rofocus.com/audio/rofocus-new-coffee-shop-3.mp3"]},
        beach: {name:"Playa", urls:["https://api.rofocus.com/audio/rofocus-beach.m4a", "https://api.rofocus.com/audio/rofocus-new-beach.mp3"]},
        forest: {name:"Bosque", urls:["https://api.rofocus.com/audio/rofocus-amazon-forest-river.m4a"]},
        experimental_temple: {name:"Templo", urls:["https://api.rofocus.com/audio/rofocus-exotic-calm.m4a"]},
        rain: {name:"Lluvia", urls:["https://api.rofocus.com/audio/rofocus-rainy-mountains.m4a", "https://api.rofocus.com/audio/rofocus-underwater.m4a"]},
        campfire: {name:"Fogata", urls:["https://api.rofocus.com/audio/rofocus-campfire-1.m4a", "https://api.rofocus.com/audio/rofocus-campfire-2.m4a"]},
        morning_birds: {name:"Aves", urls:["https://api.rofocus.com/audio/rofocus-morning-birds.m4a", "https://api.rofocus.com/audio/rofocus-morning-birds-2.m4a", "https://api.rofocus.com/audio/rofocus-morning-birds-3.m4a", "https://api.rofocus.com/audio/rofocus-new-calm-village.mp3"]},
        student_campus: {name:"Campus", urls:["https://api.rofocus.com/audio/rofocus-copenhagen-outdoors.m4a", "https://api.rofocus.com/audio/rofocus-bruges-students.m4a"]},
        restaurants: {name:"Restaurante", urls:["https://api.rofocus.com/audio/rofocus-rome-restaurant.m4a", "https://api.rofocus.com/audio/rofocus-college-campus-cafe.m4a"]},
        dusk_woods: {name:"Noche", urls:["https://api.rofocus.com/audio/rofocus-new-dusk-in-the-woods-long.mp3", "https://api.rofocus.com/audio/rofocus-dusk-woods.m4a"]},
        light_wind: {name:"Viento", urls:["https://api.rofocus.com/audio/rofocus-normal-wind-1.m4a", "https://api.rofocus.com/audio/rofocus-natural-wind.m4a", "https://api.rofocus.com/audio/rofocus-natural-wind-heavy.m4a", "https://api.rofocus.com/audio/rofocus-real-wind.m4a", "https://api.rofocus.com/audio/rofocus-stormy-wind.m4a"]},
        mystical_nature: {name:"Naturaleza", urls:["https://api.rofocus.com/audio/rofocus-new-experimental-nature.mp3", "https://api.rofocus.com/audio/rofocus-new-floating-space.mp3"]},
        park_by_river: {name:"Río", urls:["https://api.rofocus.com/audio/rofocus-new-park-by-the-river.mp3"]},
        quiet_city: {name:"Ciudad", urls:["https://api.rofocus.com/audio/rofocus-new-quiet-city-vibes-athens-greece-quiet.mp3", "https://api.rofocus.com/audio/rofocus-new-quiet-city-vibes.mp3", "https://api.rofocus.com/audio/rofocus-berlin-city-center.m4a", "https://api.rofocus.com/audio/rofocus-copenhagen-outdoors.m4a", "https://api.rofocus.com/audio/rofocus-busy-central-london.m4a"]},
        waves: {name:"Olas", urls:["https://api.rofocus.com/audio/rofocus-new-waves-1.mp3", "https://api.rofocus.com/audio/rofocus-new-waves-2.mp3"]},
        lofi: {name:"Lofi", urls:["https://usa9.fastcast4u.com/proxy/jamz?mp=/1", "https://ec3.yesstreaming.net:3755/stream"]},
        anime: {name:"Anime", urls:["https://cast.animenexus.net/radio/8000/animenexus", "https://kathy.torontocast.com:3060/;", "https://radio.stereoanime.net/listen/stereoanime/128", "https://boxradio-edge-01.streamafrica.net/anime"]},
        phonk: {name:"Phonk", urls:["https://stream-154.zeno.fm/90fvpb27u18uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5MGZ2cGIyN3UxOHV2IiwiaG9zdCI6InN0cmVhbS0xNTQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IlJMR3BpWjA4VHoyWl9iamtqMnVyUFEiLCJpYXQiOjE3Mzk1ODkzOTUsImV4cCI6MTczOTU4OTQ1NX0.4isQarZzhjbSdvbTTAuSxyUi66QfzeJ37CXk74_p7DI", "https://s2.radio.co/s2b2b68744/listen", "https://stream-173.zeno.fm/yevnz3noouguv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ5ZXZuejNub291Z3V2IiwiaG9zdCI6InN0cmVhbS0xNzMuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImtGbUp0aGU5UzNlZ3Y5Z0pEVXZmVmciLCJpYXQiOjE3Mzk1OTAxOTcsImV4cCI6MTczOTU5MDI1N30.nVB0VX7OrBpddyiXGnCv6MNp_NMyQV1j3ve_8SnW15Y"]}
    },
    pages: [
        { url: "vark-learn.com", limit: 3 * 60, used: 0 },
        { url: "tiktok.com", limit: 3 * 60 , used: 0 }
    ],
    customPage: { 
      url: "file:///media/fuse/drivefs-d360f26b07a9e4bc9de274dd03ab22a1/root/Yo/Horario.pdf", 
      id:0
    },
    msg: {
        thanks: chrome.i18n.getMessage('thanks'),
        on: chrome.i18n.getMessage('on'),
        playing: chrome.i18n.getMessage('playing'),
        extensionOff: chrome.i18n.getMessage('extensionOff'),
        globalEndTime: chrome.i18n.getMessage('globalEndTime'),
        localEndTime: chrome.i18n.getMessage('localEndTime'),
        ruleEndTime: chrome.i18n.getMessage('ruleEndTime'),
        backgroundAudio: chrome.i18n.getMessage('backgroundAudio'),
        segundos: chrome.i18n.getMessage('segundos'),
        minutos: chrome.i18n.getMessage('minutos'),
        horas: chrome.i18n.getMessage('horas'),
        dias: chrome.i18n.getMessage('dias'),
        semanas: chrome.i18n.getMessage('semanas'),
        meses: chrome.i18n.getMessage('meses'),
        anos: chrome.i18n.getMessage('anos'),
        toggleTimer: chrome.i18n.getMessage('toggleTimer')
    }
}


//GLOBAL TIMER
var globalTimer;
let globalEndTime = null;
let globalPaused = false;
let remainingTime = 0;
let totalTime = 0;

chrome.storage.local.get(["globalEndTime", "globalPaused", "remainingTime", "globalTimer"], (data) => {
    if (data.globalEndTime) {
        globalEndTime = data.globalEndTime;
        remainingTime = data.remainingTime || 0;
        globalPaused = data.globalPaused || false;
        totalTime = data.globalTimer || 0;
        
        if (!globalPaused) {
            resumeGlobalTimer();
        }
    }
});

function startGlobalTimer(minutes) {
    let now = Date.now();
    globalEndTime = now + minutes * 60000;
    globalPaused = false;
    remainingTime = minutes * 60;

    chrome.storage.local.set({ globalEndTime, globalPaused: false, remainingTime });
    chrome.storage.local.get(["globalTimer"], (data) => {
        if (data.globalTimer) {
            totalTime = data.globalTimer || 0;
        }
    });

    if (globalTimer) clearInterval(globalTimer);
    globalTimer = setInterval(() => {
        let currentTime = Date.now();
        console.log('a')
        if (!globalPaused && currentTime >= globalEndTime) {
            clearInterval(globalTimer);
            console.log('xdddd')
            chrome.storage.local.remove(["globalEndTime", "globalPaused", "remainingTime"]);
            syncGlobalTimer(totalTime, 0);
            notification(totalTime + " "+ chrome.runtime.tb.msg.minutos, chrome.runtime.tb.msg.globalEndTime, "globalEndTime", 5000);
        } else if (!globalPaused) {
            let timeLeft = Math.ceil((globalEndTime - currentTime) / 1000);
            chrome.storage.local.set({ remainingTime: timeLeft });
            syncGlobalTimer(totalTime, timeLeft);
        }
    }, 1000);
}

function pauseGlobalTimer() {
    clearInterval(globalTimer);
    let now = Date.now();
    remainingTime = Math.ceil((globalEndTime - now) / 1000);
    globalPaused = true;

    chrome.storage.local.set({ globalPaused: true, remainingTime });
    syncGlobalTimer(totalTime, remainingTime, true);
}

function resumeGlobalTimer() {
    if (remainingTime > 0) {
        let now = Date.now();
        globalEndTime = now + remainingTime * 1000;
        globalPaused = false;

        chrome.storage.local.set({ globalEndTime, globalPaused: false });

        startGlobalTimer(remainingTime / 60);
    }
}

function syncGlobalTimer(totalTime, timeLeft, isPaused = false) {
    chrome.tabs.query({}, (tabs) => {
        for (let tab of tabs) {
            chrome.tabs.sendMessage(tab.id, { 
                action: "updateGlobalTimer", 
                timeLeft, 
                isPaused,
                totalTime
            });
        }
    });
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "startGlobalTimer") {
        startGlobalTimer(message.minutes);
    }

    if (message.action === "pauseGlobalTimer") {
        pauseGlobalTimer();
    }

    if (message.action === "resumeGlobalTimer") {
        resumeGlobalTimer();
    }
});



// 30 RULE TIMER
let rule30Time = 30; // Duración en minutos (por defecto)
let rule30StartTime = null; // Hora de inicio
let rule30Active = true; // Estado del temporizador

chrome.storage.local.get(["rule30Time", "rule30StartTime"], (data) => {
    if (data.rule30Time) rule30Time = data.rule30Time;
    if (data.rule30StartTime) rule30StartTime = data.rule30StartTime;
    if (data.rule30Active !== undefined) rule30Active = data.rule30Active;

    if (rule30Active && !rule30StartTime) {
        start30RuleTimer(); // Iniciar temporizador si está activo pero sin hora de inicio
    }
});

function start30RuleTimer() {
    rule30StartTime = Date.now();
    chrome.storage.local.set({ rule30StartTime });

    // Programar temporizador
    setTimeout(() => {
        notification(rule30Time + " "+ chrome.runtime.tb.msg.minutos, chrome.runtime.tb.msg.ruleEndTime, "ruleEndTime", 5000);
        start30RuleTimer(); // Reiniciar el ciclo
    }, rule30Time * 60000);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "update30RuleTime") {
        rule30Time = message.minutes;
        chrome.storage.local.set({ rule30Time });

        // Reiniciar el temporizador con el nuevo tiempo
        if (rule30Active) {
            start30RuleTimer();
        }
    }

    if (message.action === "toggle30Rule") {
        rule30Active = message.state;
        chrome.storage.local.set({ rule30Active });

        if (rule30Active) {
            start30RuleTimer();
        } else {
            rule30StartTime = null;
            chrome.storage.local.remove("rule30StartTime");
        }
    }

    if (message.action === "get30RuleTime") {
        if (rule30StartTime) {
            let elapsed = (Date.now() - rule30StartTime) / 1000;
            let remaining = rule30Time * 60 - elapsed;

            if (remaining <= 0) {
                console.log("🔄 Reiniciando ciclo 30rule...");
                start30RuleTimer();
                remaining = rule30Time * 60;
            }

            sendResponse({ remaining, rule30Time });
        } else {
            sendResponse({ remaining: rule30Time * 60, rule30Time });
        }
    }
    return true;
});

// MUSIC
let currentStation = "barroque";
let currentIndex = 0;
let isPlaying = false;  // Por defecto, la música está desactivada
let volumeLevel = 30;

// Cargar configuración guardada al iniciar
chrome.storage.local.get(["currentStation", "currentIndex", "volumeLevel", "isPlaying"], (data) => {
    if (data.currentStation) currentStation = data.currentStation;
    if (data.currentIndex) currentIndex = data.currentIndex;
    if (data.volumeLevel !== undefined) volumeLevel = data.volumeLevel;
    if (data.isPlaying !== undefined) isPlaying = data.isPlaying;

    if (isPlaying) {
        runBackgroundAudio(chrome.runtime.tb.stations[currentStation].urls[currentIndex], volumeLevel, chrome.runtime.tb.stations[currentStation].name + " | Opción " + Number(currentIndex + 1));
    }
});

// Verifica si el documento offscreen existe antes de crearlo
async function ensureOffscreenDocument() {
    const existingDocs = await chrome.offscreen.hasDocument();
    if (!existingDocs) {
        await chrome.offscreen.createDocument({
            url: chrome.runtime.getURL("offscreen/offscreen.html"),
            reasons: ["AUDIO_PLAYBACK"],
            justification: "Radio en segundo plano"
        });
    }
}

async function runBackgroundAudio(url, vol = 50, nameFile) {
    let audioFile = url || "https://strmreg.1.fm/baroque_mobile_mp3";

    await ensureOffscreenDocument(); // Asegura que offscreen.html esté creado

    var icon = chrome.runtime.getURL("../icons/icon.png")
    chrome.storage.local.get("imageURL", function (data) {
        if(data.imageURL) {icon = data.imageURL};
        chrome.runtime.sendMessage({ command: "play", audio: audioFile, volume: vol, name: nameFile, image: icon }, function(response) {
            let errorMessage = chrome.runtime.lastError?.message || "";
            if (errorMessage) {
                console.error("Error enviando mensaje a offscreen:", errorMessage);
            }
        });
    });
}

function playMusic() {
    isPlaying = true;
    chrome.storage.local.set({ isPlaying });
    console.log("Reproduciendo música...");
    runBackgroundAudio(chrome.runtime.tb.stations[currentStation].urls[currentIndex], volumeLevel, chrome.runtime.tb.stations[currentStation].name + " | Opción " + Number(currentIndex + 1));
}

function pauseMusic() {
    isPlaying = false;
    chrome.storage.local.set({ isPlaying });
    console.log("Pausando música...");
    chrome.runtime.sendMessage({ command: "pause" });
}

function track(value = 1) {
    if (value === "next") { value = 1; } else { value = -1; }
    currentIndex = (currentIndex + value) % chrome.runtime.tb.stations[currentStation].urls.length;
    chrome.storage.local.set({ currentIndex });
    playMusic();
}

// Manejo de mensajes desde popup.js
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "setStation") {
        currentStation = message.station;
        currentIndex = 0;
        chrome.storage.local.set({ currentStation, currentIndex });
        playMusic();
    }

    if (message.action === "nextTrack") {
        track("next");
    }

    if (message.action === "prevTrack") {
        track("prev");
    }

    if (message.action === "togglePlay") {
        chrome.storage.local.get(["isPlaying"], (data) => {
            if (data.isPlaying !== undefined) {
                isPlaying = data.isPlaying;
                isPlaying ? pauseMusic() : playMusic();
            }
            if (data.isPlaying == undefined||null) {
                playMusic();
            }
        });
    }

    if (message.action === "setVolume") {
        volumeLevel = message.volume;
        chrome.storage.local.set({ volumeLevel });
        chrome.runtime.sendMessage({ command: "adjustVolume", volume: volumeLevel });
    }
});



//INICIAR EXTENSIÓN
chrome.runtime.tb.init = true;

//NOTIFICAR INICIO DE EXTENSIÓN
/*notification(chrome.runtime.tb.msg.thanks, chrome.runtime.tb.msg.on, "Started", 5000)*/

//FUNCION DE NOTIFICACIÓN
function notification(msg, title, id, time) {
    var path = "../icons/icon.png";
    chrome.storage.local.get("imageURL", function (data) {
        if(data.imageURL) {path = data.imageURL};
        var randomId = Math.floor(1000 + Math.random() * 9000);
        title = title || "Manzterm", msg = msg || "Notification", id = id?id+randomId:"notification"+randomId, time = time || 5000;
        var options = { type: "basic", title: title, message: msg, iconUrl: path, priority: 2 };
        chrome.notifications.create(id, options, function (notificationId) { setTimeout(function () { chrome.notifications.clear(id) }, time); });
    });
    
};

//FUNCIÓN DE MENSAJERIA
function handleMessage(request, sender, sendResponse) {
    if (request.action === "getEventsArray") {
        sendResponse({ events: chrome.runtime.tb.events });
    } else if (request.action === "showNotification") { 
        let { title, message, id, time } = request.payload; notification(message, title, id, time) 
    }
};
chrome.runtime.onMessage.addListener(handleMessage);

//MANTENER PAGINA ABIERTA
/*
// URL de la página que quieres mantener abierta
const targetUrl = 'https://fauux.neocities.org/login';

// Verificar si la página está abierta
function isPageOpen(callback) {
  chrome.tabs.query({ url: targetUrl }, function (tabs) {
    callback(tabs.length > 0);
  });
}

// Abre la página si no está abierta
function openPage() {
  isPageOpen(function (isOpen) {
    if (!isOpen) {
      chrome.tabs.create({ url: targetUrl, pinned: true }, function (newTab) {
        chrome.tabs.update(newTab.id, { active: true, muted: false });
        chrome.runtime.tb.pageId = newTab.id;
      });
    }
  });
}

// Escuchar eventos cuando se cierra una pestaña
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
    chrome.tabs.get(chrome.runtime.tb.pageId, function (tab) {
      if (chrome.runtime.lastError) {
        openPage();
      } else {
        // La pestaña existe, puedes acceder a la información de la pestaña en la variable 'tab'
        console.log(`La pestaña con ID ${tabIdToCheck} existe.`);
        console.log(tab);
      }
    });
});
openPage();
*/