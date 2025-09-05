import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import { useBooks } from "./components/BookContext";

export default function App() {
  const { state } = useBooks();

  return (
    <div className="flex flex-col h-screen bg-[#222831]">
      <section className="bg-[#393E46]">
        <h1 className="text-center text-white text-5xl p-5">Book Finder</h1>
        <div className="p-4">
          <SearchBar />
        </div>
      </section>
      <div className="flex-1 overflow-y-auto">
        {state.loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        ) : (
          <SearchResults />
        )}
      </div>
    </div>
  );
}
