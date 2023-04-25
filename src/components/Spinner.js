import React from "react";
import loading from "../loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-2">
      <img className="my-3" src={loading} alt="loading-spinner" />
    </div>
  );
};

export default Spinner;
