import { Character, Location } from '../types';
import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await axios.get(`${BASE_URL}/character`);
  return response.data.results;
};

export const fetchLocations = async (): Promise<Location[]> => {
  const response = await axios.get(`${BASE_URL}/location`);
  return response.data.results;
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  const response = await axios.get(`${BASE_URL}/character/${id}`);
  return response.data;
};

export const fetchLocation = async (id: number): Promise<Location> => {
  const response = await axios.get(`${BASE_URL}/location/${id}`);
  return response.data;
}