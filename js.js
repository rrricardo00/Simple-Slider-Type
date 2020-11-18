document.querySelectorAll('.item')[0].classList.add('active');

var i = 0;

function avancar(){
    document.querySelectorAll('.item')[i].classList.remove('active');
    i = (i + 1) % (document.querySelectorAll('.item').length);
    document.querySelectorAll('.item')[i].classList.add('active');

}

function voltar(){
    document.querySelectorAll('.item')[i].classList.remove('active');
    i = (i - 1 + document.querySelectorAll('.item').length) % (document.querySelectorAll('.item').length);
    document.querySelectorAll('.item')[i].classList.add('active');

}