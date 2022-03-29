const el = document.body;

var x = null;
var y = null;
    
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

var finalopacidad8;
chrome.storage.sync.get('opacidad8', function (obj) {
   const defopacidad8 = 25;
   if (obj.opacidad8 !== undefined) {
      finalopacidad8 = obj.opacidad8
   } else {
      finalopacidad8 = defopacidad8
   };
   return finalopacidad8;
});

setInterval(function() {
   try{
   chrome.storage.sync.get('opacidad8', function (obj) {
      const defopacidad8 = 25;
      if (obj.opacidad8 !== undefined) {
         finalopacidad8 = obj.opacidad8
      } else {
         finalopacidad8 = defopacidad8
      };
      return finalopacidad8;
   });
   } catch { }
},1234)

function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  el.style.backgroundPositionX = -x*(finalopacidad8/2500) + "px";
  el.style.backgroundPositionY = -y*(finalopacidad8/2500) + "px";
}

setInterval(function() {
if ((document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc") != undefined) || (document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc") != null))
   {
      //------------------------------------THANK YOU FOR USING SIMPLE CUSTOM MEET-------------------------------------------------
      try{
      //AÑADIR EL FONDO
      chrome.storage.sync.get('wallpaper2', function (obj) {
         const defwallpaper = "https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200326322048x1152.jpg";
         var finalwallpaper;
         if (obj.wallpaper2 !== undefined) {
            finalwallpaper = obj.wallpaper2
         } else {
            finalwallpaper = defwallpaper
         };
         document.body.style.backgroundImage = `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${finalwallpaper})`;
         document.body.style.backgroundSize = "104% 104%";
      });
      } catch { }
      
      var fondoarriba;
      try{
      //FONDO DE ARRIBA
      fondoarriba = document.getElementsByClassName('gb_na gb_Za gb_Oe gb_Kc');
                  for(var i = 0; i < fondoarriba.length; i++){
                     fondoarriba[i].style.backgroundColor="#ffffff00";
         }
      } catch { }

      var recuadroscambiantes;
      try{
      //RECUADROS QUE CAMBIAN
      recuadroscambiantes = document.getElementsByClassName('VdLOD yUoCvf fXx9Lc JxfZTd');
                  for(var i = 0; i < recuadroscambiantes.length; i++){
                     recuadroscambiantes[i].style.backgroundColor="#ffffff00";
                  }
      } catch { }

      try{
         var messagethx = chrome.i18n.getMessage("thanks");
         document.getElementsByClassName("GNpa5c")[0].innerHTML = `<a href="https://meet.google.com/about/redirect/landing-learn-more/?hl=es_419" target="_blank" rel="noopener" class="IClWHc">Más información</a> sobre Google&nbsp;Meet <p>${messagethx}</p>`
      } catch { }
      //xd
      
}


if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.TqTEJc > span") != undefined && document.getElementsByClassName("RkzbPb")[0].innerHTML === 'Perdiste la conexión de red. Intentando restablecerla…') || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.TqTEJc > span") != null && document.getElementsByClassName("RkzbPb")[0].innerHTML === 'Perdiste la conexión de red. Intentando restablecerla…'))
   { 
      try{
      const gameWithoutConnection = chrome.i18n.getMessage("game_without_connection");
      document.getElementsByClassName("RkzbPb")[0].innerHTML += `</p><button id="jugarPorMientras" class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d qfvgSe AjXHhf" jsaction="click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd" data-idom-class="ksBjEc lKxP2d qfvgSe AjXHhf" data-mdc-dialog-action="TvD9Pc" style="color: white;"><div class="VfPpkd-Jh9lGc" style="color: white;"></div><div class="VfPpkd-J1Ukfc-LhBDec" style="color: white;"></div><div class="VfPpkd-RLmnJb" style="color: white;"></div><span jsname="V67aGc" class="VfPpkd-vQzf8d" aria-hidden="true" style="color: rgb(88, 160, 255);">${gameWithoutConnection}</span></button>`;
      
      document.getElementById("jugarPorMientras").addEventListener('click', jugarAhora, false)
     
      function jugarAhora () {
      try{
      const gameInstructions = chrome.i18n.getMessage("game_instructions");
      document.getElementsByClassName("RkzbPb")[0].innerHTML = '<div class="container">' +
      '        <div class="game-wrap">' +
      '            <canvas width="730px" height="405" id="game"></canvas>' +
      '        </div>' +
      '    </div>' +
      `${gameInstructions}`;
       (function(window){

         var Game = {
 
             init: function(){
                 this.c = document.getElementById("game");
                 this.c.width = this.c.width;
                 this.c.height = this.c.height;
                 this.ctx = this.c.getContext("2d");
                 this.color = "#202124";
                 this.bullets = [];
                 this.enemyBullets = [];
                 this.enemies = [];
                 this.particles = [];
                 this.bulletIndex = 0;
                 this.enemyBulletIndex = 0;
                 this.enemyIndex = 0;
                 this.particleIndex = 0;
                 this.maxParticles = 10;
                 this.maxEnemies = 6;
                 this.enemiesAlive = 0;
                 this.currentFrame = 0;
                 this.maxLives = 3;
                 this.life = 0;
                 this.binding();
                 this.player = new Player();
                 this.score = 0;
                 this.paused = false;
                 this.shooting = false;
                 this.oneShot = false;
                 this.isGameOver = false;
             this.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
                 for(var i = 0; i<this.maxEnemies; i++){
                     new Enemy();
                     this.enemiesAlive++;
                 }
                 this.invincibleMode(2000);
 
                 this.loop();
             },
 
             binding: function(){
                 window.addEventListener("keydown", this.buttonDown);
                 window.addEventListener("keyup", this.buttonUp);
                 window.addEventListener("keypress", this.keyPressed);
                 this.c.addEventListener("click", this.clicked);
             },
 
             clicked: function(){
                 if(!Game.paused) {
                     Game.pause();
                 } else {
                     if(Game.isGameOver){
                         Game.init();
                     } else {
                         Game.unPause();
                         Game.loop();
                     }
                 }
             },
 
             keyPressed: function(e){
                 if(e.keyCode === 32){
                     if(!Game.player.invincible  && !Game.oneShot){
                         Game.player.shoot();
                         Game.oneShot = true;
                     }
                     if(Game.isGameOver){
                         Game.init();
                     }
             e.preventDefault();
                 }
             },
 
             buttonUp: function(e){
                 if(e.keyCode === 32){
                     Game.shooting = false;
                     Game.oneShot = false;
                 e.preventDefault();
                 }
                 if(e.keyCode === 37 || e.keyCode === 65){
                     Game.player.movingLeft = false;
                 }
                 if(e.keyCode === 39 || e.keyCode === 68){
                     Game.player.movingRight = false;
                 }
             },
 
             buttonDown: function(e){
                 if(e.keyCode === 32){
                     Game.shooting = true;
                 }
                 if(e.keyCode === 37 || e.keyCode === 65){
                     Game.player.movingLeft = true;
                 }
                 if(e.keyCode === 39 || e.keyCode === 68){
                     Game.player.movingRight = true;
                 }
             },
 
             random: function(min, max){
             return Math.floor(Math.random() * (max - min) + min);
         },
 
         invincibleMode: function(s){
             this.player.invincible = true;
             setTimeout(function(){
                 Game.player.invincible = false;
             }, s);
         },
 
         collision: function(a, b){
                 return !(
                 ((a.y + a.height) < (b.y)) ||
                 (a.y > (b.y + b.height)) ||
                 ((a.x + a.width) < b.x) ||
                 (a.x > (b.x + b.width))
                 )
             },
 
         clear: function(){
             this.ctx.fillStyle = Game.color;
             this.ctx.fillRect(0, 0, this.c.width, this.c.height);
         },
         
         pause: function(){
                 this.paused = true;
         },
 
         unPause: function(){
                 this.paused = false;
         },
 
 
         gameOver: function(){
             this.isGameOver = true;
             this.clear();
             var message = chrome.i18n.getMessage("game_msg1");
             var message2 = chrome.i18n.getMessage("game_msg2") + Game.score;
             var message3 = chrome.i18n.getMessage("game_msg3");
             this.pause();
             this.ctx.fillStyle = "white";
             this.ctx.font = "bold 30px Acre, sans-serif";
             this.ctx.fillText(message, this.c.width/2 - this.ctx.measureText(message).width/2, this.c.height/2 - 50);
             this.ctx.fillText(message2, this.c.width/2 - this.ctx.measureText(message2).width/2, this.c.height/2 - 5);
             this.ctx.font = "bold 16px Acre, sans-serif";
             this.ctx.fillText(message3, this.c.width/2 - this.ctx.measureText(message3).width/2, this.c.height/2 + 30);
         },
 
         updateScore: function(){
             this.ctx.fillStyle = "white";
             this.ctx.font = "16px Acre, sans-serif";
             this.ctx.fillText(chrome.i18n.getMessage("game_msg2") + this.score, 8, 20);
             this.ctx.fillText(chrome.i18n.getMessage("game_msg4") + (this.maxLives - this.life), 8, 40);
         },
         
             loop: function(){
                 if(!Game.paused){
                     Game.clear();
                     for(var i in Game.enemies){
                         var currentEnemy = Game.enemies[i];
                         currentEnemy.draw();
                         currentEnemy.update();
                         if(Game.currentFrame % currentEnemy.shootingSpeed === 0){
                             currentEnemy.shoot();
                         }
                     }
                     for(var x in Game.enemyBullets){
                         Game.enemyBullets[x].draw();
                         Game.enemyBullets[x].update();
                     }
                     for(var z in Game.bullets){
                         Game.bullets[z].draw();
                         Game.bullets[z].update();
                     }
                     if(Game.player.invincible){
                         if(Game.currentFrame % 20 === 0){
                             Game.player.draw();
                         }
                     } else {
                         Game.player.draw();
                     }
 
                 for(var i in Game.particles){
                 Game.particles[i].draw();
                 }
                     Game.player.update();
                     Game.updateScore();
                     Game.currentFrame = Game.requestAnimationFrame.call(window, Game.loop);
                 }
             }
 
         };
 
 
 
 
 
 
         var Player = function(){
             this.width = 60;
             this.height = 20;
             this.x = Game.c.width/2 - this.width/2;
             this.y = Game.c.height - this.height;
             this.movingLeft = false;
             this.movingRight = false;
             this.speed = 8;
             this.invincible = false;
             this.color = "white";
         };
 
 
         Player.prototype.die = function(){
             if(Game.life < Game.maxLives){
                 Game.invincibleMode(2000);  
                 Game.life++;
             } else {
                 Game.pause();
                 Game.gameOver();
             }
         };
 
 
         Player.prototype.draw = function(){
             Game.ctx.fillStyle = this.color;
             Game.ctx.fillRect(this.x, this.y, this.width, this.height);
         };
 
 
         Player.prototype.update = function(){
             if(this.movingLeft && this.x > 0){
                 this.x -= this.speed;
             }
             if(this.movingRight && this.x + this.width < Game.c.width){
                 this.x += this.speed;
             }
             if(Game.shooting && Game.currentFrame % 10 === 0){
                 this.shoot();
             }
             for(var i in Game.enemyBullets){
                 var currentBullet = Game.enemyBullets[i];
                 if(Game.collision(currentBullet, this) && !Game.player.invincible){
                     this.die();
                     delete Game.enemyBullets[i];
                 }
             }
         };
 
 
         Player.prototype.shoot = function(){
             Game.bullets[Game.bulletIndex] = new Bullet(this.x + this.width/2);
             Game.bulletIndex++;
         };
 
 
 
 
 
 
         var Bullet = function(x){  
             this.width = 8;
             this.height = 20;
             this.x = x;
             this.y = Game.c.height - 10;
             this.vy = 8;
             this.index = Game.bulletIndex;
             this.active = true;
             this.color = "white";
             
         };
 
 
         Bullet.prototype.draw = function(){
             Game.ctx.fillStyle = this.color;
             Game.ctx.fillRect(this.x, this.y, this.width, this.height);
         };
 
 
         Bullet.prototype.update = function(){
             this.y -= this.vy;
             if(this.y < 0){
                 delete Game.bullets[this.index];
             }
         };
 
 
 
 
 
 
         var Enemy = function(){
             this.width = 60;
             this.height = 20;
             this.x = Game.random(0, (Game.c.width - this.width));
             this.y = Game.random(10, 40);
             this.vy = Game.random(1, 3) * .1;
             this.index = Game.enemyIndex;
             Game.enemies[Game.enemyIndex] = this;
             Game.enemyIndex++;
             this.speed = Game.random(2, 3);
             this.shootingSpeed = Game.random(20, 80);
             this.movingLeft = Math.random() < 0.5 ? true : false;
             this.color = "hsl("+ Game.random(0, 360) +", 60%, 50%)";
             
         };
 
 
         Enemy.prototype.draw = function(){
             Game.ctx.fillStyle = this.color;
             Game.ctx.fillRect(this.x, this.y, this.width, this.height);
         };
 
 
         Enemy.prototype.update = function(){
             if(this.movingLeft){
                 if(this.x > 0){
                     this.x -= this.speed;
                     this.y += this.vy;
                 } else {
                     this.movingLeft = false;
                 }
             } else {
                 if(this.x + this.width < Game.c.width){
                     this.x += this.speed;
                     this.y += this.vy;
                 } else {
                     this.movingLeft = true;
                 }
             }
             
             for(var i in Game.bullets){
                 var currentBullet = Game.bullets[i];
                 if(Game.collision(currentBullet, this)){
                     this.die();
                     delete Game.bullets[i];
                 }
             } 
         };
 
         Enemy.prototype.die = function(){
         this.explode();
         delete Game.enemies[this.index];
         Game.score += 15;
         Game.enemiesAlive = Game.enemiesAlive > 1 ? Game.enemiesAlive - 1 : 0;
         if(Game.enemiesAlive < Game.maxEnemies){
             Game.enemiesAlive++;
             setTimeout(function(){
                 new Enemy();
             }, 2000);
             }
         
         };
 
         Enemy.prototype.explode = function(){
             for(var i=0; i<Game.maxParticles; i++){
             new Particle(this.x + this.width/2, this.y, this.color);
         }
         };
 
         Enemy.prototype.shoot = function(){
             new EnemyBullet(this.x + this.width/2, this.y, this.color);
         };
 
         var EnemyBullet = function(x, y, color){
             this.width = 8;
             this.height = 20;
             this.x = x;
             this.y = y;
             this.vy = 6;
             this.color = color;
             this.index = Game.enemyBulletIndex;
             Game.enemyBullets[Game.enemyBulletIndex] = this;
             Game.enemyBulletIndex++;
         };
 
         EnemyBullet.prototype.draw = function(){
             Game.ctx.fillStyle = this.color;
             Game.ctx.fillRect(this.x, this.y, this.width, this.height);
         };
 
         EnemyBullet.prototype.update = function(){
             this.y += this.vy;
             if(this.y > Game.c.height){
                 delete Game.enemyBullets[this.index];
             }
         };
 
 
 
 
         var Particle = function(x, y, color){
             this.x = x;
             this.y = y;
             this.vx = Game.random(-5, 5);
             this.vy = Game.random(-5, 5);
             this.color = color || "orange";
             Game.particles[Game.particleIndex] = this;
             this.id = Game.particleIndex;
             Game.particleIndex++;
             this.life = 0;
             this.gravity = .05;
             this.size = 40;
             this.maxlife = 100;
         }
 
         Particle.prototype.draw = function(){
             this.x += this.vx;
             this.y += this.vy;
             this.vy += this.gravity;
             this.size *= .89;
             Game.ctx.fillStyle = this.color;
             Game.ctx.fillRect(this.x, this.y, this.size, this.size);
             this.life++;
             if(this.life >= this.maxlife){
             delete Game.particles[this.id];
             }
         };
 
         Game.init();
 
 
         }(window));
      } catch { }
      }
      
      } catch { }
      } else { }
      })


