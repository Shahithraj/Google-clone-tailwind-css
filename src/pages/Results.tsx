import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ResultContext } from "../components/context/ResultContextProvider";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ReactPlayer from "react-player";

const Results = () => {
  const { isLoading, results, getResults, searchTerm } =
    useContext(ResultContext);
  const { pathname } = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (searchTerm) {
      if (pathname === "/videos") {
        setSelected(pathname);
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        setSelected(pathname);
        getResults(`${pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, pathname]);
  console.log(results);

  if (isLoading) {
    return (
      <>
        <Header selected={selected} />
        <Loading />
      </>
    );
  }

  switch (selected) {
    case "/search":
      return (
        <>
          <Header selected={selected} />
          <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
            {results?.map(
              ({ link, title, description }: any, index: string) => (
                <div key={index} className="max-w-xl mb-8">
                  <div className="group">
                    <a
                      href={link}
                      className="text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.length > 50 ? link.substring(0, 50) : link}
                    </a>
                    <a
                      href={link}
                      className="text-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h2 className="text-blue-800 truncate text-xl font-medium group-hover:underline">
                        {title}
                      </h2>
                    </a>
                  </div>
                  <p className="line-clamp-2">{description}</p>
                </div>
              )
            )}
          </div>
        </>
      );
    case "/image":
      return (
        <>
          <Header selected={selected} />
          <div className="flex flex-wrap justify-center items-center">
            {results?.map(
              ({ image, link: { href, title } }: any, index: any) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:p-3 p-5"
                >
                  <img src={image?.src} alt={title} loading="lazy" />
                  <p className="w-36 break-words text-sm mt-2">{title}</p>
                </a>
              )
            )}
          </div>
        </>
      );
    case "/news":
      return (
        <>
          <Header selected={selected} />
          <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56 mb-10">
            {results?.map(({ links, id, source, title }: any, index: any) => (
              <div key={id} className="md:w-2/5 w-full">
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-blue-800 text-lg">{title}</p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      );
      case "/videos":
      return (
        <>
          <Header selected={selected} />
          <div className="flex flex-wrap w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52 mt-5">
            {results?.map(
              (video: any, index: any) => (
                <div className="p-2" key={index}>
                  <ReactPlayer url={video.additional_links?.[0].href} controls width="350px" height="250px" />
                </div>
              )
            )}
          </div>
        </>
      );
    default:
      return <h1>Error</h1>;
  }
};

export default Results;
