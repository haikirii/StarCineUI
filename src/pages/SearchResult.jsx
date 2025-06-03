import { useSearchParams } from "react-router-dom";
import SearchResult from "../components/Search"; // ou o nome do seu componente de resultados

const Search = () => {
  const [params] = useSearchParams();
  const termo = params.get("q");

  return <SearchResult searchTerm={termo} />;
};

export default Search;
