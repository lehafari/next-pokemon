const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((fav) => fav !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export default { toggleFavorite };
