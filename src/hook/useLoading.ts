import {useContext} from 'react';
import {
  LoadingActionContext,
  LoadingValueContext,
} from '@context/LoadingContext';

export function useLoadingValue() {
  const value = useContext(LoadingValueContext);
  if (value === undefined) {
    throw new Error('[useLoadingValue] LoadingProvider가 필요합니다.');
  }

  return value;
}

export function useLoadingAction() {
  const value = useContext(LoadingActionContext);
  if (value === undefined) {
    throw new Error('[useLoadingValue] LoadingProvider가 필요합니다.');
  }
  return value;
}
