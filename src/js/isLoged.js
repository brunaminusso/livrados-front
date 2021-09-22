const hasToken = localStorage.token ? true : false;

if (!hasToken)
   window.location.replace('https://livrados.vercel.app/view/login/');