chrome.storage.sync.get('wallpaper2', function (obj) {
        const defwallpaper = "https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200326322048x1152.jpg";
        var finalwallpaper;
        if (obj.wallpaper2 !== undefined) {
           finalwallpaper = obj.wallpaper2
        } else {
           finalwallpaper = defwallpaper
        };
        document.getElementById("wallpaper").src = finalwallpaper;
        document.getElementById("wallpaperurl").href = finalwallpaper;
    })