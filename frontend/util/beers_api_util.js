export const fetchBeers = () => {
  return $.ajax({
    method: "GET",
    url: "api/beers",
  });
}

export const fetchBeer = id => {
  return $.ajax({
    method: "GET",
    url: `api/beers/${id}`
  });
}

export const createBeer = beer => {
  return $.ajax({
    method: "POST",
    url: "api/beers",
    data: { beer }
  });
}

export const updateBeer = beer => {
  return $.ajax({
    method: "PATCH",
    url: `api/beers/${beer.id}`,
    data: { beer }
  });
}

export const deleteBeer = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/beers/${id}`,
  });
}