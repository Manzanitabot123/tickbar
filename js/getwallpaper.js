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

chrome.storage.sync.get('opacidad2', function (obj) {
   const defopacidad = 50;
   var finalopacidad;
   if (obj.opacidad2 !== undefined) {
      finalopacidad = obj.opacidad2
   } else {
      finalopacidad = defopacidad
   };
   document.getElementById('rangoopacidad').value=finalopacidad;
   document.getElementById('rangevalue').value=finalopacidad;
});

chrome.storage.sync.get('opacidad4', function (obj) {
   const defopacidad4 = 30;
   var finalopacidad4;
   if (obj.opacidad4 !== undefined) {
      finalopacidad4 = obj.opacidad4
   } else {
      finalopacidad4 = defopacidad4
   };
   document.getElementById('rangoopacidad2').value=finalopacidad4;
   document.getElementById('rangevalue2').value=finalopacidad4;
});

chrome.storage.sync.get('opacidad8', function (obj) {
   const defopacidad8 = 25;
   var finalopacidad8;
   if (obj.opacidad8 !== undefined) {
      finalopacidad8 = obj.opacidad8
   } else {
      finalopacidad8 = defopacidad8
   };
   document.getElementById('rangoopacidad3').value=finalopacidad8;
   document.getElementById('rangevalue3').value = finalopacidad8;
});

//IMAGES WITHOUT COPYRIGHT (FREE) https://www.pexels.com/
var fondogod = [
   "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2236713/pexels-photo-2236713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/515414/pexels-photo-515414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/158385/lake-mcdonald-landscape-panorama-sunset-158385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1252873/pexels-photo-1252873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1482777/pexels-photo-1482777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1152707/pexels-photo-1152707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1906794/pexels-photo-1906794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2239485/pexels-photo-2239485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2760856/pexels-photo-2760856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1591382/pexels-photo-1591382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1370725/pexels-photo-1370725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3838850/pexels-photo-3838850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3894805/pexels-photo-3894805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1366922/pexels-photo-1366922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1612353/pexels-photo-1612353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3131634/pexels-photo-3131634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2184346/pexels-photo-2184346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2406450/pexels-photo-2406450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2088211/pexels-photo-2088211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2959611/pexels-photo-2959611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2837579/pexels-photo-2837579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2260800/pexels-photo-2260800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/2058946/pexels-photo-2058946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3930012/pexels-photo-3930012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10858815/pexels-photo-10858815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/4326740/pexels-photo-4326740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3627964/pexels-photo-3627964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/5308356/pexels-photo-5308356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/3116422/pexels-photo-3116422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10664323/pexels-photo-10664323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10663721/pexels-photo-10663721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/1270132/pexels-photo-1270132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10666133/pexels-photo-10666133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10666137/pexels-photo-10666137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10662429/pexels-photo-10662429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10665521/pexels-photo-10665521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/10663053/pexels-photo-10663053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   "https://images.pexels.com/photos/4226556/pexels-photo-4226556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];
var número = Math.floor((Math.random() * fondogod.length)); 
document.body.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${fondogod[número]}')`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";

//UPDATE LANGUAGE
/*
document.getElementById("activar").innerHTML = `<i class='fas fa-edit'></i> Cambiar imagen`;
document.getElementById("lolazoo").innerHTML += `<i class='fas fa-eye-slash'></i> Ocultar fondo`;
*/