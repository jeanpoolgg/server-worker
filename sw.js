self.addEventListener("fetch", (event) => {
    
    const resp = fetch(event.request)
        .then( resp => {
            return resp.ok ? resp : fetch("img/tec.avif");
        });

        event.respondWith(resp);
    
});
