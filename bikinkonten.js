self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("simpeltoko-v1").then(cache => {
      return cache.addAll([
        "/",
        "/?m=1",  // versi mobile
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgopL24auHdv-V4OLM6wAWO1iFEeSmxzAGH1Dh_s3fmo6G6Szf3yINXirv-okTZStamKvpwuZE0vnWvpT9fc6nO4pVCbgVT3hLFMwBk46ZjxB65zuMc5AC3aycM65wsuyuouGw8QxEHakwUo10deyV6UwjxhfQ6n0BuHKtWHcTxphrheDxwjqQqBdlODA4d/s16000/AI%20SCRIPT%20GENERATOR%20512x512.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

