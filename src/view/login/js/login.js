const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', async (evt) => {

   evt.preventDefault();

   const requestDetails = {
      method: 'POST',
      body: JSON.stringify({
         email: email.value,
         password: password.value
      }),
      headers: { 'Content-Type': 'application/json'},
   }

   try {
      const result = await fetch('http://localhost:3000/login', requestDetails);
      const jsonResult = await result.json();

         if (jsonResult.error)
            return window.alert(jsonResult.error);

         localStorage.setItem('token', jsonResult.token);

         window.alert(jsonResult.success);
         window.location.replace('https://livrados.vercel.app');
         
   } catch (err) {
      console.log("Erro ao acessar endpoint de login : " + err);
   }
})