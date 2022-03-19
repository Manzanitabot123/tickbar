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
   "https://thumbs.gfycat.com/RemoteImpishBlackbear-size_restricted.gif",
   "https://acegif.com/wp-content/uploads/2021/4fh5wi/animated-wallpaper-240x320px-acegif-38.gif",
   "https://www.icegif.com/wp-content/uploads/cool-wallpapers-icegif.gif",
   "https://i.giphy.com/media/pOLspHmrKmQmc/giphy.gif",
   "https://raw.githubusercontent.com/adi1090x/files/master/dynamic-wallpaper/desert.gif",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSit76qnRz3VTvimPOzp7XuD0pEGJr0BYGQ&usqp=CAU",
   "https://wallpaperaccess.com/full/869910.gif",
   "https://64.media.tumblr.com/6cc55cb55e28123e2ad357d9f07c7bc5/tumblr_psa72bs62w1upcvga_540.gif",
   "https://swall.teahub.io/photos/small/292-2927812_burbujas-de-colores-gif.jpg",
   "https://i.pinimg.com/originals/33/1d/34/331d344c012c1ff4307858f8c9f38706.gif",
   "https://i.pinimg.com/736x/32/5b/3b/325b3b3520e91b88299725ce8cca315a.jpg",
   "http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg"
];
var número = Math.floor((Math.random() * fondogod.length)); 
document.body.style.background = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('${fondogod[número]}')`;
document.body.style.backgroundPosition = "center";
document.body.style.backgroundSize = "cover";

(async () => {
   try {  
     const res = await fetch("https://simplecustommeet.free.beeceptor.com");  
     const out = await res.json()  
     console.log("Versión Actual: " + out.version);
     if (out.version == "1.3.1") { } else { alert("No tienes la ultima versión, puedes actualizarla aquí -> https://github.com/Manzanitabot123/Simple-Custom-Meet-Extension")}
   } catch {  }  
 })()