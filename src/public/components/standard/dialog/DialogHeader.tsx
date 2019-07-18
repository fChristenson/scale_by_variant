import * as React from "react";
import { Button, ButtonVariant } from "../button/Button";

type IDialogHeaderProps = {
  onCancel(): void;
  variant: DialogHeaderVariant.CANCEL;
}

export enum DialogHeaderVariant {
  CANCEL
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