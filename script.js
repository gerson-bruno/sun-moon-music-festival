const artistas = [
    {
        nome: "City and Colour",
        estilo: "Rock Indie",
        horario: "17:00",
        imagem: "img/city-and-colour.png"
    },
    {
        nome: "The Paper Kites",
        estilo: "Indie",
        horario: "18:30",
        imagem: "img/The-Paper-Kites.jpg"
    },
    {
        nome: "Hollow Coves",
        estilo: "Indie",
        horario: "20:00",
        imagem: "img/hollow-coves.png"
    },
    {
        nome: "Gregory Alan Isakov",
        estilo: "Indie",
        horario: "21:30",
        imagem: "img/Gregory-Alan-Isakov.jpg"
    },
    {
        nome: "David McCredie",
        estilo: "Indie",
        horario: "23:00",
        imagem: "img/david-mccredie.jpg"
    },
    {
        nome: "The Nacional Forest",
        estilo: "Indie",
        horario: "00:30",
        imagem: "img/the-nacional-forest.jpg"
    }
];

const container = document.querySelector('#container-bandas');
function renderizarLineup() {
    container.innerHTML = "";
    artistas.forEach((artista, index) => {
        const card = `
            <div class="card-banda hidden" style="transition-delay: ${index * 100}ms">
                <img src="${artista.imagem}" alt="${artista.nome}">
                <h3>${artista.nome}</h3>
                <p>${artista.estilo}</p>
                <span>${artista.horario}</span>
            </div>
        `;
        container.innerHTML += card;
    });
}
renderizarLineup();

// Comprar Ingressos via WhatsApp
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-comprar')) {
        const card = event.target.closest('.card-ticket');
        const tipoIngresso = card.querySelector('h3').innerText;

        const mensagem = `Olá! Tenho interesse no ingresso tipo: ${tipoIngresso}`;
        const fone = "5516999999999";

        window.open(`https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`, '_blank');
    }
});


// Ano no Footer
document.getElementById("year").textContent = new Date().getFullYear();

// NavBar animada com Scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer 
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.id === 'container-bandas') {
                const bandas = entry.target.querySelectorAll('.card-banda');
                bandas.forEach(banda => banda.classList.add('show'));
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
observer.observe(container);