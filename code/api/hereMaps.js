export async function request__get_coordinates_from_search(query) {
  const r = 150 * 1000;
  try {
    if (query) {
      const response = await fetch(
        `https://places.ls.hereapi.com/places/v1/browse?apiKey=${process.env.TILES_API_KEY}&in=46.31,11.26;r=${r}&q=${query}`,
        {
          method: "GET",
          headers: new Headers({
            Accept: "application/json",
          }),
        }
      );
      const data = await response.json();
      this.hereMapsPlacesFound = data.results.items;
      console.log(this.hereMapsPlacesFound);
    }
  } catch (error) {
    this.hereMapsPlacesFound = [];
  }
}