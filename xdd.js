try{
 document.body.style.backgroundImage = ``;
 document.body.style.backgroundPosition = "center";
 document.body.style.backgroundSize = "cover";
 } catch {console.log("ERROR AL CAMBIAR LA IMAGEN")};

 //todo las letras
 var alltext;
 try{
 alltext = document.getElementsByTagName("*");
 for (var i=0, max=alltext.length; i < max; i++) {
 alltext[i].style.color = "";
 }
 } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};
 
 try{
 //BARRA DE ABAJO
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};

 try{
 //FONDO
 document.querySelector("#ow3").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR EL FONDO")};

 try{
 //MICROFNO
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};

 try{
 //CAMARA
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button").style.backgroundColor = "";
 } catch { };

 try{
 //MANO
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button").style.backgroundColor = "";
 } catch { };

 try{
 //PRESENTAR PANTALLA
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.FfiOZe > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};

 try{
 //TRES PUNTOS
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};

 try{
 //COLGAR
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.NHaLPe.CoOyx > span > button").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR COLGAR")};

 try{
 //SUBTITULOS
 document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.TlJx6e > div > span > button").style.backgroundColor = "";
 } catch {console.log("ERROR AL CAMBIAR LOS SUBTITULOS")};

 var elements;
 try{
    // FOTOS
 elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
 for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "";
    }
 } catch {console.log("ERROR AL CAMBIAR LAS FOTOS")};

 var message;
 try{
    //MENSAJERIA
    message = document.getElementsByClassName('R3Gmyc qwU8Me');
    for(var i = 0; i < message.length; i++){
       message[i].style.backgroundColor = "";
    }
 } catch {console.log("ERROR AL CAMBIAR EL COLOR MENSAJERIA")};

 var perfil1;
 var perfil2;
 try{
    //PERFIL MINIMIZADO
    //primer fondo
    perfil1 = document.getElementsByClassName('RWK2Je');
    for(var i = 0; i < perfil1.length; i++){
       perfil1[i].style.background = "";
    }
    //fondo de atras
    perfil2 = document.getElementsByClassName('ADivge Gt2yUd vLRPrf');
    for(var i = 0; i < perfil2.length; i++){
       perfil2[i].style.background = "";
    }
 } catch {console.log("ERROR AL CAMBIAR EL PERFIL MINIMIZADO")};
 
 var settingsxd;
 //CONFIGURACIÓN VENTANA
 try{
    settingsxd = document.getElementsByClassName('VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe CIYi0d jvUMfb yOCuXd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c');
                for(var i = 0; i < settingsxd.length; i++){
                   settingsxd[i].style.background="";
                }
 } catch { console.log("ERROR AL CAMBIAR LA VENTANA DE AJUSTES")}

 var presentarpantalla;
 try{
 //PRESENTAR PANTALLA MENU
 presentarpantalla = document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe iGzNwd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c");
 for(var i = 0; i < presentarpantalla.length; i++){
    presentarpantalla[i].style.backgroundColor="";
 }
 } catch { }

 var controlesDeOrganizador;
 try{
 // ADMIN CONTROLES DE ORGANIZADOR
 controlesDeOrganizador = document.getElementsByClassName("TZFSLb ddIcCe MDZuce beUrMb");
 for(var i = 0; i < controlesDeOrganizador.length; i++){
 controlesDeOrganizador[i].style.backgroundColor="";
 }
 } catch { }
 
 var agregarPersonas;
 var agregarPersonas2;
 try{
 // AGREGAR PERSONAS
 agregarPersonas = document.getElementsByClassName("g3VIld NJEZld vDc8Ic hFEqNb J9Nfi iWO5td");
 for(var i = 0; i < agregarPersonas.length; i++){
 agregarPersonas[i].style.backgroundColor="";
 };
 agregarPersonas2 = document.getElementsByClassName("duTsYc");
 for(var i = 0; i < agregarPersonas2.length; i++){
 agregarPersonas2[i].style.backgroundColor="";
 }
 } catch { }

 var welcome1;
 var welcome2;
 try{
 // BIENVENIDO AL MEET
 welcome1 = document.getElementsByClassName("xTGfdf");
 for(var i = 0; i < welcome1.length; i++){
 welcome1[i].style.backgroundColor="";
 }
 welcome2 = document.getElementsByClassName("gvnMbb");
 for(var i = 0; i < welcome2.length; i++){
 welcome2[i].style.backgroundColor="";
 }
 } catch { }

 var cambiardiseño;
 try{
 //CAMBIAR DISEÑO
 cambiardiseño = document.getElementsByClassName('VfPpkd-P5QLlc');
 for(var i = 0; i < cambiardiseño.length; i++){
    cambiardiseño[i].style.background="";
 }
 } catch { }

 var presentandoahora;
 try{
 // X ESTA PRESENTANDO
 presentandoahora = document.getElementsByClassName('MON6Vd P9KVBf');
 for(var i = 0; i < presentandoahora.length; i++){
    presentandoahora[i].style.background = "";
 }
 } catch { }

 var terminaEn;
 try{
 // TERMINA EN X MINUTOS
 terminaEn = document.getElementsByClassName("ihVAlc EBpPQb VqncK");
 for(var i = 0; i < terminaEn.length; i++){
 terminaEn[i].style.backgroundColor="";
 }
 } catch { }

 var terminaEn2;
 try{
 // TERMINA EN X MINUTOS 2
 terminaEn2 = document.getElementsByClassName("ihVAlc VqncK");
 for(var i = 0; i < terminaEn2.length; i++){
 terminaEn2[i].style.backgroundColor="";
 }
 } catch { }

 var terminaEnXs;
 try{
 // TERMINA EN X SEGUNDOS
 terminaEnXs = document.getElementsByClassName("LaJZaf");
 for(var i = 0; i < terminaEnXs.length; i++){
 terminaEnXs[i].style.backgroundColor="";
 }
 } catch { }

 var grabando;
 try{
 //GRABANDO
 grabando = document.getElementsByClassName("F9AaL mKNb3d");
 for(var i = 0; i < grabando.length; i++){
 grabando[i].style.background="";
 }
 } catch { }
 
 var listamano1;
 try{
 //los que levantaron la mano
 listamano1 = document.getElementsByClassName('HeObRc KQZr0e');
 for(var i = 0; i < listamano1.length; i++){
 listamano1[i].style.background = "";
 }
 } catch { }

 var ventanaiconos;
 //CAMBIAR LOS ICONOS DE LAS VENTANAS
 try{
    ventanaiconos = document.getElementsByClassName('google-material-icons DO5H3e');
    for(var i = 0; i < ventanaiconos.length; i++){
       ventanaiconos[i].style.background="";
    }
 } catch { }

 var audioconfig;
 try{
 //PREVISUALIZACIÓN DE AUDIO
 audioconfig = document.getElementsByClassName("NVUqMb");
 for(var i = 0; i < audioconfig.length; i++){
    audioconfig[i].style.backgroundColor="";
 }
 } catch { }
 
 var videoconfig;
 try{
 //PREVISUALIZACIÓN DE VIDEO
 videoconfig = document.getElementsByClassName("oZ3U3b clMRcc");
 for(var i = 0; i < videoconfig.length; i++){
 videoconfig[i].style.backgroundColor="";
 }
 } catch { }

 var phone2;
 try{
 //POR TELEFONO
 phone2 = document.getElementsByClassName("g3VIld sg26G Up8vH hFEqNb J9Nfi iWO5td");
 for(var i = 0; i < phone2.length; i++){
 phone2[i].style.backgroundColor="";
 }
 } catch { }
 
 var country1;
 try{
 //PAIS FINAL PARA LLAMADA
 country1 = document.getElementsByClassName("jgvuAb OQxO2c");
 for(var i = 0; i < country1.length; i++){
    country1[i].style.background="";
 }
 } catch { }
 
 var country2;
 try{
 //SELECCIONAR PAIS
 country2 = document.getElementsByClassName("OA0qNb ncFHed");
 for(var i = 0; i < country2.length; i++){
 country2[i].style.background="";
 }
 } catch { }
 
 var effects;
 try{
 // EFECTOS VISUALES
 effects = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc Pr8ZAd");
 for(var i = 0; i < effects.length; i++){
 effects[i].style.backgroundColor="";
 }
 } catch { }

 var stylesxd
 try{
 // ESTILOS ARRIBA Y ABAJO
 stylesxd = document.getElementsByClassName("VfPpkd-BIzmGd VfPpkd-BIzmGd-OWXEXe-X9G3K Hnvug W7mYUe Py0xOd eO2Zfd");
 for(var i = 0; i < stylesxd.length; i++){
 stylesxd[i].style.backgroundColor="";
 }
 } catch { }

 var levantarmano2;
 try{
 // LEVANTAR LA MANO ANIMACIÓN
 levantarmano2 = document.getElementsByClassName("S41QRd");
 for(var i = 0; i < levantarmano2.length; i++){
 levantarmano2[i].style.backgroundColor="";
 }
 } catch { }

 var error_video;
 //ERROR 1 DE VIDEO
 try{
 error_video = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod VVkv0e");
 for ( var i = 0; i < error_video.length; i++) {
 error_video[i].style.background = "";
 }
 } catch { }
 
 var error_video2;
 //ERROR 2 DE VIDEO
 try{
 error_video2 = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod lF1xVb");
 for ( var i = 0; i < error_video2.length; i++) {
 error_video2[i].style.background = "";
 }
 } catch { }

 var error_frame;
 //CUADRO DE ERROR DE VIDEO
 try{
    error_frame = document.getElementsByClassName('g3VIld vdySc Up8vH J9Nfi iWO5td');
             for(var i = 0; i < error_frame.length; i++){
                error_frame[i].style.background="";
             }
 } catch { }

 var ping2;
 //CUADRO DE PING
 try{
    ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
             for(var i = 0; i < ping2.length; i++){
                ping2[i].style.background="";
             }
 } catch { }

 var solicitarUnirse;
 try{
 // SOLICITACIÓN PARA UNIRSE
 solicitarUnirse = document.getElementsByClassName("g3VIld T9cDKf vDc8Ic J9Nfi iWO5td");
 for(var i = 0; i < solicitarUnirse.length; i++){
 solicitarUnirse[i].style.backgroundColor="";
 }
 } catch { }

 var opcionesdeusuario;
 try{
 // LOS TRES PUNTOS PARA CADA USUARIO
 opcionesdeusuario = document.getElementsByClassName("JPdR6b e5Emjc RnNTc qjTEB");
 for(var i = 0; i < opcionesdeusuario.length; i++){
 opcionesdeusuario[i].style.backgroundColor="";
 }
 } catch { }

 var problemanotif;
 try{
 //NOTIFICAR PROBLEMA
 problemanotif = document.getElementsByClassName('g3VIld OFqiSb Up8vH Whe8ub J9Nfi iWO5td');
 for(var i = 0; i < problemanotif.length; i++){
    problemanotif[i].style.backgroundColor="";
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
       message2[i].style.background = "";
    }
    message3 = document.getElementsByClassName('Zzlrzb');
             for(var i = 0; i < message3.length; i++){
                message3[i].style.backgroundColor = "";
    }

    try{
       //ADMIN CHAT
       chatadmin = document.getElementsByClassName('WAPtFd jE2Fge');
       for(var i = 0; i < chatadmin.length; i++){
       chatadmin[i].style.background="";
    }
    } catch { }

    try{
       //ADMIN ASISTENCIA
       peopleadmin = document.getElementsByClassName('Bs3rEf');
       for(var i = 0; i < peopleadmin.length; i++){
       peopleadmin[i].style.backgroundColor="";
       }
    } catch { }

    try{
       //CHAT
       chat1 = document.getElementsByClassName('v8W0vf');
       for(var i = 0; i < chat1.length; i++){
          chat1[i].style.background="";
       }
       chat2 = document.getElementsByClassName('BC4V9b');
       for(var i = 0; i < chat2.length; i++){
          chat2[i].style.background="";
       }
       } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE CHAT")};
    
    try{
    //DETALLES DELA REUNIÓN
    info1 = document.getElementsByClassName('CYZUZd');
             for(var i = 0; i < info1.length; i++){
                info1[i].style.color = "";
             }
    
    //INFORMACIÓN PA UNIRSE
    info2 = document.getElementsByClassName('zy3vwb IpYpqc');
             for(var i = 0; i < info2.length; i++){
                info2[i].style.color = "";
             }
    
    //COPIAR LINK
    info3 = document.getElementsByClassName('VfPpkd-vQzf8d');
             for(var i = 0; i < info3.length; i++){
                info3[i].style.color = "";
             }
    //LINK
    info5 = document.getElementsByClassName('VA2JSc');
             for(var i = 0; i < info5.length; i++){
                info5[i].style.color = "";
             }
    
    //ARCHIVOS ADJUNTOS
    info6 = document.getElementsByClassName('DwIq5e');
             for(var i = 0; i < info6.length; i++){
                info6[i].style.color = "";
             }
    
    //SEPARADOR
    separator = document.getElementsByClassName('kCtYwe q8PJ2');
    for(var i = 0; i < separator.length; i++){
       separator[i].style.background="";
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
          alltext[i].style.color = "";
          }
          } catch {console.log("ERROR AL CAMBIAR TODO A BLANCO")};

          try{
          tiempo();
          } catch { }

          try{
          //BARRA DE ABAJO
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf").style.backgroundColor = "";
          } catch {console.log("ERROR AL CAMBIAR LA BARRA DE ABJAO")};
       
          try{
          //FONDO
          document.querySelector("#ow3").style.backgroundColor = "";
          } catch {console.log("ERROR AL CAMBIAR EL FONDO")};
       
          try{
          //MICROFNO
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.AVk6L.gwmyUe > div > div > span > button").style.backgroundColor = "";
          } catch {console.log("ERROR AL CAMBIAR EL MICROFONO")};
       
          try{
          //CAMARA
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.CrGlle.dq8L2c > div > span > button").style.backgroundColor = "";
          } catch { };
          
          try{
          //MANO
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.naeMJb > div > div > span > button").style.backgroundColor = "";
          } catch { };
          
          try{
          //PRESENTAR PANTALLA
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.FfiOZe > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "";
          } catch {console.log("ERROR AL CAMBIAR LA PRESENTACIÓN DE PANTALLA")};
       
          try{
          //TRES PUNTOS
          document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.DAQYgc.xPh1xb.P9KVBf > div.rceXCe > div > div.Nsfdxf > div > div.VfPpkd-xl07Ob-XxIAqe-OWXEXe-oYxtQd > div:nth-child(1) > span > button").style.backgroundColor = "";
          } catch {console.log("ERROR AL CAMBIAR LAS OPCIONES")};

          try{
             //FOTOS
          elements= document.querySelectorAll(".zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc, .zWfAib:not(.zTETae):not(.n9oEIb)>.Zf0RDc .Zi94Db");
          for (var i = 0; i < elements.length; i++) {
             elements[i].style.backgroundColor = "";
             }
          } catch {console.log("ERROR AL CAMBIAR LAS FOTOS")};
          try{
             //MENSAJERIA
             message = document.getElementsByClassName('R3Gmyc qwU8Me');
             for(var i = 0; i < message.length; i++){
                message[i].style.backgroundColor = "";
             }
          } catch {console.log("ERROR AL CAMBIAR EL COLOR MENSAJERIA")};
          try{
             //PERFIL MINIMIZADO
             //primer fondo
             perfil1 = document.getElementsByClassName('RWK2Je');
             for(var i = 0; i < perfil1.length; i++){
                perfil1[i].style.background = "";
             }
             //fondo de atras
             perfil2 = document.getElementsByClassName('ADivge Gt2yUd vLRPrf');
             for(var i = 0; i < perfil2.length; i++){
                perfil2[i].style.background = "";
             }
          } catch {console.log("ERROR AL CAMBIAR EL PERFIL MINIMIZADO")};

          //CONFIGURACIÓN VENTANA
          try{
             settingsxd = document.getElementsByClassName('VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe CIYi0d jvUMfb yOCuXd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c');
                         for(var i = 0; i < settingsxd.length; i++){
                            settingsxd[i].style.background="";
                         }
          } catch { console.log("ERROR AL CAMBIAR LA VENTANA DE AJUSTES")}

          try{
          //PRESENTAR PANTALLA MENU
          presentarpantalla = document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe iGzNwd VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c");
          for(var i = 0; i < presentarpantalla.length; i++){
             presentarpantalla[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // ADMIN CONTROLES DE ORGANIZADOR
          controlesDeOrganizador = document.getElementsByClassName("TZFSLb ddIcCe MDZuce beUrMb");
          for(var i = 0; i < controlesDeOrganizador.length; i++){
          controlesDeOrganizador[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // AGREGAR PERSONAS
          agregarPersonas = document.getElementsByClassName("g3VIld NJEZld vDc8Ic hFEqNb J9Nfi iWO5td");
          for(var i = 0; i < agregarPersonas.length; i++){
          agregarPersonas[i].style.backgroundColor="";
          };
          agregarPersonas2 = document.getElementsByClassName("duTsYc");
          for(var i = 0; i < agregarPersonas2.length; i++){
          agregarPersonas2[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // BIENVENIDO AL MEET
          welcome1 = document.getElementsByClassName("xTGfdf");
          for(var i = 0; i < welcome1.length; i++){
          welcome1[i].style.backgroundColor="";
          }
          welcome2 = document.getElementsByClassName("gvnMbb");
          for(var i = 0; i < welcome2.length; i++){
          welcome2[i].style.backgroundColor="";
          }
          } catch { }

          try{
          //CAMBIAR DISEÑO
          cambiardiseño = document.getElementsByClassName('VfPpkd-P5QLlc');
          for(var i = 0; i < cambiardiseño.length; i++){
             cambiardiseño[i].style.background="";
          }
          } catch { }

          try{
          // X ESTA PRESENTANDO
          presentandoahora = document.getElementsByClassName('MON6Vd P9KVBf');
          for(var i = 0; i < presentandoahora.length; i++){
             presentandoahora[i].style.background = "";
          }
          } catch { }

          try{
          // TERMINA EN X MINUTOS
          terminaEn = document.getElementsByClassName("ihVAlc EBpPQb VqncK");
          for(var i = 0; i < terminaEn.length; i++){
          terminaEn[i].style.backgroundColor="";
          }
          } catch { }

          var terminaEn2;
          try{
          // TERMINA EN X MINUTOS 2
          terminaEn2 = document.getElementsByClassName("ihVAlc VqncK");
          for(var i = 0; i < terminaEn2.length; i++){
          terminaEn2[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // TERMINA EN X SEGUNDOS
          terminaEnXs = document.getElementsByClassName("LaJZaf");
          for(var i = 0; i < terminaEnXs.length; i++){
          terminaEnXs[i].style.backgroundColor="";
          }
          } catch { }

          try{
          //GRABANDO
          grabando = document.getElementsByClassName("F9AaL mKNb3d");
          for(var i = 0; i < grabando.length; i++){
          grabando[i].style.background="";
          }
          } catch { }
          
          try{
          //los que levantaron la mano
          listamano1 = document.getElementsByClassName('HeObRc KQZr0e');
          for(var i = 0; i < listamano1.length; i++){
          listamano1[i].style.background = "";
          }
          } catch { }

          try{ 
          //VENTANA DE INFORMACION ADICIONAL
          ventanaflotanteinfo = document.getElementsByClassName('ghIe8');
             for(var i = 0; i < ventanaflotanteinfo.length; i++){
             ventanaflotanteinfo[i].style.background = "";
             };
          } catch { }
          
          

          try{
             //CALIFICACIÓN
             calificación = document.getElementsByClassName('dQO5xd AkYcJb');
             for(var i = 0; i < calificación.length; i++){
             calificación[i].style.background = "";
             };
             //AUDIO
             audiofinal = document.getElementsByClassName('WtCEJc KLHCqc ftRkTe');
             for(var i = 0; i < audiofinal.length; i++){
             audiofinal[i].style.background = "";
             };
             //VIDEO
             videofinal = document.getElementsByClassName('WtCEJc KLHCqc ftRkTe KKjvXb');
             for(var i = 0; i < videofinal.length; i++){
             videofinal[i].style.background = "";
             };
          } catch { }

          try{
          //VOLVER A PANTALLA PRINCIPAL
          volverapantalla = document.getElementsByClassName('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe CX8SS ctOmyb');
          for(var i = 0; i < volverapantalla.length; i++){
          volverapantalla[i].style.background = "";
          };
          } catch { }

          try{
          //DETENER PRESENTACIÓN PANTALLA COMPLETA
          detenerpresentación2 = document.getElementsByClassName('VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qfvgSe gLG6V');
          for(var i = 0; i < detenerpresentación2.length; i++){
          detenerpresentación2[i].style.background = "";
          };
          } catch { }

          try{
          //SELECCIONA EL IDIOMA DE SUBTITULO
          subtituloconfig = document.getElementsByClassName('VfPpkd-rymPhb r6B9Fd bwNLcf P2Hi5d');
          for(var i = 0; i < subtituloconfig.length; i++){
          subtituloconfig[i].style.background = "";
          };
          } catch { }

          try{
          //SUBTITULOS TRADUCIDOS REACUADRO
          subtitulostraducidos = document.getElementsByClassName('jEDmvc');
          for(var i = 0; i < subtitulostraducidos.length; i++){
          subtitulostraducidos[i].style.background = "";
          };
          } catch { }

          //CAMBIAR LOS ICONOS DE CONFIG
          try{
             ventanaiconos = document.getElementsByClassName('google-material-icons DO5H3e');
             for(var i = 0; i < ventanaiconos.length; i++){
                ventanaiconos[i].style.background="";
             }
          } catch { }

          try{
             //PREVISUALIZACIÓN DE AUDIO
          audioconfig = document.getElementsByClassName("NVUqMb");
          for(var i = 0; i < audioconfig.length; i++){
             audioconfig[i].style.backgroundColor="";
          }
          } catch { }
          
          try{
          //PREVISUALIZACIÓN DE VIDEO
          videoconfig = document.getElementsByClassName("oZ3U3b clMRcc");
          for(var i = 0; i < videoconfig.length; i++){
          videoconfig[i].style.backgroundColor="";
          }
          } catch { }

          try{
          //POR TELEFONO
          phone2 = document.getElementsByClassName("g3VIld sg26G Up8vH hFEqNb J9Nfi iWO5td");
          for(var i = 0; i < phone2.length; i++){
          phone2[i].style.backgroundColor="";
          }
          } catch { }

          try{
          //PAIS FINAL PARA LLAMADA
          country1 = document.getElementsByClassName("jgvuAb OQxO2c");
          for(var i = 0; i < country1.length; i++){
             country1[i].style.background="";
          }
          } catch { }
          
          try{
          //SELECCIONAR PAIS
          country2 = document.getElementsByClassName("OA0qNb ncFHed");
          for(var i = 0; i < country2.length; i++){
          country2[i].style.background="";
          }
          } catch { }

          try{
          // EFECTOS VISUALES
          effects = document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-INsAgc VfPpkd-LgbsSe-OWXEXe-dgl2Hf Rj2Mlf OLiIxf PDpWxe P62QJc Pr8ZAd");
          for(var i = 0; i < effects.length; i++){
          effects[i].style.backgroundColor="";
          }
          } catch { }

          try{
          //TU CAMARA ESTA APAGADA PARA PONER LOS EFECTOS
          estaapagada = document.getElementsByClassName('koV58 Zi94Db ACAH7');
          for(var i = 0; i < estaapagada.length; i++){
          estaapagada[i].style.background = "";
          };
          } catch { }
          
          try{
          // ESTILOS ARRIBA Y ABAJO
          stylesxd = document.getElementsByClassName("VfPpkd-BIzmGd VfPpkd-BIzmGd-OWXEXe-X9G3K Hnvug W7mYUe Py0xOd eO2Zfd");
          for(var i = 0; i < stylesxd.length; i++){
          stylesxd[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // LEVANTAR LA MANO ANIMACIÓN
          levantarmano2 = document.getElementsByClassName("S41QRd");
          for(var i = 0; i < levantarmano2.length; i++){
          levantarmano2[i].style.backgroundColor="";
          }
          } catch { }

          var error_video;
          //ERROR 1 DE VIDEO
          try{
          error_video = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod VVkv0e");
          for ( var i = 0; i < error_video.length; i++) {
          error_video[i].style.background = "";
          }
          } catch { }
          
          var error_video2;
          //ERROR 2 DE VIDEO
          try{
          error_video2 = document.getElementsByClassName("google-material-icons VfPpkd-kBDsod lF1xVb");
          for ( var i = 0; i < error_video2.length; i++) {
          error_video2[i].style.background = "";
          }
          } catch { }

          var error_frame;
          //CUADRO DE ERROR DE VIDEO
          try{
             error_frame = document.getElementsByClassName('g3VIld vdySc Up8vH J9Nfi iWO5td');
                      for(var i = 0; i < error_frame.length; i++){
                         error_frame[i].style.background="";
                      }
          } catch { }
          
          //CUADRO DE PING
          try{
             ping2 = document.getElementsByClassName('ke9kZe-Rgw69b FHBy3b');
                      for(var i = 0; i < ping2.length; i++){
                         ping2[i].style.background="";
                      }
          } catch { }

          try{
          // SOLICITACIÓN PARA UNIRSE
          solicitarUnirse = document.getElementsByClassName("g3VIld T9cDKf vDc8Ic J9Nfi iWO5td");
          for(var i = 0; i < solicitarUnirse.length; i++){
          solicitarUnirse[i].style.backgroundColor="";
          }
          } catch { }

          try{
          // LOS TRES PUNTOS PARA CADA USUARIO
          opcionesdeusuario = document.getElementsByClassName("JPdR6b e5Emjc RnNTc qjTEB");
          for(var i = 0; i < opcionesdeusuario.length; i++){
          opcionesdeusuario[i].style.backgroundColor="";
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
                   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url3);
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
                      element.innerHTML = `<p>${reemplazar2}</p> <a href="${detectar}" target="_blank"><img src='${detectar}' style='width:300px'></a> <a href="${detectar2}" target="_blank"><img src='${detectar2}' style='width:300px'></a>`
                      } else { element.innerHTML = `<a href="${detectar}" target="_blank"><img src='${detectar}' style='width:300px'></a> <a href="${detectar2}" target="_blank"><img src='${detectar2}' style='width:300px'></a>`}
                   } else if(isImage(detectar) === true) {
                      reemplazar = element.textContent.replace(`${detectar}`, ``);
                      function onlySpaces2(strr) {
                         return strr.trim().length === 0;
                       }
                      if(onlySpaces2(reemplazar) === false){
                      element.innerHTML = `<p>${reemplazar}</p> <a href="${detectar}" target="_blank"><img src='${detectar}' style='width:300px'></a>`
                      } else { element.innerHTML = `<a href="${detectar}" target="_blank"><img src='${detectar}' style='width:300px'></a></a></a>`}
                   }  else { }
                   } catch { }
                  }
          } catch { }

          try{
          //NOTIFICAR PROBLEMA
          problemanotif = document.getElementsByClassName('g3VIld OFqiSb Up8vH Whe8ub J9Nfi iWO5td');
          for(var i = 0; i < problemanotif.length; i++){
             problemanotif[i].style.backgroundColor="";
          }
          } catch { }

          try{
             //FONDO DE MENSAJERIA
             message2 = document.getElementsByClassName('WUFI9b');
             for(var i = 0; i < message2.length; i++){
                message2[i].style.background = "";
             }
             message3 = document.getElementsByClassName('Zzlrzb');
                      for(var i = 0; i < message3.length; i++){
                         message3[i].style.backgroundColor = "";
             }

             try{
                //ADMIN CHAT
                chatadmin = document.getElementsByClassName('WAPtFd jE2Fge');
                for(var i = 0; i < chatadmin.length; i++){
                chatadmin[i].style.background="";
             }
             } catch { }

             try{
                //ADMIN ASISTENCIA
                peopleadmin = document.getElementsByClassName('Bs3rEf');
                for(var i = 0; i < peopleadmin.length; i++){
                peopleadmin[i].style.backgroundColor="";
                }
             } catch { }

             try{
             //CHAT
             chat1 = document.getElementsByClassName('v8W0vf');
             for(var i = 0; i < chat1.length; i++){
                chat1[i].style.background="";
             }
             chat2 = document.getElementsByClassName('BC4V9b');
             for(var i = 0; i < chat2.length; i++){
                chat2[i].style.background="";
             }
             } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE CHAT")};

             try{
                //CAMBIAR COLOR DE TEXTO DEL CHAT
                var y = document.getElementsByClassName("oIy2qc");
                var i;
                for (i = 0; i < y.length; i++) {
                y[i].style.color = "";
                }
             } catch { }

             try{
                //DETALLES DELA REUNIÓN
                info1 = document.getElementsByClassName('CYZUZd');
                         for(var i = 0; i < info1.length; i++){
                            info1[i].style.color = "";
                         }
                
                //INFORMACIÓN PA UNIRSE
                info2 = document.getElementsByClassName('zy3vwb IpYpqc');
                         for(var i = 0; i < info2.length; i++){
                            info2[i].style.color = "";
                         }
                
                //COPIAR LINK
                info3 = document.getElementsByClassName('VfPpkd-vQzf8d');
                         for(var i = 0; i < info3.length; i++){
                            info3[i].style.color = "";
                         }
                //LINK
                info5 = document.getElementsByClassName('VA2JSc');
                         for(var i = 0; i < info5.length; i++){
                            info5[i].style.color = "";
                         }
                
                //ARCHIVOS ADJUNTOS
                info6 = document.getElementsByClassName('DwIq5e');
                         for(var i = 0; i < info6.length; i++){
                            info6[i].style.color = "";
                         }
                
                //SEPARADOR
                separator = document.getElementsByClassName('kCtYwe q8PJ2');
                for(var i = 0; i < separator.length; i++){
                   separator[i].style.background="";
                }
                } catch {console.log("ERROR AL CAMBIAR LA VENTANA DE INFO")};

          } catch {console.log("ERROR AL CAMBIAR EL FONDO DE MENSAJERIA")};
          }
          catch{
          console.log("ERROR")
          }}, 500)