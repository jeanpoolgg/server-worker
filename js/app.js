
// Confirmar si podemos usar el service worker
if (navigator.serviceWorker){
    navigator.serviceWorker.register('/service-worker/sw.js')
        .then(reg => { 
            Notification.requestPermission().then(result => {   
                reg.showNotification('Hola Mundo');
            });
        })
}

// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text())
//     .then(console.log);