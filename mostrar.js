document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("mostrar").addEventListener('click', onclick, false)
     
      function onclick () {
        chrome.storage.sync.get('wallpaper2', function (obj) {
          const defwallpaper = "https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200326322048x1152.jpg";
          var finalwallpaper;
          if (obj.wallpaper2 !== undefined) {
             finalwallpaper = obj.wallpaper2
          } else {
             finalwallpaper = defwallpaper
          };
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, finalwallpaper)
          })
       });
      }
   }, false)