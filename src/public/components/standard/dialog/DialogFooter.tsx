import * as React from "react";
import { Button, ButtonVariant } from "../button/Button";

export enum DialogFooterVariant {
  CANCEL_CONFIRM,
  CONFIRM
}

type IDialogFooterProps = {
  onCancel(): void;
  onConfirm(): void;
  variant: DialogFooterVariant.CANCEL_CONFIRM;
} |
{
  onConfirm(): void;
  variant: DialogFooterVariant.CONFIRM;
}

const style: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end"
}

export class DialogFooter extends React.Component<IDialogFooterProps> {
  render() {
    return <footer style={style}>
      {this.props.variant === DialogFooterVariant.CANCEL_CONFIRM && <Button onClick={this.props.onCancel} variant={ButtonVariant.SECONDARY}>Cancel</Button>}
      <Button onClick={this.props.onConfirm}>Ok</Button>
    </footer>
  }
}