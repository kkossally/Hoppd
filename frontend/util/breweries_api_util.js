export const fetchBreweries = () => {
  return $.ajax({
    method: "GET",
    url: "api/breweries"
  });
};