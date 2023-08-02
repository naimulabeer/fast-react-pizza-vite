import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full py-2 px-4 text-sm focus:ring-2 focus:ring-green-400 placeholder:text-slate-500
        w-28 sm:w-64 md:focus:w-72 transition-all duration-100 bg-green-100"
      />
    </form>
  );
}

export default SearchOrder;
