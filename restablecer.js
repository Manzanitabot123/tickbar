document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("restablecer").addEventListener('click', onclick, false)
     
      function onclick () {
        var ocultar = "OCULTAR"
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, ocultar)
        })
      }
   }, false)