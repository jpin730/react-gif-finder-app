export const getGifs = async (category) => {
  const apiUrl = "https://api.giphy.com/v1/gifs/search";
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const limit = 12;
  const url = `${apiUrl}?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.preview_gif.url,
  }));

  return gifs;
};
