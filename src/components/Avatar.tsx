import React, { FC } from "react";

interface Props {
  url: string;
  className?: string;
}

const Avatar: FC<Props> = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 object-cover ${className}`}
      src={url}
      alt="profilePic"
    />
  );
};

export default Avatar;
