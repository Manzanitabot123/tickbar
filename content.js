var xd = setInterval(function() {
   if (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") !== 'undefined' && document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") != null)
   {
   console.log('ahora si xd');
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
   if (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") !== 'undefined' && document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") != null)
   {
   if (elenlace == "") {
      detenerintervalo();
      document.querySelector("#ow3").style.backgroundColor = "#202124";
   } else { 
      try{
         function isImage(url2) {
               return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url2);
            }
            console.log(isImage(elenlace))
            if(isImage(elenlace) === true){
               changeColor(elenlace);
               console.log("La imagen es valida");
            } else {
            alert("El enlace de la imagen no es válida D:")
            console.log("La imagen no es valida");}
      } catch { 
         alert("El enlace de la imagen no es válida D:")
         console.log("La imagen no es valida");
      }
   }
   } else {alert("Solo puedes hacer eso dentro de una llamada")}
})

 function changeColor(elenlacexd){
   try{
      var value = elenlacexd;
   chrome.storage.sync.set({'wallpaper2': value});
   } catch(error) { console.log(error)}

   try{
   document.body.style.backgroundImage = `url(${elenlacexd})`;
   document.body.style.backgroundPosition = "center";
   document.body.style.backgroundSize = "cover";
   } catch {console.log("ERROR AL CAMBIAR LA IMAGEN")};

   //todo las letras
   var alltext;
   try{
   alltext = document.getElementsByTagName("*");
   for (var i=0, max=alltext.length; i < max; i++) {
   alltext[i].style.color = "white";
   }
   } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};
   
   try{
   //BARRA DE ABAJO
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf").style.backgroundColor = "#20212400";
   } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};

   try{
   //FONDO
   document.querySelector("#ow3").style.backgroundColor = "#202124";
   } catch {console.log("ERROR AL CAMBIAR EL FONDO")};

   try{
   //MICROFNO
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};

   try{
   //CAMARA
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LA CAMARA")};

   try{
   //MANO
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LA CAMARA")};

   try{
   //PRESENTAR PANTALLA
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.FfiOZe > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};

   try{
   //TRES PUNTOS
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};

   try{
   //COLGAR
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.NHaLPe.CoOyx > span > button").style.backgroundColor = "#ea43352e";
   } catch {console.log("ERROR AL CAMBIAR COLGAR")};

   try{
   //SUBTITULOS
   document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.TlJx6e > div > span > button").style.backgroundColor = "#3c404336";
   } catch {console.log("ERROR AL CAMBIAR LOS SUBTITULOS")};

   var elements;
   try{
      // FOTOS
   elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "#36373a4d";
      }
   } catch {console.log("ERROR AL CAMBIAR LAS FOTOS")};

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

   var ping2;
   //CUADRO DE PING
   try{
      ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
               for(var i = 0; i < ping2.length; i++){
                  ping2[i].style.background="#202124d1";
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
         chatadmin[i].style.background="#f1f3f414";
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
         // document.querySelector(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db").style.background = "#36373a45"
   var id1 = setInterval(function() {
         //VERIFICA QUE AUN ESTAS EN LA PAGINA
         if (document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") !== 'undefined' && document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button") === null)
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
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf").style.backgroundColor = "#20212400";
            } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};
         
            try{
            //FONDO
            document.querySelector("#ow3").style.backgroundColor = "#2021247d";
            } catch {console.log("ERROR AL CAMBIAR EL FONDO")};
         
            try{
            //MICROFNO
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};
         
            try{
            //CAMARA
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR LA CAMARA")};
            
            try{
            //MANO
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR LA CAMARA")};
            
            try{
            //PRESENTAR PANTALLA
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.FfiOZe > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};
         
            try{
            //TRES PUNTOS
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "#3c404336";
            } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};

            try{
               //FOTOS
            elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
            for (var i = 0; i < elements.length; i++) {
               elements[i].style.backgroundColor = "#36373a4d";
               }
            } catch {console.log("ERROR AL CAMBIAR LAS FOTOS")};
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
            
            //CUADRO DE PING
            try{
               ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
                        for(var i = 0; i < ping2.length; i++){
                           ping2[i].style.background="#202124d1";
                        }
            } catch { }

            //URL A IMAGEN
            try{
               var list, index, element, filename;
             list = document.querySelectorAll(".oIy2qc:last-child");
             for (index = 0; index < list.length; ++index) {
                 element = list[index];
                 filename = element.textContent.split(" ");
                 function isImage(url3) {
                  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url3);
                  }
                 if (isImage(filename[0]) === true && filename[1]){
                    var reemplazar = element.textContent.replace(`${filename[0]} `, ` `)
                    element.innerHTML = `<p>${reemplazar}</p> <a href="${filename[0]}" target="_blank"><img src='${filename[0]}' style='width:300px'>`
                  } else if (isImage(filename[0]) === true) {
                    var reemplazar = element.textContent.replace(`${filename[0]}`, ` `)
                    element.innerHTML = `<a href="${filename[0]}" target="_blank"><img src='${filename[0]}' style='width:300px'>`
                  } else { }
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
                  chatadmin[i].style.background="#f1f3f414";
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
            }
            catch{
            console.log("ERROR")
            }}, 500)
   }

function tiempo(){
      var date = new Date(); 
      var tiempocompleto
      tiempocompleto=document.getElementsByClassName("MQKmmc SudKRc Q4etDd wYNW7d");  // Find the elements
      for(var i = 0; i < tiempocompleto.length; i++){
      tiempocompleto[i].innerText=`${date.toLocaleString()}`;
      }};

function detenerintervalo(){
      try{
         var killId = setTimeout(function() {
            for (var i = killId; i > 0; i--) clearInterval(i)
          }, 1);
          
         console.log(id1, killId)
          
      } catch { }
      };

// https://images.wallpapersden.com/image/download/takanashi-rikka-girl-dress_bGVnZpSZmpqtpaSklGZpaWWtbmVl.jpg


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
     element.innerHTML = `<a href="${filename[0]}">${element.textContent}</a> <img src='${filename[0]}' style='width:300px'>`}

     const text="https://larepublica.pe/resizer/Im3jNnehRq5eu5G6tFky2SebrAQ=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/ZGCXB332FFEGLLWMZJQSCW5KHM.jpg https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bundesarchiv_Bild_183-R99621%2C_Heinrich_Himmler.jpg/220px-Bundesarchiv_Bild_183-R99621%2C_Heinrich_Himmler.jpg https://larepublica.pe/resizer/J_OvJSptEd7ObIZRSdMw9kfRdP4=/1200x660/top/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/PIKOF4HNNJAJ3LE5OK6TE6GSUM.jpg"; const myArray = text.split(" "); console.log(myArray[0])


var list, index, element, filename;
 list = document.querySelectorAll(".oIy2qc:last-child");
 for (index = 0; index < list.length; ++index) {
     element = list[index];
     filename = element.textContent.split(" ")
     element.innerHTML = `<a href="${filename[0]}">${element.textContent}</a> <img src='${filename[0]}' style='width:300px'>`}

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
        element.innerHTML = `<a href="${filename[0]}">${filename.textContent.replace(filename[0], '')}</a><img src='${filename[0]}' style='width:300px'><a href="${filename[0]}">${filename[0]}</a>`
      } else { }
     }
} catch { }

*/