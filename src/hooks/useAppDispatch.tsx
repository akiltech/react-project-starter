import { useDispatch } from 'react-redux';

import { AppDispatch } from '&stores';

// Use throughout your app instead of plain `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();
