document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("activar").addEventListener('click', onclick, false)
     
      function onclick () {
        var wallpaperurl = document.getElementById("wallpaperwithurl").value;
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, wallpaperurl)
        })
        try{
          function isImage(url3) {
                return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url3);
             }
             if(isImage(wallpaperurl) === true){
              document.getElementById('wallpaper').src = wallpaperurl;
              document.getElementById('wallpaperurl').href = wallpaperurl;
             } else { /*nada*/ }
        } catch { 
        }
      }
   }, false)