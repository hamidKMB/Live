import React from "react";

import "./modal.styles.scss";

import { ReactComponent as CrossLogo } from "./crossMark.svg";

class Modal extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isShow ,
    };
  }

  componentDidMount(){
      document.querySelector(".header").style.zIndex = "0";
    }
  componentWillUnmount(){
      document.querySelector(".header").style.zIndex = "2";
    }


  render() {
    return (
      <div className="modal-custom" style={{display:`${this.props.isShow ? "inline-flex" : "none"}`}}>
        <div className="black-overlay"/>
          <div className="main-modal">
            <div className="content-in-modal">
              <CrossLogo className="cross-logo" id={this.props.name} onClick={this.props.closeModal}/>
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

export default Modal;