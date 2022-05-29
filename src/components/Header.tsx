import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import Avatar from "./Avatar";
import HeaderTitle from "./context/HeaderTitle";
import { ResultContext } from "./context/ResultContextProvider";

interface Props {
  selected: string;
}

const Header: FC<Props> = ({ selected }) => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(ResultContext);

  const [text, setText] = useState<string>(searchTerm);
  const [debounceValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue]);

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt=""
          width={120}
          height={40}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            placeholder="Search Google"
            value={text}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            className = "flex-grow w-full focus:outline-none "
          />
          <XIcon className="h-6 mr-3 hidden sm:inline-flex text-gray-500 pl-4 border-gray-400 cursor-pointer" onClick={() =>setText("")} />
          <MicrophoneIcon className="h-6 mr-1 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-400 cursor-pointer" />
          <SearchIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 pl-4 border-gray-400 cursor-pointer"/>
        </form>
        <Avatar url="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" className="ml-auto" />
      </div>
      <HeaderTitle selected = {selected} />
    </header>
  );
};

export default Header;
