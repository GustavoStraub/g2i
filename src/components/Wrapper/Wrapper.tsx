import React from "react";
import { CommonWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function Wrapper(props: Props) {
  return <CommonWrapper>{props.children}</CommonWrapper>;
}
