(function() {

// Basic mobile detection regex

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

window.location.href = "/mobile.html";

}

// Fallback: Check screen width

if(window.innerWidth <= 768) {

window.location.href = "/mobile.html";

}

})();
