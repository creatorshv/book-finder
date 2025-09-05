import { useEffect } from "react";
import { useBooks } from "../components/BookContext";

export default function SearchResults() {
  const { state, dispatch } = useBooks();

  useEffect(() => {
    if (!state.query) return;

    dispatch({ type: "FETCH_START" });

    fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(state.query)}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data.docs });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  }, [state.query]);

  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {state.books.map((book) => (
        <div
          key={book.key}
          className="bg-[#393E46] p-4 rounded-lg shadow h-100 flex flex-col"
        >
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : "/placeholder.png"
            }
            alt={book.title}
            className="object-fill h-60"
          />
          <hr />
          <h2 className="font-bold text-white text-xl pt-1">{book.title}</h2>
          <p className="text-white">
            {book.author_name?.join(", ") || "Unknown Author"}
          </p>
          <p className="text-sm text-white pt-1">
            Publish Year: {book.first_publish_year || "Unknown Author"}
          </p>
        </div>
      ))}
    </div>
  );
}
