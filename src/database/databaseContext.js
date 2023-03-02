import {createContext} from 'react';
import database from './database'


const db = new database();
export const dbContext = createContext(db);