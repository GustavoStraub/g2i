import React from "react";
import Link from "next/link";
import { Wrapper } from "components/Wrapper";
import { BeginButton } from "./styles";

export function HomePage() {
  return (
    <Wrapper>
      <h2>Welcome to the Trivia Challenge!</h2>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link href="/quiz" passHref>
        <BeginButton>BEGIN</BeginButton>
      </Link>
    </Wrapper>
  );
}
