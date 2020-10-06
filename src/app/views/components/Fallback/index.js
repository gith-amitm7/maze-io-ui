import React from "react";
import "./fallback.scss";

export default function Loading({ message = undefined }) {
  return (
    <div className="suspense-fallback d-flex align-items-center justify-content-center">
      Loading...
    </div>
  );
}
