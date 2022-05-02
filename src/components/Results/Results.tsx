import { Wrapper } from "components/Wrapper";
import { useResults } from "hooks/useResults";
import { useRouter } from "next/router";
import React from "react";
import { RowResult, Icon, PlayAgain } from "./styles";

type Props = {};

export function Results({}: Props) {
  const { results, rightAnswers, totalItems, resetResults } = useResults();
  const { push } = useRouter();

  const handlePlayAgain = () => {
    resetResults();
    push("/");
  };

  return (
    <Wrapper>
      <h3>
        You Scored: {rightAnswers} / {totalItems}
      </h3>

      {results.map((result) => (
        <RowResult key={result.question}>
          <Icon> {result.correctAnswer ? "+" : "-"}</Icon>
          <p> {result.question}</p>
        </RowResult>
      ))}

      <PlayAgain onClick={handlePlayAgain}>PLAY AGAIN?</PlayAgain>
    </Wrapper>
  );
}
