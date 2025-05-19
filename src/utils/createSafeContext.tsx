import { createContext, useContext } from "react";

/**
 * Creates a context with safety checks to ensure it's used correctly.
 *
 * @template T
 * @param {string} errorMessage - Error message to display when the context is used outside of its provider.
 * @returns {[React.FC<{ value: T, children: React.ReactNode }>, () => T]} - A tuple containing the Provider component and the safe context hook.
 */
export function createSafeContext<T>(errorMessage: string) {
  const Context = createContext(null);

  /**
   * Hook to access the context value safely.
   * Throws an error if accessed outside of the Provider.
   *
   * @returns {T} - The context value.
   * @throws {Error} - If used outside of the Provider.
   */
  const useSafeContext = () => {
    const ctx = useContext(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };

  /**
   * Context Provider component.
   */
  const Provider: React.FC<{ value: any; children: React.ReactNode }> = ({ children, value }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useSafeContext];
}
