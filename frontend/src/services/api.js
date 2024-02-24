
const baseUrl = 'http://localhost:4001';

export async function search(q, type){
  const response = await fetch(`${baseUrl}/search/?type=${type}&q=${q}`);
  const data = await response.json();
  return data;
}