declare const useSelector: <V extends any, S extends Record<string, any>>(selector: (state: S) => V) => V;
export default useSelector;
