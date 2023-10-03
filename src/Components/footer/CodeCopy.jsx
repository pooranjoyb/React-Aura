import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

function CodeCopy({ code, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); 
  };

  return (
    <div className="text-center py-1">
      <CopyToClipboard text={code} onCopy={handleCopyClick}>
        {copied ? (
          <span>Copied!</span>
        ) : (
          <button>Copy {label}</button>
        )}
      </CopyToClipboard>
    </div>
  );
}
export default CodeCopy;