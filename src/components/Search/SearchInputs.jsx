/* eslint-disable react/prop-types */
import { FiSearch } from "react-icons/fi";
// import { FaAccusoft } from "react-icons/fa";

const SearchInputs = ({ searchValue, setSearchValue }) => {
  return (
    <form action="" className="flex flex-row items-center border">
      <input
        type="text"
        className="form-input w-full outline-none border-none  first-line:"
        value={searchValue}
        placeholder="What do you want to watch?"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" className="border p-2 bg-black">
        {" "}
        <FiSearch color="#fff" size={25} />
      </button>
    </form>
  );
};

export default SearchInputs;
