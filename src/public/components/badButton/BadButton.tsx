import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { baseStyles } from "./BaseStyles";

export class BadButton extends React.PureComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  render() {
    const style = { ...baseStyles, color: "red" };
    return <button style={style} {...this.props}> {this.props.children} </button>
  }
}
