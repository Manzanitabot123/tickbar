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
                } catch(error) { console.log(error)}
            }
            reader.readAsDataURL(file);
        }
    });
  });