// SOLICITAR UNIRSE O LISTO PA UNIRTE
var xddxd = setInterval(function() {
if ((document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(9) > div.crqnQb > div > div > div.vgJExf > div > div") != undefined) || (document.querySelector("#yDmH0d > c-wiz > div > div > div:nth-child(9) > div.crqnQb > div > div > div.vgJExf > div > div") != null))
   {
      var listopaunirte;
      try{
         listopaunirte = document.getElementsByClassName('SSPGKf p2ZbV zKHdkd DNu0ud');
      for(var i = 0; i < listopaunirte.length; i++){
         listopaunirte[i].style.backgroundColor="#ffffff00";
      }

      try{
      //AÑADIR EL FONDO
      chrome.storage.sync.get('wallpaper2', function (obj) {
         const defwallpaperSU = "https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200326322048x1152.jpg";
         var finalwallpaperSU;
         if (obj.wallpaper2 !== undefined) {
            finalwallpaperSU = obj.wallpaper2
         } else {
            finalwallpaperSU = defwallpaperSU
         };
         document.body.style.backgroundImage = `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.8)), url(${finalwallpaperSU})`;
         document.body.style.backgroundSize = "104% 104%";
      });
      } catch { }
      } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};
   } else {
      clearInterval(xddxd)
   }
}, 1000)

var xd = setInterval(function() {
   if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") != undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") != null))
   {
   console.log('Nice!');
   clearInterval(xd);
   chrome.storage.sync.get('wallpaper2', function (obj) {
      const defwallpaper = "https://wallpaperforu.com/wp-content/uploads/2020/07/pixel-art-wallpaper-200722200326322048x1152.jpg";
      var finalwallpaper;
      if (obj.wallpaper2 !== undefined) {
         finalwallpaper = obj.wallpaper2
      } else {
         finalwallpaper = defwallpaper
      };
      changeColor(finalwallpaper);
   });
}}, 1000)

