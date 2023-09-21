import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async () => {
  let allCharacters = [];
  let page = 1;
  let response;

  do {
    try {
      response = await axios.get(`${BASE_URL}/character?page=${page}`);
      allCharacters = allCharacters.concat(response.data.results);
      page++;
    } catch (error) {
      console.error(error);
      break;
    }
  } while (response.data.info.next);

  return allCharacters;
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};