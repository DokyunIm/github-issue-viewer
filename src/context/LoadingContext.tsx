import React, {createContext, ReactNode, useMemo, useState} from 'react';

export const LoadingValueContext = createContext<boolean | undefined>(
  undefined,
);

type LoadingActionContextType =
  | {setIsLoading(nextStatus: boolean): void}
  | undefined;
export const LoadingActionContext =
  createContext<LoadingActionContextType>(undefined);

export function LoadingProvider({children}: {children: ReactNode}) {
  const [isLoading, setIsLoading] = useState(false);

  const actions = useMemo(
    () => ({
      setIsLoading(nextStatus: boolean) {
        setIsLoading(nextStatus);
      },
    }),
    [],
  );

  return (
    <LoadingActionContext.Provider value={actions}>
      <LoadingValueContext.Provider value={isLoading}>
        {children}
      </LoadingValueContext.Provider>
    </LoadingActionContext.Provider>
  );
}
