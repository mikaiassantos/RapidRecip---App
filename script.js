// Selecionar os elementos da interface do menu
let cartIcon = document.querySelector("#menu-icon"); // Ícone do menu
let cart = document.querySelector(".menu"); // Área do menu

// Quando o ícone do menu é clicado, mostra ou oculta o menu
cartIcon.addEventListener("click", function () {
    cart.classList.toggle("active");
});

// Quando o ícone para fechar o menu é clicado, esconde o menu
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.querySelector(".menu");

    // Adiciona um evento de clique ao ícone de seta para fechar o menu
    document.querySelector(".closed").addEventListener("click", function () {
        menu.classList.remove("active"); // Remove a classe 'active' para ocultar o menu
    });
});

// Adiciona event listeners para os botões "menu" em cada produto
document.addEventListener("DOMContentLoaded", function () {
    var addCartButtons = document.querySelectorAll('.add-menu');
    addCartButtons.forEach(button => {
        button.addEventListener("click", addCartClicked);
    });
});

// Função para o "Hover" permanecer ao ser clicado
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-op li');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Função para exibir apenas a seção selecionada e ocultar as outras
    function mostrarSecao(id) {
        // Obter todas as seções de produtos
        var secoes = document.querySelectorAll(".shop.container");
        // Iterar sobre as seções e exibir apenas a seção correspondente ao ID
        secoes.forEach(function (secao) {
            if (secao.id === id || id === "Todos") {
                secao.style.display = "block";
            } else {
                secao.style.display = "none";
            }
        });
    }

    // Adicionar eventos de clique aos links do menu
    var linksMenu = document.querySelectorAll(".container-links ul li a");
    linksMenu.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Evitar o comportamento padrão do link
            event.preventDefault();
            // Obter o ID da seção correspondente ao link clicado
            var idSecao = this.getAttribute("id");
            // Remover a classe 'active-link' de todos os links
            linksMenu.forEach(function (link) {
                link.classList.remove("active-link");
            });
            // Adicionar a classe 'active-link' apenas ao link clicado
            this.classList.add("active-link");
            // Mostrar apenas a seção correspondente ao link clicado
            mostrarSecao(idSecao);
        });
    });

    // Mostrar a seção 'Todos' por padrão ao carregar a página
    mostrarSecao("Todos");
});


const toggleIcon = document.getElementById('toggleIcon');


document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const toggleIcon = document.getElementById('toggleIcon');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    // Verificar se o tema escuro está ativado quando a página carregar
    const isDarkMode = localStorage.getItem('theme') === 'dark';

    // Função para ativar o modo escuro
    function enableDarkMode() {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark'); // Armazenar o tema selecionado
        hamburgerIcon.src = "assets/images/hamburguer-dark.png"; // Trocar a imagem do ícone de hambúrguer para o modo escuro
    }

    // Função para ativar o modo claro
    function enableLightMode() {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Armazenar o tema selecionado
        hamburgerIcon.src = "assets/images/hamburguer (1).png"; // Trocar a imagem do ícone de hambúrguer para o modo claro
    }

    // Se o tema escuro estiver ativado por padrão, atualizar o ícone para a lua
    if (isDarkMode) {
        toggleIcon.classList.remove('bxs-sun');
        toggleIcon.classList.add('bxs-moon');
        enableDarkMode();
    }

    // Adicionar evento de clique ao ícone de alternância
    toggleIcon.addEventListener('click', function () {
        const isSunIcon = this.classList.contains('bxs-sun');

        // Confirmar a mudança de tema
        const confirmChange = confirm(`Deseja mudar para o ${isSunIcon ? 'modo escuro' : 'modo claro'}?`);

        // Se o usuário clicar em OK e o ícone for o sol, ativar modo escuro
        if (confirmChange && isSunIcon) {
            this.classList.remove('bxs-sun');
            this.classList.add('bxs-moon');
            enableDarkMode();
        } 
        // Se o usuário clicar em OK e o ícone for a lua, ativar modo claro
        else if (confirmChange) {
            this.classList.remove('bxs-moon');
            this.classList.add('bxs-sun');
            enableLightMode();
        }
    });
});
