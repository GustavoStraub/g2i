import React, { useState, ReactNode } from "react";
import { Question } from "types";

type IProps = {
  children: ReactNode;
};

type ContextProps = {
  results: Question[];
  setResults: React.Dispatch<React.SetStateAction<Question[]>>;
};

const ResultContext = React.createContext([] as unknown as ContextProps);

const ResultProvider = (props: IProps) => {
  const [results, setResults] = useState<Question[]>([]);

  return (
    <ResultContext.Provider value={{ results, setResults }}>
      {props.children}
    </ResultContext.Provider>
  );
};

export { ResultContext, ResultProvider };
