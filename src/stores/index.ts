import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({
  reducer: combineReducers(reducers),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
