//notification
if ('Notification' in window) {
    Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
            alert("Notifikasi di izinkan");
        } else if (permission === 'denied') {
            alert("Notifikasi di Blokir");
        } else if (permission === 'default') {
            console.log("Pengguna Menutup Dialog Izin");
        }
    });
  } else {
    alert("Web Browser Not Support")
  }

// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("/service-worker.js")
        .then(function() {
            console.log("Pendaftaran ServiceWorker berhasil");
        })
        .catch(function() {
            console.log("Pendaftaran ServiceWorker gagal");
        });
    });
    } else {
    console.log("ServiceWorker belum didukung browser ini.");
}