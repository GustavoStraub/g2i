import { useEffect, useState } from "react";
import { instance } from "services";
import { Result } from "types";

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    instance
      .get("?amount=10&difficulty=hard&type=boolean")
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => setError("Could not load the question, try again later."))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    questions,
    isLoading,
    error,
  };
};
