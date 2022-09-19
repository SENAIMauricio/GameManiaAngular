var img1 = document.getElementById("img-pqn1");
var img2 = document.getElementById("img-pqn2");
var textoImg1 = document.getElementById("texto-img1");
var textoImg2 = document.getElementById("texto-img2");
var sectionPromocao = document.getElementById("section-promocao");
let body = document.getElementById('body');
let bodyWidth = body.offsetWidth;

function borraDesborra() {

    img1.addEventListener("mouseover", function () {
        img1.style.filter = 'blur(5px)';
        img1.style.opacity = '0.5';
        textoImg1.innerHTML = 'COMPUTADORES';
        textoImg1.style.display = 'block';
        sectionPromocao.style.top = '-100px'
    })

    img1.addEventListener("mouseout", function () {
        img1.style.filter = 'blur(0px)';
        img1.style.opacity = '1';
        textoImg1.style.display = 'none';
        sectionPromocao.style.top = '-40px'
    })

    img2.addEventListener("mouseover", function () {
        img2.style.filter = 'blur(5px)';
        img2.style.opacity = '0.5';
        textoImg2.innerHTML = 'VIDEOGAMES'
        textoImg2.style.display = 'block';
        sectionPromocao.style.top = '-100px'
    })

    img2.addEventListener("mouseout", function () {
        img2.style.filter = 'blur(0px)';
        img2.style.opacity = '1';
        textoImg2.style.display = 'none';
        sectionPromocao.style.top = '-40px'
    })
};

console.log(bodyWidth);

if (bodyWidth >= 1695) {
    borraDesborra();
}
else {
    void (0);
}



// jQuery aqui: 

// Utilizei 'click' apenas para demonstração. O correto seria algum evento de touch já que é para versão tablet e mobile.
function menuDesaparece() {
    $('main, footer').click(function () {
        $('.menu').css('display', 'none');
        $('#produtos,#section-imagens,#section-promocao,header,footer').css('filter', 'none');

    });
};

function menuAparece() {
    $('#menu').click(function () {
        $('.menu').css('display', 'flex');
        $('#produtos,#section-imagens,#section-promocao,header,footer').css('filter', 'blur(10px)');
    });
};

function barraAparece() {
    $('#buscar').click(function () {
        $('.barra-de-busca-aparece').css('display', 'block');
        $('#produtos,#section-imagens,#section-promocao,header,footer').css('filter', 'blur(10px)');
    });
};

function barraDesaparece() {
    $('main,footer').click(function () {
        $('.barra-de-busca-aparece').css('display', 'none');
        $('#produtos,#section-imagens,#section-promocao,header,footer').css('filter', 'none');
    })
}

menuAparece();
menuDesaparece();

barraAparece();
barraDesaparece();





