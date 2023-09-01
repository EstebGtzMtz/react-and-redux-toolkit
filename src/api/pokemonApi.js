import axios from 'axios';

const baseURL = `https://pokeapi.co/api/v2/`

const myService = axios.create({
  baseURL
});

export const getPokemonsFromAPI = async page => {
  const {data: {results}} = await myService.get(`pokemon?limit=10&offset=${page*10}`);
  console.log(results)
  return results
}