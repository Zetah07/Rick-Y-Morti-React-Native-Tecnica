import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://rickandmortyapi.com/api/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response: AxiosResponse = await api.get('character');
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  try {
    const response: AxiosResponse = await api.get(`character/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as Character;
  }
};

export const fetchEpisodes = async (): Promise<Episode[]> => {
  try {
    const response: AxiosResponse = await api.get('episode');
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchEpisodeById = async (id: number): Promise<Episode> => {
  try {
    const response: AxiosResponse = await api.get(`episode/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {} as Episode;
  }
};