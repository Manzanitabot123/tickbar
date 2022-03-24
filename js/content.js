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

if ((document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc") != undefined) || (document.querySelector("#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc") != null))
   {
      //------------------------------------THANK YOU FOR USING SIMPLE CUSTOM MEET-------------------------------------------------

      //TODO A BLANCO
      var alltexto;
      try{
      alltexto = document.getElementsByTagName("*");
      for (var i=0, max=alltexto.length; i < max; i++) {
      alltexto[i].style.color = "white";
      }
      } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};

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
         document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${finalwallpaper})`;
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

      var reunionesproximas;
      var reunionesproximas2;
      try{
      //REUNIONES QUE SIGUEN
      reunionesproximas = document.getElementsByClassName('VdLOD yUoCvf JxfZTd');
                  for(var i = 0; i < reunionesproximas.length; i++){
                     reunionesproximas[i].style.backgroundColor="#ffffff00";
                  }
      reunionesproximas2 = document.getElementsByClassName('mtr0Je');
                  for(var i = 0; i < reunionesproximas2.length; i++){
                     reunionesproximas2[i].style.backgroundColor="#ffffff00";
                  }
      } catch { }

      var menuparacrearllamada;
      try{
      //MENU PARA CREAR LLAMADA
      menuparacrearllamada = document.getElementsByClassName('VfPpkd-StrnGf-rymPhb DMZ54e');
                  for(var i = 0; i < menuparacrearllamada.length; i++){
                     menuparacrearllamada[i].style.backgroundColor="black";
                  }
      } catch { }
}
var xd = setInterval(function() {
   if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") != undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") != null))
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
   if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") != undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") != null))
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
      if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") === undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") === null))
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
         if ((document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") === undefined) || (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div") === null))
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
      var tiempocompleto
      tiempocompleto=document.getElementsByClassName("MQKmmc SudKRc Q4etDd wYNW7d");  // Find the elements
      for(var i = 0; i < tiempocompleto.length; i++){
      tiempocompleto[i].innerText=`${hoy.toLocaleDateString("es-ES", options).toUpperCase()} • ${hoy.toLocaleTimeString()}`;
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