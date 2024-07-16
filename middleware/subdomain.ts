export default defineNuxtRouteMiddleware((to, from) => {
  const hostname = import.meta.server 
    ? useRequestHeaders().host 
    : window.location.hostname;
  
  if (hostname === 'test.sulfikaralijun.my.id') {
    // Redirect ke halaman subdomain
    if (!to.path.startsWith('/test')) {
      return navigateTo('/test' + to.path);
    }
  } else {
    // Redirect dari halaman subdomain ke halaman utama jika bukan di subdomain
    if (to.path.startsWith('/test')) {
      return navigateTo(to.path.substring(5) || '/');
    }
  }
});