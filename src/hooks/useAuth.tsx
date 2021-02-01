/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import * as cookies from '../services/cookieService';
import { IUser } from '../services/cookieService';

interface AuthState {
  token: string;
  user: IUser;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: IUser): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = cookies.getToken();
    const user = cookies.getUser();

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user };
    }

    return {} as AuthState;
  });

  const updateUser = useCallback(
    async (user: IUser) => {
      setData({ token: data.token, user });
      cookies.removeUser();
      cookies.setUser(user);
    },
    [data.token],
  );

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.authorization = `Bearer ${token}`;

    cookies.setToken(token);
    cookies.setUser(user);

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    cookies.removeToken();
    cookies.removeUser();

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
