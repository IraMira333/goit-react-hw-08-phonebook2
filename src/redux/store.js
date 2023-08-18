import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSliceReducer } from './auth';
import { contactsReducer, filterReducer } from './contacts';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSliceReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
