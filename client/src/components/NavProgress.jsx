import React from "react";
import Dropdown from './Dropdown';
import ProgressBar from './ProgressBar';
import UntitledNav from './UntitledNav';

class NavProgress extends React.Component {

  render() {
    return (
      <div className="fixed">
        <UntitledNav />
        <Dropdown />
        <ProgressBar />
      </div>
    )
  }
}

export default NavProgress;
