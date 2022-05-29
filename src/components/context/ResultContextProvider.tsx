import React, {
  createContext,
  SetStateAction,
  Dispatch,
  FC,
  ReactNode,
  useState,
} from "react";
import axios from "axios";

interface ContextInterface {
  getResults: (data: string) => void;
  results: object | any;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>; // It is setState type
  isLoading: boolean;
}

export const ResultContext = createContext<ContextInterface>({
  getResults: () => {},
  results: [],
  searchTerm: "",
  setSearchTerm: () => {},
  isLoading: false,
});

const url = "https://google-search3.p.rapidapi.com/api/v1";

interface Props {
  children: ReactNode;
}

const ResultContextProvider: FC<Props> = ({ children }) => {
  const [results, setResults] = useState<object>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getResults = async (type: string) => {
    setisLoading(true);
    const res = await fetch(`${url}${type}`, {
      method: "GET",

      headers: {
        "x-user-agent": "desktop",
        "x-proxy-location": "US",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "X-rapidapi-key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      },
    });
    const data = await res.json();

    if (type.includes("/news")) {
      setResults(data.entries);
    } else if (type.includes("/image")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    setisLoading(false);
  };

  const sampleAppContext: ContextInterface | null = {
    getResults,
    results,
    searchTerm,
    setSearchTerm,
    isLoading,
  };
  return (
    <ResultContext.Provider value={sampleAppContext}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
