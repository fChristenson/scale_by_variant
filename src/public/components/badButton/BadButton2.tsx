import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { baseStyles } from "./BaseStyles";

export class BadButton2 extends React.PureComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  render() {
    const style = { ...baseStyles, color: "blue" };
    return <button style={style} {...this.props}> {this.props.children} </button>
  }
}
