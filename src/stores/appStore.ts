import {createMMKVStorage} from '@app/services/mmkvStorage';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type AppStateType = {
  isOnboard: boolean;
};

const useAppStore = create<AppStateType>()(
  persist(
    set => ({
      isOnboard: false,
      setOnboard: (payload: boolean) => set({isOnboard: payload}),
    }),
    {
      name: 'app-storage',
      storage: createMMKVStorage<AppStateType>(),
    },
  ),
);

export default useAppStore;
