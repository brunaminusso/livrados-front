
//Variaveis --------------------------------------------
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let isbn = document.querySelector('#isbn')
let labelIsbn = document.querySelector('#labelIsbn')
let validIsbn = false

let titulo = document.querySelector('#titulo')
let labelTitulo = document.querySelector('#labelTitulo')
let validTitulo = false

let autor = document.querySelector('#autor')
let labelAutor = document.querySelector('#labelAutor')
let validAutor = false

let edicao = document.querySelector('#edicao')
let labelEdicao = document.querySelector('#labelEdicao')
let validEdicao = false

let editora = document.querySelector('#editora')
let labelEditora = document.querySelector('#labelEditora')
let validEditora = false

let idioma = document.querySelector('#idioma')
let labelIdioma = document.querySelector('#labelIdioma')
let validIdioma = false

let categoria = document.querySelector('#categoria')
let labelCategoria = document.querySelector('#labelCategoria')
let validCategoria = false


let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

//Funções --------------------------------------------
function cadastrar(){
  if(validIsbn && validTitulo && validAutor && validEdicao && validCep && validEditora && validIdioma && validAcabamento){
    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = '<strong>Cadastrando livro...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente!</strong>'
    msgSucess.setAttribute('style', 'display: none')
    msgSucess.innerHTML = ''
  }
}


//Eventos --------------------------------------------

//Validação - ISBN
isbn.addEventListener('keyup', () => {
  if(isbn.value.length <=12){
    labelIsbn.setAttribute('style', 'color: red')
    labelIsbn.innerHTML = 'ISBN *Insira um ISBN válido'
    isbn.setAttribute('style', 'border-color: red')
    validIsbn = false
	titulo.value = ''
	autor.value = ''
	edicao.value = ''
	editora.value = ''
	idioma.value = ''
	categoria.value = ''
  } else {
    validIsbn = true
    labelIsbn.setAttribute('style', 'color: green')
    labelIsbn.innerHTML = 'ISBN'
    isbn.setAttribute('style', 'border-color: green') 
	
	   const isbnCode = lblIsbn.value;
   fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnCode}&key=${key}`
   )
      .then((response) => response.json())
      .then((ISBN) => {
         lblTitulo.value = ISBN.items[0].volumeInfo.title;
         lblAutor.value = ISBN.items[0].volumeInfo.authors;
         lblCategoria.value = ISBN.items[0].volumeInfo.categories;
         lblEdicao.value = ISBN.items[0].volumeInfo.publishedDate;
         lblEditora.value = ISBN.items[0].volumeInfo.publisher;
         lblIdioma.value = ISBN.items[0].volumeInfo.language;
         console.log(ISBN.items[0].volumeInfo);
      });
	

  }
})
//Validação - Título
titulo.addEventListener('keyup', () => {
  if(titulo.value.length <=2){
    labelTitulo.setAttribute('style', 'color: red')
    labelTitulo.innerHTML = 'Título *Insira um título válido'
    titulo.setAttribute('style', 'border-color: red')
    validTitulo = false
  } else {
    validTitulo = true
    labelTitulo.setAttribute('style', 'color: green')
    labelTitulo.innerHTML = 'Título'
    titulo.setAttribute('style', 'border-color: green')   
  }
})


//Validação - Autor
autor.addEventListener('keyup', () => {
  if(autor.value.length <=3){
    labelAutor.setAttribute('style', 'color: red')
    labelAutor.innerHTML = 'Autor *Insira um Autor válido'
    autor.setAttribute('style', 'border-color: red')
    validAutor = false
  } else {
    validAutor = true
    labelAutor.setAttribute('style', 'color: green')
    labelAutor.innerHTML = 'Autor'
    autor.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Edicao
edicao.addEventListener('keyup', () => {
  if(edicao.value.length <=1){
    labelEdicao.setAttribute('style', 'color: red')
    labelEdicao.innerHTML = 'Edição *Insira uma Edição válida'
    edicao.setAttribute('style', 'border-color: red')
    validEdicao = false
  } else {
    validEdicao = true
    labelEdicao.setAttribute('style', 'color: green')
    labelEdicao.innerHTML = 'Edição'
    edicao.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Editora
editora.addEventListener('keyup', () => {
  if(editora.value.length <=3 || editora.value == "undefined"){
    labelEditora.setAttribute('style', 'color: red')
    labelEditora.innerHTML = 'Editora *Insira uma Editora válida'
    editora.setAttribute('style', 'border-color: red')
    validEditora = false
  } else {
    validEditora = true
    labelEditora.setAttribute('style', 'color: green')
    labelEditora.innerHTML = 'Editora'
    editora.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Idioma
idioma.addEventListener('keyup', () => {
  if(idioma.value.length <=4){
    labelIdioma.setAttribute('style', 'color: red')
    labelIdioma.innerHTML = 'Idioma *Insira um Idioma válida'
    idioma.setAttribute('style', 'border-color: red')
    validIdioma = false
  } else {
    validIdioma = true
    labelIdioma.setAttribute('style', 'color: green')
    labelIdioma.innerHTML = 'Idioma'
    idioma.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Categoria
categoria.addEventListener('keyup', () => {
  if(categoria.value.length <=3){
    labelCategoria.setAttribute('style', 'color: red')
    labelCategoria.innerHTML = 'Categoria *Insira uma Categoria válida'
    categoria.setAttribute('style', 'border-color: red')
    validCategoria = false
  } else {
    validCategoria = true
    labelCategoria.setAttribute('style', 'color: green')
    labelCategoria.innerHTML = 'Categoria'
    categoria.setAttribute('style', 'border-color: green')   
  }
})




//API ISBN
const btnIsbn = document.querySelector(".icone");
const key = "AIzaSyAbrR1prX3n0OLB1HKS2TvwpB6hnwUljNM";

const lblIsbn = document.querySelector("#isbn");
const lblTitulo = document.querySelector("#titulo");
const lblAutor = document.querySelector("#autor");
const lblCategoria = document.querySelector("#categoria");
const lblEdicao = document.querySelector("#edicao");
const lblEditora = document.querySelector("#editora");
const lblIdioma = document.querySelector("#idioma");



