import React from "react";

export function LoadingSpinner({...props}) {
  return (
    <div className="base-loading">  
      <div className="spinner"></div>
      <span className="spinner-text">{props.text}</span>
    </div>
  );
}
