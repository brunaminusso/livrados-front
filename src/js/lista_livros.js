const livros = [
    {
        id: 1,
        titulo: '1984',
        autor: 'Autor teste',
        categoria: 'Categoria teste',
        edicao: 'Edição teste',
        editora: 'Editora xyz',
        img: '../img/1984.jpg'
    },
    {
        id: 2,
        titulo: 'Novelas nada exemplares',
        autor: 'Autor teste 2',
        categoria: 'Categoria teste 2',
        edicao: 'Edição teste 2',
        editora: 'Editora xyz 2',
        img: '../img/novelasnadaexemplares.jpg'
    },
    {
        id: 3,
        titulo: 'Crime e Castigo',
        autor: 'Autor teste 3',
        categoria: 'Categoria teste 3',
        edicao: 'Edição teste 3',
        editora: 'Editora xyz 3',
        img: '../img/crimecastigo.jpg'
    },
]

livros.forEach(el => {
    document.querySelector('#listaLivros').innerHTML += `
        <div class="row py-3">
            <div class="col-12">
                <div class="card_meus_livros">
                    <div>
                        <img class="img_card" src="${el.img}" />
                    </div>
                    <div>
                        <div class="card_titulo" id="titulo">${el.titulo}</div>
                        <p class="dados_livros">AUTOR: ${el.autor}</p>
                        <p class="dados_livros">CATEGORIA: ${el.categoria}</p>
                        <p class="dados_livros">EDIÇÃO: ${el.edicao}</p>
                        <p class="dados_livros">EDITORA: ${el.editora}</p>
                        <div class="row">
                            <button class="botao_excluir">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

