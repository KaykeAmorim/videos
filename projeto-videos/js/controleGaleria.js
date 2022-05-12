window.onload=function(){

    //Declaração do array videos com 3 posições: 0=título; 1=imagem; 2=resenha; 3=categoria; 4=ano
    var videos=[
        ["Mick","mick.jpg","Mick Jagger não exagera ao afirmar que se escrevesse sobre sua vida “em todos os detalhes, as pessoas ficariam aterrorizadas”. Nesta biografia do líder dos Rolling Stones, o jornalista americano Christopher Andersen não poupa fãs e leitores dos detalhes polêmicos e nada glamourosos da trajetória artística e pessoal de um dos astros mais originais do rock contemporâneo.","Biografias",2012],
        ["Quem somos nós","quem-somos-nos.jpg","De que são feitos o pensamento e a realidade? E como um pensamento muda a natureza da realidade? Este livro conduz por meio da ciência para dentro de um universo que é mais vivo do que se pode imaginar - a fronteira final do conhecimento científico sobre a consciência a percepção a química do corpo e a estrutura cerebral. Uma obra sobre física quântica espiritualidade e o significado da vida.","Física Quântica",2010],
        ["A cura quântica","cura-quantica.jpg","Há uma abordagem da medicina na qual a mente, a consciência e a inteligência ocupam papéis principais. Segundo essa vertente, as doenças ocorrem quando nosso corpo vital está ferido.","Física Quântica",2019],
        ["O Pequeno Príncipe","pequeno-principe.jpg","Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952.","Infantil",1960],
        ["Mick","mick.jpg","Mick Jagger não exagera ao afirmar que se escrevesse sobre sua vida “em todos os detalhes, as pessoas ficariam aterrorizadas”. Nesta biografia do líder dos Rolling Stones, o jornalista americano Christopher Andersen não poupa fãs e leitores dos detalhes polêmicos e nada glamourosos da trajetória artística e pessoal de um dos astros mais originais do rock contemporâneo.","Biografias",2012],
        ["Quem somos nós","quem-somos-nos.jpg","De que são feitos o pensamento e a realidade? E como um pensamento muda a natureza da realidade? Este livro conduz por meio da ciência para dentro de um universo que é mais vivo do que se pode imaginar - a fronteira final do conhecimento científico sobre a consciência a percepção a química do corpo e a estrutura cerebral. Uma obra sobre física quântica espiritualidade e o significado da vida.","Física Quântica",2010]
    ]

    // Galeria faz acesso ao elemento html div com id=galeria
    var galeria=document.querySelector("#galeria")
    // Lógica de iteração para o consumo do array
    for(var i=0; i<videos.length; i++){
        // Início da div principal
        
        // Cria um elemento div
        var div=document.createElement('div');
        // Adiciona a classe com espaço 4
        div.setAttribute("class","mt-2 col-sm-4")
        // Cria um elemnto div par o conteudo
        // Define como linha para inserir as colunas abaixo
        div.innerHTML+='<a href="docs/singleProduto.html"><img src="imagens/' + videos[i][1] + '" class="w-100" /></a>'

        // Div recebe conteúdo
        // Galeria recebe div
        galeria.appendChild(div)
    }
}