import React, { FormEvent, useContext, useRef } from "react";
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ResultContext } from "../components/context/ResultContextProvider";
const Home = () => {

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const{setSearchTerm} = useContext(ResultContext)

  const search = (e:FormEvent<HTMLFormElement>) => {
e.preventDefault()
const term = searchInputRef!.current!.value
setSearchTerm(term)
navigate("/search")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer p-2" />
          <Avatar url="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" />
        </div>
      </header>
      <form onSubmit={search} className="flex flex-col items-center mt-35 flex-grow w-4/5">
        <img
          src="https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
          alt=""
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
<SearchIcon className="h-5 mr-3 text-gray-500"/>
<input ref = {searchInputRef} type="text" className="focus:outline-none flex-grow" />
<MicrophoneIcon className="h-5 cursor-pointer"/>
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-x-4 sm:flex-row sm:space-y-0">
<button className="btn">Google Search</button>
<button className="btn">I&apos;m feeling lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
