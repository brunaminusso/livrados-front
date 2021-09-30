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

         if (jsonResult.error) {
            return Swal.fire({
               icon: "error",
               title: "Opa..",
               text: jsonResult.error,
               showConfirmButton: false,
               timer: 2000,
            });
         }

         console.log('O Resultado do backend é: ');
         console.log(jsonResult);
         
         localStorage.setItem('token', jsonResult.token);

         //localStorage.setItem('user_name', jsonResult.user);
         //localStorage.setItem('user_id', jsonResult.user._id);
         //localStorage.setItem('user_id', jsonResult.user._id);

         Swal.fire({
            icon: "success",
            /* title: "Opa..", */
            text: jsonResult.success,
            showConfirmButton: false,
            timer: 2000,
         });

         setTimeout(() => {
            window.location.replace('https://livrados.vercel.app');
         }, 15000);//2200
         
   } catch (err) {
      console.log("Erro ao acessar endpoint de login : " + err);
   }
})