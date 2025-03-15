import React from "react";

function Title() {
  return (
    <div className="text-center py-12 bg-blue-600 text-white">
      <h1 className="text-5xl font-extrabold tracking-wide">
        Gaussian Hypergeometric Function
      </h1>
      <code className="block text-lg mt-4 bg-white/10 px-4 py-2 rounded-md font-mono">
        import hyp2f1 from "@stdlib/math/base/special/hyp2f1";
      </code>
    </div>
  );
}

export default Title;
