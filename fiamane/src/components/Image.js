import React from "react";

function Image({ src, alt }) {
  return (
    <div className="flex w-1/3 flex-wrap">
      <div className="w-full p-1 md:p-2">
        <img
          alt={alt}
          className="block h-full w-full rounded-lg object-cover object-center"
          src={src}
        />
      </div>
    </div>
  );
}

export default Image;
