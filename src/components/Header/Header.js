import React from "react";
import { Link } from "react-router-dom"
import MainHeader from "../MainHeader/MainHeader"
import MobileHeader from "../MobileHeader/MobileHeader"

class Header extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <MobileHeader />
      </>
    )
  }
}

export default Header