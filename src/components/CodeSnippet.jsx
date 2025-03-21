import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";

const CodeSnippet = () => {
  const codeString = `import uniform from "@stdlib/random/array/uniform";
import logEachMap from "@stdlib/console/log-each-map";
import hyp2f1 from "@stdlib/math/base/special/hyp2f1";

opts = {
	'dtype': 'float64'
};
var a = uniform( 100, -50.0, 50.0, opts );
var b = uniform( 100, -50.0, 50.0, opts );
var c = uniform( 100, -50.0, 50.0, opts );
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( '2F1(%d,%d;%d;%d) = %d', a, b, c, x, hyp2f1 );`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="w-screen bg-gray-100 text-black p-6 rounded-lg shadow-lg relative">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Generating Values with hyp2f1
      </h2>
      <div className="px-4 md:px-12 relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-15 bg-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-600 transition-all"
        >
          <ClipboardCopy size={16} /> {copied ? "Copied!" : "Copy Code"}
        </button>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          className="rounded-lg"
          wrapLines={true}
          codeTagProps={{ style: { fontSize: "1.2rem" } }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeSnippet;
