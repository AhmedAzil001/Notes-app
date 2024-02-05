import { configureStore } from "@reduxjs/toolkit"
import { noteReducer } from "./reducer";
import storage from 'redux-persist/lib/storage'
import {  persistReducer, } from 'redux-persist'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig= {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,noteReducer)

const store= configureStore({
    reducer:{
        takeNote:persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store;