// Recupera os produtos favoritos do localStorage
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Adiciona os produtos favoritos ao DOM
favorites.forEach(productId => {
    addFavoriteProductToDOM(productId);
});

function getProductById(productId) {
    // Aqui você pode implementar a lógica para recuperar o produto com base no ID
    // Por enquanto, apenas retorna um produto fictício para fins de exemplo
    var productData = {};

    // Lógica para definir o nome e o URL da imagem com base no ID
    switch (productId) {
        case 1:
            productData.name = "Esfiha";
            productData.imageUrl = "assets/images/foto(1).jpg";
            break;
        case 2:
            productData.name = "Empada";
            productData.imageUrl = "assets/images/foto22.jpg";
            break;
        case 3:
            productData.name = "Pão Pizza";
            productData.imageUrl = "assets/images/foto(3).jpg";
            break;
        case 4:
            productData.name = "Coxinha";
            productData.imageUrl = "assets/images/foto(4).jpg";
            break;
        case 5:
            productData.name = "Enrolado";
            productData.imageUrl = "assets/images/foto(5).jpg";
            break;
        // Adicione mais cases conforme necessário para outros IDs de produtos
        default:
            productData.name = "Nome do Produto Padrão";
            productData.imageUrl = "caminho/para/imagem_padrao.jpg";
            break;
    }

    return productData;
}

