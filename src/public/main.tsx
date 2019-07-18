import * as React from "react";
import { render } from "react-dom";
import { Button, ButtonVariant } from "./components/button/Button";
import { BadButton } from "./components/badButton/BadButton";
import { BadButton2 } from "./components/badButton/BadButton2";
import { Dialog } from "./components/dialog/Dialog";
import { DialogFooterVariant, DialogFooter } from "./components/dialog/DialogFooter";
import { DialogHeaderVariant, DialogHeader } from "./components/dialog/DialogHeader";

const omg = () => alert("omg");

interface IAppState {
  show: boolean;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = { show: false }
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog() {
    this.setState({ show: true });
  }

  onCancel() {
    this.setState({ show: false });
  }

  onConfirm() {
    this.setState({ show: false });
  }

  render() {
    return <>
      <Button variant={ButtonVariant.PRIMARY} onClick={this.showDialog}>omg!</Button>
      <BadButton onClick={omg}>omg!</BadButton>
      <BadButton2 onClick={omg}>omg!</BadButton2>
      <Dialog
        header={<DialogHeader variant={DialogHeaderVariant.CANCEL} onCancel={this.onCancel} />}
        footer={<DialogFooter variant={DialogFooterVariant.CANCEL_CONFIRM} onCancel={this.onCancel} onConfirm={this.onConfirm} />}
        show={this.state.show}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}>foo</Dialog>
    </>
  }
}

render(<App />, document.getElementById("root"));
