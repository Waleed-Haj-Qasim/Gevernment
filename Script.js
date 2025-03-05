setInterval(() => {
  var timer = document.getElementById("time")
  timer.innerHTML = new Date().toLocaleTimeString()
}, 1000);
