self.addEventListener("fetch", (event) => {
    
    if( event.request.url.includes("tec.avif") ){
        let resp = fetch("img/gon.png");
        event.respondWith( resp );
    }
});
