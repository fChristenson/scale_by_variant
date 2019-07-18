import * as React from "react";
import { render } from "react-dom";
import { Button, ButtonVariant } from "./components/standard/button/Button";
import { BadButton } from "./components/badButton/BadButton";

const omg = () => alert("omg");

const App = () => {
  return <>
    {Object.keys(ButtonVariant).map((variant: string) => {
      return <Button
        key={variant}
        variant={ButtonVariant[variant as ButtonVariant]}
        onClick={omg}>omg!</Button>;
    })}
    <br />
    <BadButton onClick={omg}>omg!</BadButton>
  </>
}

render(<App />, document.getElementById("root"));
