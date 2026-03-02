let indexAtual = 0;

function moverCarrossel(direcao) {
    const track = document.getElementById('track');
    const itens = document.querySelectorAll('.carrossel-item');
    
    if (!track || itens.length === 0) return; 

    const videos = document.querySelectorAll('.carrossel-item video');
    videos.forEach(function(video) {
        video.pause(); 
    });
    
    const totalItens = itens.length;
    indexAtual = indexAtual + direcao;

    if (indexAtual >= totalItens) {
        indexAtual = 0;
    } else if (indexAtual < 0) {
        indexAtual = totalItens - 1;
    }

    const deslocamento = -indexAtual * 100;
    track.style.transform = `translateX(${deslocamento}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const iconeMenu = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            iconeMenu.classList.remove('fa-bars');
            iconeMenu.classList.add('fa-xmark');
        } else {
            iconeMenu.classList.remove('fa-xmark');
            iconeMenu.classList.add('fa-bars');
        }
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            iconeMenu.classList.remove('fa-xmark');
            iconeMenu.classList.add('fa-bars');
        });
    });
});