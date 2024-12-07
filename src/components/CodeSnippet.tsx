import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Icon } from "@iconify/react"; // Import Iconify component

const CodeSnippet = ({ node, inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || "inline");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return !inline && match ? (
    <div className="code-snippet-container">
      <SyntaxHighlighter style={oneDark} language={match[1]} {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
      <button className="copy-button" onClick={handleCopy} title="Copy to clipboard">
        <Icon icon="mdi:content-copy" className="copy-icon" />
        {copied && <span className="copied-text">Copied!</span>}
      </button>
    </div>
  ) : (
    <b className="inline-code">{children}</b>
  );
};

export default CodeSnippet;
