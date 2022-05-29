import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import React, { FC } from "react";
import SingleTitle from "./SingleTitle";

interface Props {
  selected: string;
}
const HeaderTitle: FC<Props> = ({ selected }) => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <SingleTitle
          Icon={SearchIcon}
          title="All"
          selected={selected === "/search"}
          link="/search"
        />
        <SingleTitle
          Icon={PhotographIcon}
          title="Images"
          selected={selected === "/image"}
          link="/image"
        />
        <SingleTitle
          Icon={PlayIcon}
          title="Videos"
          selected={selected === "/videos"}
          link="/videos"
        />
        <SingleTitle
          Icon={NewspaperIcon}
          title="News"
          selected={selected === "/news"}
          link="/news"
        />
        <SingleTitle
          Icon={MapIcon}
          title="Maps"
          selected={selected === "/maps"}
          link="/maps"
        />
        <SingleTitle
          Icon={DotsVerticalIcon}
          title="More"
          selected={selected === "/more"}
          link="/search"
        />
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderTitle;
