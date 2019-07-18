import * as React from "react";
import { Button, ButtonVariant } from "../button/Button";

type IDialogHeaderProps = {
  onCancel(): void;
  variant: DialogHeaderVariant.CANCEL;
} |
{
  variant: DialogHeaderVariant.NONE;
}

export enum DialogHeaderVariant {
  CANCEL,
  NONE
}

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end"
}

export class DialogHeader extends React.Component<IDialogHeaderProps> {
  render() {
    return <header style={style}>
      {this.props.variant === DialogHeaderVariant.CANCEL && <Button onClick={this.props.onCancel} variant={ButtonVariant.SECONDARY}>X</Button>}
    </header>
  }
}