
const baseUrl = 'https://back-end-spotify-1.onrender.com/';

export async function search(q, type){
  const response = await fetch(`${baseUrl}/search/?type=${type}&q=${q}`);
  const data = await response.json();
  return data;
}