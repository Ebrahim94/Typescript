import { User } from './models/User';

const user = new User({ id: 1 });
user.set({ name: 'Abraham' });
user.save();