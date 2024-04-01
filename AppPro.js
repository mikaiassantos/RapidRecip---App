function toggleFavorite(productId) {
    var favoriteIcon = document.getElementById("favorite-icon-" + productId);
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favoriteIcon.src.includes("favorite.png")) {
        favoriteIcon.src = "assets/images/unfavorite.png";
        favorites.push(productId);
    } else {
        favoriteIcon.src = "assets/images/favorite.png";
        removeFavoriteProduct(productId); // Chamando a função removeFavoriteProduct definida em Favorite.js
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}



window.onload = function () {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(productId => {
        var favoriteIcon = document.getElementById("favorite-icon-" + productId);
        if (favoriteIcon) {
            favoriteIcon.src = "assets/images/unfavorite.png";
        }
    });
};
