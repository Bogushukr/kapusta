import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import expensesReducer from './Reducers/expenseReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reportReducer } from "./report";
import { authReducer } from "./auth";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// const store = configureStore({
//    reducer: {expenses: expensesReducer}
//})

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    report: reportReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
