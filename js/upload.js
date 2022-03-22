window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onloadend = function() {
                document.getElementById('wallpaper').src = reader.result;
                document.getElementById('wallpaperurl').href = reader.result;
                try{
                    var value = reader.result;
                    chrome.storage.sync.set({'wallpaper2': value});
                } catch(error) { console.log(error)};
                chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, reader.result)
                  })
            }
            reader.readAsDataURL(file);
        }
    });
  });