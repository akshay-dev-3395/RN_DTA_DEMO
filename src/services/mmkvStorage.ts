import {MMKV} from 'react-native-mmkv';
import type {StorageValue, PersistStorage} from 'zustand/middleware';

const mmkv = new MMKV();

export const createMMKVStorage = <T>(): PersistStorage<T> => ({
  setItem: (name: string, value: StorageValue<T>) => {
    mmkv.set(name, JSON.stringify(value));
  },
  getItem: (name: string): StorageValue<T> | null => {
    const value = mmkv.getString(name);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (name: string) => {
    mmkv.delete(name);
  },
});
