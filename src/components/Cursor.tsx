import React from "react";

export const Cursor = () => {
  return (
    <div className="cursor">
      <div className="cursor-revert">
        <div className="cursor-media">
          <video
            src="../videos/websites.mp4"
            preload="auto"
            autoPlay
            muted
            loop
            id="websites"
          />
        </div>
      </div>
    </div>
  );
};
