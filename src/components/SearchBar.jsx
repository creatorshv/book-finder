import { useState } from "react";
import { useBooks } from "../components/BookContext";

const SearchBar = () => {
  const [bookTitle, setBookTitle] = useState("");
  const { dispatch } = useBooks();

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query dispatched");
    dispatch({ type: "SET_QUERY", payload: bookTitle });
  };

  return (
    <form className="max-w-xl w-full mx-auto" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-amber-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-md text-white border border-[#00ADB5] rounded-lg 
                     bg-[#393E46]"
          placeholder="Search books"
          value={bookTitle}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.75 bg-[#00ADB5] hover:bg-[#16C7CF]
                     focus:ring-2 focus:outline-none focus:ring-[#00ADB5] font-medium 
                     rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
