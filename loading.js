document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    loader.classList.toggle("fade")
    setTimeout(() => { document.querySelector("#loader").style.display = "none" }, 500)
    document.querySelector("body").style.visibility = "visible"
  }
};