const btnCadastrar = document.querySelector('#btn-cadastrar');

function validateAllFields () {

   const txtNome = document.querySelector('#nome').value;
   const txtCelular = document.querySelector('#celular').value;
   const txtEmail = document.querySelector('#email').value;
   const txtCep = document.querySelector('#cep').value;
   const txtEndereco = document.querySelector('#endereco').value;
   const txtNumero = document.querySelector('#numero').value;
   const txtBairro = document.querySelector('#bairro').value;
   const txtCidade = document.querySelector('#cidade').value;
   const txtEstado = document.querySelector('#estado').value;

   if ( txtNome !== '' && txtCelular !== '' && txtEmail !== '' &&
      txtCep !== '' && txtEndereco !== '' && txtNumero !== '' &&
      txtBairro !== '' && txtCidade !== '' && txtEstado !== '' ){
         return true;
      }

   return false;
}

function validatePassword () {

   const txtPassword = document.querySelector('#senha').value;
   const txtPasswordConfirm = document.querySelector('#confirmSenha').value;

   if (txtPassword.length < 6 || txtPasswordConfirm.length < 6)
      return false;

   if (txtPassword !== txtPasswordConfirm)
      return false;

   return true;
}

btnCadastrar.addEventListener('click', async (evt) => {

   evt.preventDefault();

   if (validatePassword() && validateAllFields()){

      //Formatação do campo CEP para retirar o hífen antes de enviar ao backend 
      const cepFormatted = document.querySelector('#cep').value.replace(/-(?!>)/g, '');
      const phoneFormatted = document.querySelector('#celular').value.replace(/[^\d]+/g,'');

      
      const userData = {

         name: document.querySelector('#nome').value,
         email: document.querySelector('#email').value,
         password: document.querySelector('#senha').value,
         phone: phoneFormatted,
         cep: cepFormatted,
         addressNumber: document.querySelector('#numero').value,
      };

      const fetchParams = {
         method: 'POST',
         headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ userData }),
      }

      try {

         console.log(fetchParams)
         
         const fetching = await fetch('https://livrados-backend.herokuapp.com/user-registration', fetchParams);
         const fetchRes = await fetching.json();

         if (fetchRes.error) {
            return Swal.fire({
               icon: "error",
               title: "Opa..",
               text: fetchRes.error,
               showConfirmButton: false,
               timer: 2000,
            });
         }

         Swal.fire({
            icon: "success",
            text: fetchRes.user.name + ', conta cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 2000,
         });

         setTimeout(() => {
            window.location.replace('https://livrados.vercel.app/view/login/');
         }, 2200);

      } catch (err) {
         console.error("Error while trying to fetch to backend: " + err );
      }
   }

   else{
      console.error('Passwords do not match or blank fields');
   }
   
})

