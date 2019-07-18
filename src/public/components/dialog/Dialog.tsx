import * as React from "react";

interface IDialogProps {
  onCancel(): void;
  onConfirm(): void;
  show: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const dialogStyle: React.CSSProperties = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.3)"
}

const containerStyle: React.CSSProperties = {
  margin: "20px auto",
  background: "white",
  width: "400px",
  height: "400px"
}

export class Dialog extends React.Component<IDialogProps> {
  render() {
    if (!this.props.show) return null;
    const hideHeader = !this.props.header;
    const contentStyle: React.CSSProperties = {
      height: `calc(400px - 67px - ${hideHeader ? "0px" : "67px"})`
    }
    return <div style={dialogStyle}>
      <div style={containerStyle}>
        {this.props.header}
        <div style={contentStyle}>
          {this.props.children}
        </div>
        {this.props.footer}
      </div>
    </div>
  }
}