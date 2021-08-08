import React , {Component}from "react";

import OtpInput from "react-otp-input";

import "./OTP.styles.scss"

export default class Otp extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={5}
        inputStyle="OTP-input"
        containerStyle="container-input"
        focusStyle="focus-input"
      />
    );
  }
}