import { createContext, useReducer, useContext } from "react";

// Initial state for reducer
const initialState = {
  query: "",
  books: [],
  loading: false,
  error: null,
};

// Reducer function
function bookReducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, books: action.payload, query: "" };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload, query: "" };
    default:
      return state;
  }
}

// Context
const BookContext = createContext();

// Provider
export function BookProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

// Custom hook
export function useBooks() {
  return useContext(BookContext);
}
