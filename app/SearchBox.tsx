"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      className="max-w-4xl mx-auto flex justify-between px-5 items-center"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        value={input}
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex 1 bg-transparent dark:text-orange-400"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-500 disabled:text-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
