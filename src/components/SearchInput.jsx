import React, { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="w-full h-[10vh] flex bg-zinc-400">
      <form
        onSubmit={searchHandler}
        className="w-full flex items-center gap-2 px-2"
      >
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="search . . ."
          className="w-full px-2 py-2 rounded-md border border-zinc-600 outline-none text-lg"
        />
        <button className="hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-md bg-zinc-600">
          <i className="ri-search-line text-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