chrome.runtime.onMessage.addListener(function (elenlace) {
   if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") != undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") != null))
   {
   if (elenlace == "") {
      const missingURL = chrome.i18n.getMessage("missing_text");
      alert(missingURL)
   } else if (elenlace.toUpperCase() === "HIDE" || elenlace.toUpperCase() === "OCULTAR") {
      detenerintervalo();
      off();
   } else if (elenlace.toUpperCase() === "REFRESH" || elenlace.toUpperCase() === "RESTART" || elenlace.toUpperCase() === "REFRESCAR") {
      window.location.reload();
   } else if (elenlace.includes("data:image/")) {
      changeColor(elenlace);
      console.log("IS VALID");
   } else { 
      try{
         function isImage(url2) {
            if (typeof url2 !== 'string') {
               return false;
            }
            return (url2.match(/^http[^\?]*.(jpg|jpeg|svg|gif|webp|avif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
            /*
            return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url2);
            */
            }
            console.log(isImage(elenlace))
            if(isImage(elenlace) === true && elenlace.length > 15){
               changeColor(elenlace);
               console.log("IS VALID");
            } else {
            const invalidURL = chrome.i18n.getMessage("invalid_text");
            alert(invalidURL)
            console.log("IS NOT VALID");}
      } catch { 
         const invalidURL2 = chrome.i18n.getMessage("invalid_text");
         alert(invalidURL2)
         console.log("IS NOT VALID");
      }
   }
   } else {
   const pageDenied = chrome.i18n.getMessage("page_denied");
   alert(pageDenied)
   }
})

function changeColor(elenlacexd){
   try{
      var value = elenlacexd;
      chrome.storage.sync.set({'wallpaper2': value});
   } catch(error) { console.log(error)}

   try{
   document.body.style.backgroundImage = `url(${elenlacexd})`;
   /*
   document.body.style.backgroundPosition = "center";
   */
   document.body.style.backgroundSize = "104% 104%";
   
   } catch {console.log("ERROR AL CAMBIAR LA IMAGEN")};

   //todo las letras
   var alltext;
   try{
   alltext = document.getElementsByTagName("*");
   for (var i=0, max=alltext.length; i < max; i++) {
   alltext[i].style.color = "white";
   }
   } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};
   
   var barradeabajo;
   try{
   //BARRA DE ABAJO
   barradeabajo = document.getElementsByClassName('UnvNgf Sdwpn  P9KVBf');
   for(var i = 0; i < barradeabajo.length; i++){
      barradeabajo[i].style.backgroundColor="#20212400";
   }
   } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};

   try{
   //FONDO Y OPACIDAD
   chrome.storage.sync.get('opacidad2', function (obj) {
      const defopacidad = 50;
      var finalopacidad;
      if (obj.opacidad2 !== undefined) {
         finalopacidad = obj.opacidad2
      } else {
         finalopacidad = defopacidad
      };
      try{
      document.querySelector("#ow3").style.backgroundColor = `rgba(32, 33, 36, ${finalopacidad/100})`;
      } catch { }
   });
   } catch {console.log("ERROR AL CAMBIAR EL FONDO")};

   var microfono;
   try{
   //MICROFNO
   microfono = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN JxICCe CdgDHf FTMc0c N2RpBe jY9Dbb');
   for(var i = 0; i < microfono.length; i++){
      microfono[i].style.backgroundColor="#3c404336";
   }
   } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};

   var camara;
   try{
   //CAMARA
   camara = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN JxICCe nJcgFc FTMc0c N2RpBe jY9Dbb');
   for(var i = 0; i < camara.length; i++){
      camara[i].style.backgroundColor="#3c404336";
   }
   } catch { };
   
   var mano;
   try{
   //MANO
   mano = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe moJB3b');
   for(var i = 0; i < mano.length; i++){
      mano[i].style.backgroundColor="#3c404336";
   }
   } catch { };
   
   var presentar;
   try{
   //PRESENTAR PANTALLA Y TRES PUNTOS
   presentar = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c  uaILN');
   for(var i = 0; i < presentar.length; i++){
      presentar[i].style.backgroundColor="#3c404336";
   }
   } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};

   /*
   try{
   //TRES PUNTOS
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};
   */

   var colgar;
   try{
   //COLGAR
   colgar = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c  jh0Tpd Gt6sbf QQrMi NKaD6');
   for(var i = 0; i < colgar.length; i++){
      colgar[i].style.backgroundColor="#ea43352e";
   }
   } catch {console.log("ERROR AL CAMBIAR COLGAR")};

   try{
   //SUBTITULOS
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.TlJx6e > div > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LOS SUBTITULOS")};

   var elements;
   try{
   //FONDO Y OPACIDAD 2 PARA LAS FOTOS
   chrome.storage.sync.get('opacidad4', function (obj) {
      const defopacidad4 = 30;
      var finalopacidad4;
      if (obj.opacidad4 !== undefined) {
         finalopacidad4 = obj.opacidad4
      } else {
         finalopacidad4 = defopacidad4
      };
      try {
         elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
         for (var i = 0; i < elements.length; i++) {
         elements[i].style.backgroundColor = `rgba(54, 55, 58, ${finalopacidad4/100})`;
         } 
      } catch { }
   });
   } catch { };

   var message;
   try{
      //MENSAJERIA
      message = document.getElementsByClassName('R3Gmyc qwU8Me');
      for(var i = 0; i < message.length; i++){
         message[i].style.backgroundColor = "#ffffff00";
      }
   } catch {console.log("ERROR AL CAMBIAR EL COLOR MENSAJERIA")};

   var perfil1;
   var perfil2;
   try{
      //PERFIL MINIMIZADO
      //primer fondo
      perfil1 = document.getElementsByClassName('RWK2Je');
      for(var i = 0; i < perfil1.length; i++){
         perfil1[i].style.background = "#fff0";
      }
      //fondo de atras
      perfil2 = document.getElementsByClassName('ADivge Gt2yUd vLRPrf');
      for(var i = 0; i < perfil2.length; i++){
         perfil2[i].style.background = "#36373a4d";
      }
   } catch {console.log("ERROR AL CAMBIAR EL PERFIL MINIMIZADO")};
   
   var settingsxd;
   //CONFIGURACIÓN VENTANA
   try{
      settingsxd = document.getElementsByClassName('VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe CIYi0d jvUMfb yOCuXd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c');
                  for(var i = 0; i < settingsxd.length; i++){
                     settingsxd[i].style.background="#202124d1";
                  }
   } catch { console.log("ERROR AL CAMBIAR LA VENTANA DE AJUSTES")}

   var presentarpantalla;
   try{
   //PRESENTAR PANTALLA MENU
   presentarpantalla = document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe iGzNwd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c");
   for(var i = 0; i < presentarpantalla.length; i++){
      presentarpantalla[i].style.backgroundColor="#202124d1";
   }
   } catch { }

   var controlesDeOrganizador;
   try{
   // ADMIN CONTROLES DE ORGANIZADOR
   controlesDeOrganizador = document.getElementsByClassName("TZFSLb ddIcCe MDZuce beUrMb");
   for(var i = 0; i < controlesDeOrganizador.length; i++){
   controlesDeOrganizador[i].style.backgroundColor="#202124d1";
   }
   } catch { }
   
   var agregarPersonas;
   var agregarPersonas2;
   try{
   // AGREGAR PERSONAS
   agregarPersonas = document.getElementsByClassName("g3VIld NJEZld vDc8Ic hFEqNb J9Nfi iWO5td");
   for(var i = 0; i < agregarPersonas.length; i++){
   agregarPersonas[i].style.backgroundColor="#202124d1";
   };
   agregarPersonas2 = document.getElementsByClassName("duTsYc");
   for(var i = 0; i < agregarPersonas2.length; i++){
   agregarPersonas2[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var welcome1;
   var welcome2;
   try{
   // BIENVENIDO AL MEET
   welcome1 = document.getElementsByClassName("xTGfdf");
   for(var i = 0; i < welcome1.length; i++){
   welcome1[i].style.backgroundColor="#202124d1";
   }
   welcome2 = document.getElementsByClassName("gvnMbb");
   for(var i = 0; i < welcome2.length; i++){
   welcome2[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var cambiardiseño;
   try{
   //CAMBIAR DISEÑO
   cambiardiseño = document.getElementsByClassName('VfPpkd-P5QLlc');
   for(var i = 0; i < cambiardiseño.length; i++){
      cambiardiseño[i].style.background="#36373a4d";
   }
   } catch { }

   var presentandoahora;
   try{
   // X ESTA PRESENTANDO
   presentandoahora = document.getElementsByClassName('MON6Vd P9KVBf');
   for(var i = 0; i < presentandoahora.length; i++){
      presentandoahora[i].style.background = "#36373a4d";
   }
   } catch { }

   var terminaEn;
   try{
   // TERMINA EN X MINUTOS
   terminaEn = document.getElementsByClassName("ihVAlc EBpPQb VqncK");
   for(var i = 0; i < terminaEn.length; i++){
   terminaEn[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var terminaEn2;
   try{
   // TERMINA EN X MINUTOS 2
   terminaEn2 = document.getElementsByClassName("ihVAlc VqncK");
   for(var i = 0; i < terminaEn2.length; i++){
   terminaEn2[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var terminaEnXs;
   try{
   // TERMINA EN X SEGUNDOS
   terminaEnXs = document.getElementsByClassName("LaJZaf");
   for(var i = 0; i < terminaEnXs.length; i++){
   terminaEnXs[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var grabando;
   try{
   //GRABANDO
   grabando = document.getElementsByClassName("F9AaL mKNb3d");
   for(var i = 0; i < grabando.length; i++){
   grabando[i].style.background="#ea43352e";
   }
   } catch { }

   var grabando2;
   try{
   //CARGANDO GRABACIÓN
   grabando2 = document.getElementsByClassName('F9AaL B8OGLd');
   for(var i = 0; i < grabando2.length; i++){
      grabando2[i].style.backgroundColor="#ffffff00";
   }
   } catch { }
   
   var listamano1;
   try{
   //los que levantaron la mano
   listamano1 = document.getElementsByClassName('HeObRc KQZr0e');
   for(var i = 0; i < listamano1.length; i++){
   listamano1[i].style.background = "#202124d1";
   }
   } catch { }

   var ventanaiconos;
   //CAMBIAR LOS ICONOS DE LAS VENTANAS
   try{
      ventanaiconos = document.getElementsByClassName('google-material-icons DO5H3e');
      for(var i = 0; i < ventanaiconos.length; i++){
         ventanaiconos[i].style.background="#f1f3f400";
      }
   } catch { }

   var audioconfig;
   try{
   //PREVISUALIZACIÓN DE AUDIO
   audioconfig = document.getElementsByClassName("NVUqMb");
   for(var i = 0; i < audioconfig.length; i++){
      audioconfig[i].style.backgroundColor="#f1f3f41a";
   }
   } catch { }
   
   var videoconfig;
   try{
   //PREVISUALIZACIÓN DE VIDEO
   videoconfig = document.getElementsByClassName("oZ3U3b clMRcc");
   for(var i = 0; i < videoconfig.length; i++){
   videoconfig[i].style.backgroundColor="#f1f3f41a";
   }
   } catch { }

   var phone2;
   try{
   //POR TELEFONO
   phone2 = document.getElementsByClassName("g3VIld sg26G Up8vH hFEqNb J9Nfi iWO5td");
   for(var i = 0; i < phone2.length; i++){
   phone2[i].style.backgroundColor="#36373a4d";
   }
   } catch { }
   
   var country1;
   try{
   //PAIS FINAL PARA LLAMADA
   country1 = document.getElementsByClassName("jgvuAb OQxO2c");
   for(var i = 0; i < country1.length; i++){
      country1[i].style.background="#f1f3f41a";
   }
   } catch { }
   
   //ESTAS HABLANDO?
   try{
   estasHablando = document.getElementsByClassName('MvD9Jd ncMv2e');
   for(var i = 0; i < estasHablando.length; i++){
      estasHablando[i].style.color="#f1f3f41a";
   }
   } catch { }

   var country2;
   try{
   //SELECCIONAR PAIS
   country2 = document.getElementsByClassName("OA0qNb ncFHed");
   for(var i = 0; i < country2.length; i++){
   country2[i].style.background="#000000bd";
   }
   } catch { }
   
   var effects;
   try{
   // EFECTOS VISUALES
   effects = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc Pr8ZAd");
   for(var i = 0; i < effects.length; i++){
   effects[i].style.backgroundColor="#f1f3f400";
   }
   } catch { }

   var stylesxd
   try{
   // ESTILOS ARRIBA Y ABAJO
   stylesxd = document.getElementsByClassName("VfPpkd-BIzmGd VfPpkd-BIzmGd-OWXEXe-X9G3K Hnvug W7mYUe Py0xOd eO2Zfd");
   for(var i = 0; i < stylesxd.length; i++){
   stylesxd[i].style.backgroundColor="#0c0c0cd1";
   }
   } catch { }

   var levantarmano2;
   try{
   // LEVANTAR LA MANO ANIMACIÓN
   levantarmano2 = document.getElementsByClassName("S41QRd");
   for(var i = 0; i < levantarmano2.length; i++){
   levantarmano2[i].style.backgroundColor="#202124d1";
   }
   } catch { }

   var error_video;
   //ERROR 1 DE VIDEO
   try{
   error_video = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod VVkv0e");
   for ( var i = 0; i < error_video.length; i++) {
   error_video[i].style.background = "black";
   }
   } catch { }
   
   var error_video2;
   //ERROR 2 DE VIDEO
   try{
   error_video2 = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod lF1xVb");
   for ( var i = 0; i < error_video2.length; i++) {
   error_video2[i].style.background = "black";
   }
   } catch { }

   var error_frame;
   //CUADRO DE ERROR DE VIDEO
   try{
      error_frame = document.getElementsByClassName('g3VIld vdySc Up8vH J9Nfi iWO5td');
               for(var i = 0; i < error_frame.length; i++){
                  error_frame[i].style.background="#202124d1";
               }
   } catch { }

   var ping2;
   //CUADRO DE PING
   try{
      ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
               for(var i = 0; i < ping2.length; i++){
                  ping2[i].style.background="#202124d1";
               }
   } catch { }

   var solicitarUnirse;
   try{
   // SOLICITACIÓN PARA UNIRSE
   solicitarUnirse = document.getElementsByClassName("g3VIld T9cDKf vDc8Ic J9Nfi iWO5td");
   for(var i = 0; i < solicitarUnirse.length; i++){
   solicitarUnirse[i].style.backgroundColor="#202124d1";
   }
   } catch { }

   var opcionesdeusuario;
   try{
   // LOS TRES PUNTOS PARA CADA USUARIO
   opcionesdeusuario = document.getElementsByClassName("JPdR6b e5Emjc RnNTc qjTEB");
   for(var i = 0; i < opcionesdeusuario.length; i++){
   opcionesdeusuario[i].style.backgroundColor="#202124d1";
   }
   } catch { }

   var problemanotif;
   try{
   //NOTIFICAR PROBLEMA
   problemanotif = document.getElementsByClassName('g3VIld OFqiSb Up8vH Whe8ub J9Nfi iWO5td');
   for(var i = 0; i < problemanotif.length; i++){
      problemanotif[i].style.backgroundColor="#36373a4d";
   }
   } catch { }

   var message2;
   var message3;
   var info1;
   var info2;
   var info3;
   var info4;
   var info5;
   var info6;
   var chat1;
   var chat2;
   var chatadmin;
   var peopleadmin;
   try{
      //FONDO DE MENSAJERIA
      message2 = document.getElementsByClassName('WUFI9b');
      for(var i = 0; i < message2.length; i++){
         message2[i].style.background = "#36373a4d";
      }
      message3 = document.getElementsByClassName('Zzlrzb');
               for(var i = 0; i < message3.length; i++){
                  message3[i].style.backgroundColor = "#ffffff00";
      }

      try{
         //ADMIN CHAT
         chatadmin = document.getElementsByClassName('WAPtFd jE2Fge');
         for(var i = 0; i < chatadmin.length; i++){
         chatadmin[i].style.background="#3c404300";
      }
      } catch { }

      try{
         //ADMIN ASISTENCIA
         peopleadmin = document.getElementsByClassName('Bs3rEf');
         for(var i = 0; i < peopleadmin.length; i++){
         peopleadmin[i].style.backgroundColor="#f1f3f414";
         }
      } catch { }

      try{
         //CHAT
         chat1 = document.getElementsByClassName('v8W0vf');
         for(var i = 0; i < chat1.length; i++){
            chat1[i].style.background="#f1f3f414";
         }
         chat2 = document.getElementsByClassName('BC4V9b');
         for(var i = 0; i < chat2.length; i++){
            chat2[i].style.background="#f1f3f414";
         }
         } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE CHAT")};
      
      try{
      //DETALLES DELA REUNIÓN
      info1 = document.getElementsByClassName('CYZUZd');
               for(var i = 0; i < info1.length; i++){
                  info1[i].style.color = "white";
               }
      
      //INFORMACIÓN PA UNIRSE
      info2 = document.getElementsByClassName('zy3vwb IpYpqc');
               for(var i = 0; i < info2.length; i++){
                  info2[i].style.color = "white";
               }
      
      //COPIAR LINK
      info3 = document.getElementsByClassName('VfPpkd-vQzf8d');
               for(var i = 0; i < info3.length; i++){
                  info3[i].style.color = "#58a0ff";
               }
      //LINK
      info5 = document.getElementsByClassName('VA2JSc');
               for(var i = 0; i < info5.length; i++){
                  info5[i].style.color = "#cfcfcf";
               }
      
      //ARCHIVOS ADJUNTOS
      info6 = document.getElementsByClassName('DwIq5e');
               for(var i = 0; i < info6.length; i++){
                  info6[i].style.color = "#cfcfcf";
               }
      
      //SEPARADOR
      separator = document.getElementsByClassName('kCtYwe q8PJ2');
      for(var i = 0; i < separator.length; i++){
         separator[i].style.background="#ffffff7d";
      }
      } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE INFO")};
   } catch {console.log("ERROR AL CAMBIAR EL FONDO DE MENSAJERIA")};

   var id2 = setInterval(function() {
      if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") === undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") === null))
         { 
           setTimeout(() => clearInterval(id2), 8000)
         }
      try{
            //FONDO Y OPACIDAD
            chrome.storage.sync.get('opacidad2', function (obj) {
               const defopacidad = 50;
               var finalopacidad;
               if (obj.opacidad2 !== undefined) {
                  finalopacidad = obj.opacidad2
               } else {
                  finalopacidad = defopacidad
               };
               try{
               document.querySelector("#ow3").style.backgroundColor = `rgba(32, 33, 36, ${finalopacidad/100})`;
               } catch { }
            });
            } catch { };

      try{
            //FONDO Y OPACIDAD 2 PARA LAS FOTOS
            chrome.storage.sync.get('opacidad4', function (obj) {
               const defopacidad4 = 30;
               var finalopacidad4;
               if (obj.opacidad4 !== undefined) {
                  finalopacidad4 = obj.opacidad4
               } else {
                  finalopacidad4 = defopacidad4
               };
               try {
                  elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
                  for (var i = 0; i < elements.length; i++) {
                  elements[i].style.backgroundColor = `rgba(54, 55, 58, ${finalopacidad4/100})`;
                  } 
               } catch { }
            });
            } catch { };
      }, 1234)
         // document.querySelector(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db").style.background = "#36373a45"
   var id1 = setInterval(function() {
         //VERIFICA QUE AUN ESTAS EN LA PAGINA
         if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") === undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.UnvNgf.Sdwpn.P9KVBf > div.jsNRx") === null))
         { 
           setTimeout(() => clearInterval(id1), 8000)
         }

         //FUNCIONES
          try{

            try{
               alltext = document.getElementsByTagName("*");
               for (var i=0, max=alltext.length; i < max; i++) {
               alltext[i].style.color = "white";
               }
               } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};

            try{
            tiempo();
            } catch { }

            try{
            //BARRA DE ABAJO
            barradeabajo = document.getElementsByClassName('UnvNgf Sdwpn  P9KVBf');
            for(var i = 0; i < barradeabajo.length; i++){
               barradeabajo[i].style.backgroundColor="#20212400";
            }
            } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};
         
         
            try{
            //MICROFNO
            microfono = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN JxICCe CdgDHf FTMc0c N2RpBe jY9Dbb');
            for(var i = 0; i < microfono.length; i++){
               microfono[i].style.backgroundColor="#3c404336";
            }
            } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};
         
            try{
            //CAMARA
            camara = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c uaILN JxICCe nJcgFc FTMc0c N2RpBe jY9Dbb');
            for(var i = 0; i < camara.length; i++){
               camara[i].style.backgroundColor="#3c404336";
            }
            } catch { };
            
            try{
            //MANO
            mano = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe moJB3b');
            for(var i = 0; i < mano.length; i++){
               mano[i].style.backgroundColor="#3c404336";
            }
            } catch { };
            
            try{
            //PRESENTAR PANTALLA Y TRES PUNTOS
            presentar = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c  uaILN');
            for(var i = 0; i < presentar.length; i++){
               presentar[i].style.backgroundColor="#3c404336";
            }
            } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};
         
            /*
            try{
            //TRES PUNTOS
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};
            */

            try{
               //MENSAJERIA
               message = document.getElementsByClassName('R3Gmyc qwU8Me');
               for(var i = 0; i < message.length; i++){
                  message[i].style.backgroundColor = "#ffffff00";
               }
            } catch {console.log("ERROR AL CAMBIAR EL COLOR MENSAJERIA")};
            try{
               //PERFIL MINIMIZADO
               //primer fondo
               perfil1 = document.getElementsByClassName('RWK2Je');
               for(var i = 0; i < perfil1.length; i++){
                  perfil1[i].style.background = "#fff0";
               }
               //fondo de atras
               perfil2 = document.getElementsByClassName('ADivge Gt2yUd vLRPrf');
               for(var i = 0; i < perfil2.length; i++){
                  perfil2[i].style.background = "#36373a4d";
               }
            } catch {console.log("ERROR AL CAMBIAR EL PERFIL MINIMIZADO")};

            //CONFIGURACIÓN VENTANA
            try{
               settingsxd = document.getElementsByClassName('VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe CIYi0d jvUMfb yOCuXd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c');
                           for(var i = 0; i < settingsxd.length; i++){
                              settingsxd[i].style.background="#202124d1";
                           }
            } catch { console.log("ERROR AL CAMBIAR LA VENTANA DE AJUSTES")}

            try{
            //PRESENTAR PANTALLA MENU
            presentarpantalla = document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe iGzNwd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c");
            for(var i = 0; i < presentarpantalla.length; i++){
               presentarpantalla[i].style.backgroundColor="#202124d1";
            }
            } catch { }

            try{
            // ADMIN CONTROLES DE ORGANIZADOR
            controlesDeOrganizador = document.getElementsByClassName("TZFSLb ddIcCe MDZuce beUrMb");
            for(var i = 0; i < controlesDeOrganizador.length; i++){
            controlesDeOrganizador[i].style.backgroundColor="#202124d1";
            }
            } catch { }

            try{
            // AGREGAR PERSONAS
            agregarPersonas = document.getElementsByClassName("g3VIld NJEZld vDc8Ic hFEqNb J9Nfi iWO5td");
            for(var i = 0; i < agregarPersonas.length; i++){
            agregarPersonas[i].style.backgroundColor="#202124d1";
            };
            agregarPersonas2 = document.getElementsByClassName("duTsYc");
            for(var i = 0; i < agregarPersonas2.length; i++){
            agregarPersonas2[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            var cuadroDeNoInternet;
            try{
            //CAMBIA A TRANSPARENTE EL CUADRO DE SIN INTERNET
            cuadroDeNoInternet = document.getElementsByClassName('TZFSLb zfYLqc');
            for(var i = 0; i < cuadroDeNoInternet.length; i++){
               cuadroDeNoInternet[i].style.backgroundColor="#ffffff00";
            }
            } catch { }

            try{
            // BIENVENIDO AL MEET
            welcome1 = document.getElementsByClassName("xTGfdf");
            for(var i = 0; i < welcome1.length; i++){
            welcome1[i].style.backgroundColor="#202124d1";
            }
            welcome2 = document.getElementsByClassName("gvnMbb");
            for(var i = 0; i < welcome2.length; i++){
            welcome2[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            try{
            //CAMBIAR DISEÑO
            cambiardiseño = document.getElementsByClassName('VfPpkd-P5QLlc');
            for(var i = 0; i < cambiardiseño.length; i++){
               cambiardiseño[i].style.background="#36373a4d";
            }
            } catch { }

            try{
            // X ESTA PRESENTANDO
            presentandoahora = document.getElementsByClassName('MON6Vd P9KVBf');
            for(var i = 0; i < presentandoahora.length; i++){
               presentandoahora[i].style.background = "#36373a4d";
            }
            } catch { }

            try{
            // TERMINA EN X MINUTOS
            terminaEn = document.getElementsByClassName("ihVAlc EBpPQb VqncK");
            for(var i = 0; i < terminaEn.length; i++){
            terminaEn[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            var terminaEn2;
            try{
            // TERMINA EN X MINUTOS 2
            terminaEn2 = document.getElementsByClassName("ihVAlc VqncK");
            for(var i = 0; i < terminaEn2.length; i++){
            terminaEn2[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            try{
            // TERMINA EN X SEGUNDOS
            terminaEnXs = document.getElementsByClassName("LaJZaf");
            for(var i = 0; i < terminaEnXs.length; i++){
            terminaEnXs[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            try{
            //GRABANDO
            grabando = document.getElementsByClassName("F9AaL mKNb3d");
            for(var i = 0; i < grabando.length; i++){
            grabando[i].style.background="#ea43352e";
            }
            } catch { }

            try{
            //CARGANDO GRABACIÓN
            grabando2 = document.getElementsByClassName('F9AaL B8OGLd');
            for(var i = 0; i < grabando2.length; i++){
               grabando2[i].style.backgroundColor="#ffffff00";
            }
            } catch { }

            var perfilInvitación;
            try{
            //CAMBIAR COLOR DE LOS PERFILES DE LAS PERSONAS A LAS QUE SE LE ENVIA LA INVITACIÓN
            perfilInvitación = document.getElementsByClassName('EDnbAc');
            for(var i = 0; i < perfilInvitación.length; i++){
               perfilInvitación[i].style.backgroundColor="#ffffff00";
            }
            } catch { }
            
            try{
            //los que levantaron la mano
            listamano1 = document.getElementsByClassName('HeObRc KQZr0e');
            for(var i = 0; i < listamano1.length; i++){
            listamano1[i].style.background = "#202124d1";
            }
            } catch { }

            try{ 
            //VENTANA DE INFORMACION ADICIONAL
            ventanaflotanteinfo = document.getElementsByClassName('ghIe8');
               for(var i = 0; i < ventanaflotanteinfo.length; i++){
               ventanaflotanteinfo[i].style.background = "black";
               };
            } catch { }
            
            

            try{
               //CALIFICACIÓN
               calificación = document.getElementsByClassName('dQO5xd AkYcJb');
               for(var i = 0; i < calificación.length; i++){
               calificación[i].style.background = "#36373a4d";
               };
               //AUDIO
               audiofinal = document.getElementsByClassName('WtCEJc KLHCqc ftRkTe');
               for(var i = 0; i < audiofinal.length; i++){
               audiofinal[i].style.background = "#36373a4d";
               };
               //VIDEO
               videofinal = document.getElementsByClassName('WtCEJc KLHCqc ftRkTe KKjvXb');
               for(var i = 0; i < videofinal.length; i++){
               videofinal[i].style.background = "#36373a4d";
               };
            } catch { }

            try{
            //VOLVER A PANTALLA PRINCIPAL
            volverapantalla = document.getElementsByClassName('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe CX8SS ctOmyb');
            for(var i = 0; i < volverapantalla.length; i++){
            volverapantalla[i].style.background = "#1a73e82e";
            };
            } catch { }

            try{
            //DETENER PRESENTACIÓN PANTALLA COMPLETA
            detenerpresentación2 = document.getElementsByClassName('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe gLG6V');
            for(var i = 0; i < detenerpresentación2.length; i++){
            detenerpresentación2[i].style.background = "#1a73e82e";
            };
            } catch { }

            try{
            //SELECCIONA EL IDIOMA DE SUBTITULO
            subtituloconfig = document.getElementsByClassName('VfPpkd-rymPhb r6B9Fd bwNLcf P2Hi5d');
            for(var i = 0; i < subtituloconfig.length; i++){
            subtituloconfig[i].style.background = "black";
            };
            } catch { }

            try{
            //SUBTITULOS TRADUCIDOS REACUADRO
            subtitulostraducidos = document.getElementsByClassName('jEDmvc');
            for(var i = 0; i < subtitulostraducidos.length; i++){
            subtitulostraducidos[i].style.background = "#f8f9fa00";
            };
            } catch { }

            var llamadme;
            var llamadme2;
            try{
            //LLAMENMÉ USAR TELEFONO
            llamadme = document.getElementsByClassName('aCsJod oJeWuf');
            for(var i = 0; i < llamadme.length; i++){
            llamadme[i].style.background = "#20212480";
            };
            llamadme2 = document.getElementsByClassName('r5iSrd Axoxm xYohmd');
            for(var i = 0; i < llamadme2.length; i++){
            llamadme2[i].style.background = "#20212480";
            };
            } catch { }

            //CAMBIAR LOS ICONOS DE CONFIG
            try{
               ventanaiconos = document.getElementsByClassName('google-material-icons DO5H3e');
               for(var i = 0; i < ventanaiconos.length; i++){
                  ventanaiconos[i].style.background="#f1f3f400";
               }
            } catch { }

            try{
               //PREVISUALIZACIÓN DE AUDIO
            audioconfig = document.getElementsByClassName("NVUqMb");
            for(var i = 0; i < audioconfig.length; i++){
               audioconfig[i].style.backgroundColor="#f1f3f41a";
            }
            } catch { }
            
            try{
            //PREVISUALIZACIÓN DE VIDEO
            videoconfig = document.getElementsByClassName("oZ3U3b clMRcc");
            for(var i = 0; i < videoconfig.length; i++){
            videoconfig[i].style.backgroundColor="#f1f3f41a";
            }
            } catch { }

            try{
            //POR TELEFONO
            phone2 = document.getElementsByClassName("g3VIld sg26G Up8vH hFEqNb J9Nfi iWO5td");
            for(var i = 0; i < phone2.length; i++){
            phone2[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            try{
            //PAIS FINAL PARA LLAMADA
            country1 = document.getElementsByClassName("jgvuAb OQxO2c");
            for(var i = 0; i < country1.length; i++){
               country1[i].style.background="#f1f3f41a";
            }
            } catch { }
            
            try{
            //SELECCIONAR PAIS
            country2 = document.getElementsByClassName("OA0qNb ncFHed");
            for(var i = 0; i < country2.length; i++){
            country2[i].style.background="#000000bd";
            }
            } catch { }

            try{
            // EFECTOS VISUALES
            effects = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc Pr8ZAd");
            for(var i = 0; i < effects.length; i++){
            effects[i].style.backgroundColor="#f1f3f400";
            }
            } catch { }

            try{
            //TU CAMARA ESTA APAGADA PARA PONER LOS EFECTOS
            estaapagada = document.getElementsByClassName('koV58 Zi94Db ACAH7');
            for(var i = 0; i < estaapagada.length; i++){
            estaapagada[i].style.background = "#20212480";
            };
            } catch { }
            
            try{
            // ESTILOS ARRIBA Y ABAJO
            stylesxd = document.getElementsByClassName("VfPpkd-BIzmGd VfPpkd-BIzmGd-OWXEXe-X9G3K Hnvug W7mYUe Py0xOd eO2Zfd");
            for(var i = 0; i < stylesxd.length; i++){
            stylesxd[i].style.backgroundColor="#0c0c0cd1";
            }
            } catch { }

            try{
            // LEVANTAR LA MANO ANIMACIÓN
            levantarmano2 = document.getElementsByClassName("S41QRd");
            for(var i = 0; i < levantarmano2.length; i++){
            levantarmano2[i].style.backgroundColor="#202124d1";
            }
            } catch { }

            var error_video;
            //ERROR 1 DE VIDEO
            try{
            error_video = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod VVkv0e");
            for ( var i = 0; i < error_video.length; i++) {
            error_video[i].style.background = "black";
            }
            } catch { }
            
            var error_video2;
            //ERROR 2 DE VIDEO
            try{
            error_video2 = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod lF1xVb");
            for ( var i = 0; i < error_video2.length; i++) {
            error_video2[i].style.background = "black";
            }
            } catch { }

            var error_frame;
            //CUADRO DE ERROR DE VIDEO
            try{
               error_frame = document.getElementsByClassName('g3VIld vdySc Up8vH J9Nfi iWO5td');
                        for(var i = 0; i < error_frame.length; i++){
                           error_frame[i].style.background="#202124d1";
                        }
            } catch { }
            
            //CUADRO DE PING
            try{
               ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
                        for(var i = 0; i < ping2.length; i++){
                           ping2[i].style.background="#202124d1";
                        }
            } catch { }

            try{
            // SOLICITACIÓN PARA UNIRSE
            solicitarUnirse = document.getElementsByClassName("g3VIld T9cDKf vDc8Ic J9Nfi iWO5td");
            for(var i = 0; i < solicitarUnirse.length; i++){
            solicitarUnirse[i].style.backgroundColor="#202124d1";
            }
            } catch { }

            try{
            // LOS TRES PUNTOS PARA CADA USUARIO
            opcionesdeusuario = document.getElementsByClassName("JPdR6b e5Emjc RnNTc qjTEB");
            for(var i = 0; i < opcionesdeusuario.length; i++){
            opcionesdeusuario[i].style.backgroundColor="#202124d1";
            }
            } catch { }

            //URL A IMAGEN
            try{
                var list, index, element, todoeltexto, detectar, detectar2, reemplazar, reemplazar2, urlRegex;
                list = document.querySelectorAll(".oIy2qc:last-child");
                for (index = 0; index < list.length; ++index) {
                    element = list[index];
                    todoeltexto = element.textContent;
                    function isImage(url3) {
                     if (typeof url3 !== 'string') {
                        return false;
                     }
                     return (url3.match(/^http[^\?]*.(jpg|jpeg|svg|gif|webp|avif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
                     /*
                     return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url3);
                     */
                     };
                     function detectURLs(todoeltexto2) {
                     urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
                     return todoeltexto2.match(urlRegex)
                     };
                     try{
                     detectar = detectURLs(todoeltexto)[0];
                     detectar2 = detectURLs(todoeltexto)[1];
                     if(isImage(detectar2) === true) {
                        reemplazar = todoeltexto.replace(`${detectar}`, ``);
                        reemplazar2 = reemplazar.replace(`${detectar2}`, ``);
                        function onlySpaces1(strr) {
                           return strr.trim().length === 0;
                         }
                        if(onlySpaces1(reemplazar2) === false){
                        element.innerHTML = `<p>${reemplazar2}</p> <a href="${detectar}" target="_blank"><img src='${detectar}'></a> <a href="${detectar2}" target="_blank"><img src='${detectar2}'></a>`
                        } else { element.innerHTML = `<a href="${detectar}" target="_blank"><img src='${detectar}'></a> <a href="${detectar2}" target="_blank"><img src='${detectar2}'></a>`}
                     } else if(isImage(detectar) === true) {
                        reemplazar = element.textContent.replace(`${detectar}`, ``);
                        function onlySpaces2(strr) {
                           return strr.trim().length === 0;
                         }
                        if(onlySpaces2(reemplazar) === false){
                        element.innerHTML = `<p>${reemplazar}</p> <a href="${detectar}" target="_blank"><img src='${detectar}'></a>`
                        } else { element.innerHTML = `<a href="${detectar}" target="_blank"><img src='${detectar}'></a></a></a>`}
                     }  else { }
                     } catch { }
                    }
            } catch { }

            try{
            //NOTIFICAR PROBLEMA
            problemanotif = document.getElementsByClassName('g3VIld OFqiSb Up8vH Whe8ub J9Nfi iWO5td');
            for(var i = 0; i < problemanotif.length; i++){
               problemanotif[i].style.backgroundColor="#36373a4d";
            }
            } catch { }

            try{
               //FONDO DE MENSAJERIA
               message2 = document.getElementsByClassName('WUFI9b');
               for(var i = 0; i < message2.length; i++){
                  message2[i].style.background = "#36373a4d";
               }
               message3 = document.getElementsByClassName('Zzlrzb');
                        for(var i = 0; i < message3.length; i++){
                           message3[i].style.backgroundColor = "#ffffff00";
               }

               try{
                  //ADMIN CHAT
                  chatadmin = document.getElementsByClassName('WAPtFd jE2Fge');
                  for(var i = 0; i < chatadmin.length; i++){
                  chatadmin[i].style.background="#3c404300";
               }
               } catch { }

               try{
                  //ADMIN ASISTENCIA
                  peopleadmin = document.getElementsByClassName('Bs3rEf');
                  for(var i = 0; i < peopleadmin.length; i++){
                  peopleadmin[i].style.backgroundColor="#f1f3f414";
                  }
               } catch { }

               try{
               //CHAT
               chat1 = document.getElementsByClassName('v8W0vf');
               for(var i = 0; i < chat1.length; i++){
                  chat1[i].style.background="#f1f3f414";
               }
               chat2 = document.getElementsByClassName('BC4V9b');
               for(var i = 0; i < chat2.length; i++){
                  chat2[i].style.background="#f1f3f414";
               }
               } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE CHAT")};

               try{
                  //CAMBIAR COLOR DE TEXTO DEL CHAT
                  var y = document.getElementsByClassName("oIy2qc");
                  var i;
                  for (i = 0; i < y.length; i++) {
                  y[i].style.color = "white";
                  }
               } catch { }

               try{
                  //DETALLES DELA REUNIÓN
                  info1 = document.getElementsByClassName('CYZUZd');
                           for(var i = 0; i < info1.length; i++){
                              info1[i].style.color = "white";
                           }
                  
                  //INFORMACIÓN PA UNIRSE
                  info2 = document.getElementsByClassName('zy3vwb IpYpqc');
                           for(var i = 0; i < info2.length; i++){
                              info2[i].style.color = "white";
                           }
                  
                  //COPIAR LINK
                  info3 = document.getElementsByClassName('VfPpkd-vQzf8d');
                           for(var i = 0; i < info3.length; i++){
                              info3[i].style.color = "#58a0ff";
                           }
                  //LINK
                  info5 = document.getElementsByClassName('VA2JSc');
                           for(var i = 0; i < info5.length; i++){
                              info5[i].style.color = "#cfcfcf";
                           }
                  
                  //ARCHIVOS ADJUNTOS
                  info6 = document.getElementsByClassName('DwIq5e');
                           for(var i = 0; i < info6.length; i++){
                              info6[i].style.color = "#cfcfcf";
                           }
                  
                  //SEPARADOR
                  separator = document.getElementsByClassName('kCtYwe q8PJ2');
                  for(var i = 0; i < separator.length; i++){
                     separator[i].style.background="#ffffff7d";
                  }
                  } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE INFO")};

            } catch {console.log("ERROR AL CAMBIAR EL FONDO DE MENSAJERIA")};
            }
            catch{
            console.log("ERROR")
            }})
}

function tiempo(){
      var options = { weekday: 'long' };
      var hoy  = new Date();
      var tiempocompleto;
      tiempocompleto=document.getElementsByClassName("MQKmmc SudKRc Q4etDd wYNW7d");  // Find the elements
      for(var i = 0; i < tiempocompleto.length; i++){
      tiempocompleto[i].innerHTML=`<span>${hoy.toLocaleDateString("es-ES", options).toUpperCase()} &nbsp;&nbsp;</span><span jsname="d1rraf" class="E2mgnb" style="display: none;"></span></div><div class="NyMmmf"></div><span>&nbsp;&nbsp; ${hoy.toLocaleTimeString()}</span>`;
      }};

function detenerintervalo(){
      try{
         clearInterval(id1)
          
      } catch {
         try{
            clearInterval(id1)
      } catch { } }
      };

function off(){
   try{
      document.body.style.backgroundImage = `url("https://www.schemecolor.com/images/color-image-thumb.php?tx&w=600&h=316&hex=202124")`;
      /*
      document.body.style.backgroundPosition= "center";
      */
      document.body.style.backgroundRepeat= "no-repeat";
      document.body.style.backgroundSize= "160%";
      } catch {console.log("ERROR AL CAMBIAR LA IMAGEN")};

      try{
         alltext = document.getElementsByTagName("*");
         for (var i=0, max=alltext.length; i < max; i++) {
         alltext[i].style.color = "";
         }
         } catch {console.log("ERROR AL CAMBIAR TODO A LA NORMALIDAD")};
}

if (window.trustedTypes && window.trustedTypes.createPolicy) {
   window.trustedTypes.createPolicy('default', {
     createHTML: (string, sink) => string
   });
 }


/*
 var list, index, element, filename;
 list = document.getElementsByClassName('oIy2qc');
 for (index = 0; index < list.length; ++index) {
     element = list[index];
     filename = element.textContent.split(" ")
     element.innerHTML = `<a href="${filename[0]}">${element.textContent}</a> <img src='${filename[0]}'>`}

     const text="https://larepublica.pe/resizer/Im3jNnehRq5eu5G6tFky2SebrAQ=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ZGCXB332FFEGLLWMZJQSCW5KHM.jpg https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bundesarchiv_Bild_183-R99621%2C_Heinrich_Himmler.jpg/220px-Bundesarchiv_Bild_183-R99621%2C_Heinrich_Himmler.jpg https://larepublica.pe/resizer/J_OvJSptEd7ObIZRSdMw9kfRdP4=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/PIKOF4HNNJAJ3LE5OK6TE6GSUM.jpg"; const myArray = text.split(" "); console.log(myArray[0])


var list, index, element, filename;
 list = document.querySelectorAll(".oIy2qc:last-child");
 for (index = 0; index < list.length; ++index) {
     element = list[index];
     filename = element.textContent.split(" ")
     element.innerHTML = `<a href="${filename[0]}">${element.textContent}</a> <img src='${filename[0]}'>`}

try{
   var list, index, element, filename;
 list = document.querySelectorAll(".oIy2qc:last-child");
 for (index = 0; index < list.length; ++index) {
     element = list[index];
     filename = element.textContent.split(" ");
     function isImage(url3) {
      return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url3);
      }
     if(isImage(filename[0]) === true){
        element.innerHTML = `<a href="${filename[0]}">${filename.textContent.replace(filename[0], '')}</a><img src='${filename[0]}'><a href="${filename[0]}">${filename[0]}</a>`
      } else { }
     }
} catch { }

*/