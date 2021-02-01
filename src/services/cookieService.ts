import { sign, verify } from 'jsonwebtoken';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
export interface IUser {
  id: number;
  name: string;
  email: string;
}
const prefix = '@ReactApp';
const secret = process.env.JWT_SECRET || 'segredo';

export const getToken = (): string | null => {
  return cookies.get(`${prefix}:token`);
};

export const removeToken = (): void => {
  cookies.remove(`${prefix}:token`);
};

export const setToken = (token: string): void => {
  cookies.set(`${prefix}:token`, token);
};

export const getUser = (): IUser => {
  const encodedUser = cookies.get(`${prefix}:user`);
  if (encodedUser) {
    const user = verify(encodedUser, secret);
    if (typeof user === 'string') {
      return JSON.parse(user);
    }
    return user as IUser;
  }
  return {} as IUser;
};

export const removeUser = (): void => {
  cookies.remove(`${prefix}:user`);
};

export const setUser = (user: IUser): void => {
  cookies.set(`${prefix}:user`, sign(user, secret));
};
