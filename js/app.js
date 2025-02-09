
// Confirmar si podemos usar el service worker
if (navigator.serviceWorker){
    navigator.serviceWorker.register('/service-worker/sw.js')
        .then(reg => { 
            setTimeout(() => {
                reg.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatitos al server');
            }, 3000);
        })
}

// fetch('https://reqres.in/api/users')
//     .then(resp => resp.text())
//     .then(console.log);