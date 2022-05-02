import { useState } from "react";
import { useResults } from "hooks/useResults";
import { useRouter } from "next/router";
import { Wrapper } from "components/Wrapper";
import { Button, QuestionWrapper } from "./styles";
import { useQuestions } from "hooks/useQuestions";

export function Question() {
  const { push } = useRouter();
  const { isLoading, error, questions } = useQuestions();
  const { insertResult } = useResults();

  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = questions[questionNumber];
  function handleQuestionChange() {
    if (questionNumber + 1 === questions.length) {
      push("/result");
    } else {
      setQuestionNumber((prev) => prev + 1);
    }
  }

  function handleAnswer(answer: string) {
    handleQuestionChange();

    insertResult({
      correctAnswer: answer === currentQuestion.correct_answer,
      question: currentQuestion.question,
    });
  }

  if (error) return <p>{error}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <Wrapper>
      <h2>{currentQuestion?.category}</h2>
      <QuestionWrapper>
        <p>{currentQuestion?.question}</p>
      </QuestionWrapper>

      <Button onClick={() => handleAnswer("True")}>True</Button>
      <Button onClick={() => handleAnswer("False")}>False</Button>

      <p>
        {questionNumber + 1} Of {questions.length}
      </p>
    </Wrapper>
  );
}
