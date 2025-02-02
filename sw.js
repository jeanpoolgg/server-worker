self.addEventListener("fetch", (event) => {
    if( event.request.url.includes('.avif')){
        // let fotoRequest = fetch('/server-worker/img/tec.avif');
        // let fotoRequest = fetch(event.request.url);
        let fotoRequest = fetch(event.request);
        event.respondWith(fotoRequest);
    }
});
