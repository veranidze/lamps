// Пустой сервис-воркер для соответствия стандартам PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаем запросы
});