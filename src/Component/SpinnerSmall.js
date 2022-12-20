import React from 'react'
import PulseLoader from "react-spinners/PulseLoader";

// const smallSpinnerColoe = ""
const SpinnerSmall = ({ loading }) => {
  return (
    <div className="sweet-loading ms-1">
      <PulseLoader
        color="white"
        loading={true}
        size={5} />
    </div>
  );
};

export default SpinnerSmall