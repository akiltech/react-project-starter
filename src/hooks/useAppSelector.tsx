import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'stores';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
