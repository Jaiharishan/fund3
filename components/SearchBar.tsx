import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import FilterIcon from "./FilterIcon";
import Filter from "./Filter";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");

  // search for the query
  const handleSearch = () => {
    console.log("ok!");
  };
  return (
    <>
      <Text
        fontSize="6xl"
        fontWeight={"bold"}
        className={"w-full md:w-1/2 text-center capitalize mb-8 mt-10"}
      >
        <span className="text-green-500">Explore</span> various fundings across
        the globe
      </Text>
      <div className="w-full flex gap-3 justify-center items-center mb-10 mx-2">
        <Filter />

        <input
          className="outline-none bg-transparent border-2 border-gray-600 rounded-full px-5 py-3 m-2 text-lg w-full md:w-2/3 lg:w-1/2 hover:border-green-400 focus:border-green-400 transition duration-200"
          placeholder="Type here to search"
          type={"text"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className="rounded-full bg-gray-700 border-none p-4 flex items-center justify-center hover:bg-green-600 transition duration-200 cursor-pointer"
          onClick={handleSearch}
        >
          <SearchIcon fontSize={"xl"} />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
