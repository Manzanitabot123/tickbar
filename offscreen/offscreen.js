function getBlobURL(path, callback) {
    fetch(path)
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            callback(url);
        })
        .catch(err => console.error("Error cargando imagen:", err));
}
document.addEventListener("DOMContentLoaded", function () { 
    const player = document.getElementById("player");

    if (!player.src) {
        player.src = "https://strmreg.1.fm/baroque_mobile_mp3"; // URL predeterminada
        player.load();
    }

    function updateMediaSession(title, icon) {
        getBlobURL(icon, (blobURL) => {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: title || "Reproduciendo...",
                artist: "Tickbar Player",
                album: "Streaming",
                artwork: [
                    { src: blobURL, sizes: "512x512", type: "image/png" }
                ]
            });
        });
    }

    chrome.runtime.onMessage.addListener((message) => {
        if (message.command === "play" && message.audio) {
            player.src = message.audio;
            player.volume = (message.volume || 50) / 100;
            if(player.paused != true) player.play().catch(err => console.error("Error al reproducir:", err));
            document.title = message.name;
            updateMediaSession(message.name, message.image);
        } else if (message.command === "pause") {
            player.pause();
        } else if (message.command === "adjustVolume") {
            player.volume = message.volume / 100;
        }
    });

    if ("mediaSession" in navigator) {
        navigator.mediaSession.setActionHandler("play", () => {
            chrome.runtime.sendMessage({ action: "togglePlay" });
        });

        navigator.mediaSession.setActionHandler("pause", () => {
            chrome.runtime.sendMessage({ action: "togglePlay" });
        });

        navigator.mediaSession.setActionHandler("previoustrack", () => {
            chrome.runtime.sendMessage({ action: "prevTrack" });
        });

        navigator.mediaSession.setActionHandler("nexttrack", () => {
            chrome.runtime.sendMessage({ action: "nextTrack" });
        });
        
    }
});
