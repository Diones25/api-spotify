
const baseUrl = 'http://18.228.38.54:3333';

export async function search(q, type){
  const response = await fetch(`${baseUrl}/search/?type=${type}&q=${q}`);
  const data = await response.json();
  return data;
}