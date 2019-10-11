export const createFavorite = favorite => {
  return $.ajax({
    method: "POST",
    url: "api/favorites",
    data: { favorite }
  });
};

export const deleteFavorite = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/favorites/${id}`
  });
};
