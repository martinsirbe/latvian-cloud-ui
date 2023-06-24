import { useQuery } from 'react-query';
import jokes from '../../assets/jokes.json';

export const useJokes = () => useQuery('jokes', () => Promise.resolve(jokes));