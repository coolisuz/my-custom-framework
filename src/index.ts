import { User } from './models/User';
import axios, { AxiosResponse } from 'axios';

const user = new User({ id: 1 });
user.set({ name: 'Saidjamol', age: 24 });
user.save();
