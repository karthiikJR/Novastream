import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <div className="flex flex-row md:flex-[2] justify-end ">
      <input
        name="search"
        type="text"
        placeholder="Search"
        className=" px-4 py-2 bg-background border-dark-gray border-y-2 border-l-2  rounded-l-lg text-light w-full transition-all focus:bg-light-gray"
      />

      <button className="bg-dark-gray p-2 hover:bg-light-gray border-dark-gray border-r-2 border-y-2  transition-all overflow-hidden rounded-r-lg w-12 flex items-center justify-center md:w-24">
        <FiSearch className="text-light" />
      </button>
    </div>
  );
};

export default SearchBar;
