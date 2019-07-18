import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { baseStyles } from "./BaseStyles";
import { primaryButtonStyles } from "./PrimaryButtonStyles";
import { secondaryButtonStyles } from "./SecondaryButtonStyles";
import { unreachable } from "../../../utils";

export enum ButtonVariant {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY"
}

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant
}

const getVariantStyles = (variant: ButtonVariant = ButtonVariant.PRIMARY): object => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return primaryButtonStyles;

    case ButtonVariant.SECONDARY:
      return secondaryButtonStyles;

    default:
      return unreachable(variant);
  }
}

export class Button extends React.Component<IButtonProps> {
  render() {
    const variantStyles = getVariantStyles(this.props.variant);
    const style = { ...baseStyles, ...variantStyles };

    return <button style={style} {...this.props}>{this.props.children}</button>
  }
}
