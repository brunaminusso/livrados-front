const btnCadastrar = document.querySelector('#btn-cadastrar');

btnCadastrar.addEventListener('click', async (evt) => {

   evt.preventDefault();

   //Verificação dos campos de senha
   const txtPassword = document.querySelector('#senha').value;
   const txtPasswordConfirm = document.querySelector('#confirmSenha').value;

   if (txtPassword.length < 6 || txtPasswordConfirm.length < 6)
      return console.error('A senha deve ter pelo menos 6 caracteres')

   if (txtPassword !== txtPasswordConfirm)
      return console.error('As senhas devem ser iguais');

   //Preciso formatar o CEP para enviar ao banco sem hífen
   const  cepFormatted = document.querySelector('#cep').value.replace(/-(?!>)/g, '');
   
   const userData = {

      name: document.querySelector('#nome').value,
      email: document.querySelector('#email').value,
      password: document.querySelector('#senha').value,
      phone: document.querySelector('#celular').value,
      cep: cepFormatted,
      addressNumber: document.querySelector('#numero').value,
   };
   
   console.log(userData);

   const fetchParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ userData }),
   }

   try {
      
      const fetch = await fetch('https://localhost:3000/user-registration', fetchParams);
      const fetchRes = fetch.json();

   } catch (err) {
      console.error("Error while trying to fetch to backend: " + err);
   }
   
})

