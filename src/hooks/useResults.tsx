import { ResultContext } from "providers/ResultContext";
import { useContext } from "react";

type Question = {
  question: string;
  correctAnswer: boolean;
};

export const useResults = () => {
  const { results, setResults } = useContext(ResultContext);

  const insertResult = (result: Question) => setResults([...results, result]);

  const resetResults = () => setResults([]);

  const rightAnswers = results.filter(result => result.correctAnswer === true).length

  return {
    results,
    insertResult,
    resetResults,
    rightAnswers,
    totalItems: results?.length,
  };
};
