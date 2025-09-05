import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-900 p-4">
        <SearchBar />
      </div>
      <div className="bg-gray-900 flex-1">
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
