window.setInterval( function(){
  function isImage(url2) {
               return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url2);
            }
  const wallpaperurlxd = document.getElementById("wallpaperwithurl").value;
  if (isImage(wallpaperurlxd) == true && wallpaperurlxd.length > 15) {
     var xddd1 = document.getElementsByClassName("xddd");
      for(var i = 0; i < xddd1.length; i++){
      xddd1[i].style.borderTop = "1px solid #00eb00";
      }
  } else if (wallpaperurlxd == "") {
    document.querySelector("body > div.container > p:nth-child(21) > em").style.visibility = "visible"
    var xddd2 = document.getElementsByClassName("xddd");
    for(var i = 0; i < xddd2.length; i++){
    xddd2[i].style.borderTop = "";
    }
  } else {
    document.querySelector("body > div.container > p:nth-child(21) > em").style.visibility = "hidden"
    var xddd = document.getElementsByClassName("xddd");
      for(var i = 0; i < xddd.length; i++){
      xddd[i].style.borderTop = "1px solid red";
      }
  }
},100)

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
             if(isImage(wallpaperurl) === true && wallpaperurl.length > 15){
              document.getElementById('wallpaper').src = wallpaperurl;
              document.getElementById('wallpaperurl').href = wallpaperurl;
             } else { /*nada*/ }
        } catch { 
        }
      }
   }, false)