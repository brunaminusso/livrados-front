const btnCadastrar = document.querySelector('#btn-cadastrar');

btnCadastrar.addEventListener('click', async (evt) => {

    evt.preventDefault();

    if (!validateAllFields())
        return console.error('Os campos devem ser preenchidos corretamente');

    const userData = {
        title: document.querySelector('#titulo').value,
        isbn: document.querySelector('#isbn').value,
        author: document.querySelector('#autor').value,
        edition: document.querySelector('#edicao').value,
        publisher: document.querySelector('#editora').value,
        language: document.querySelector('#idioma').value,
        category: document.querySelector('#categoria').value,
        user_name: localStorage.getItem('user_name'),
        user_id: localStorage.getItem('user_id'),
        user_phone: localStorage.getItem('user_phone'),
        user_cep: localStorage.getItem('user_cep'),
        user_addressNumber: localStorage.getItem('user_addressNumber')
    };

    const fetchParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userData   
        })
    };

    try {
        const fetching = await fetch('https://livrados-backend.herokuapp.com/book-registration', fetchParams);
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
            text: fetchRes.book.title + ' cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 3000,
         });

         setTimeout(() => {
            window.location.replace('https://livrados.vercel.app/view/cadastrar_livro/');
         }, 3200);

    } catch (err) {
        console.error("Erro ao tentar executar o fetch de cadastro do livro do usuário: " + err);
    }
});

function validateAllFields() {

    const txtIsbn = document.querySelector('#isbn').value;
    const txtTitulo = document.querySelector('#titulo').value;
    const storage_userName = localStorage.getItem('user_name');
    const storage_userId = localStorage.getItem('user_id');
    const storage_userPhone = localStorage.getItem('user_phone');
    const storage_userCep = localStorage.getItem('user_cep');
    const storage_userAddressNumber = localStorage.getItem('user_addressNumber');

    if ( txtIsbn==='' || txtTitulo==='' || storage_userName==='' || storage_userId==='' || storage_userPhone==='' || storage_userCep==='' || storage_userAddressNumber==='' )
        return false;

    return true;
}