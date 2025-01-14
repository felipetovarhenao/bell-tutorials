import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Import KaTeX styles
import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";

interface MarkdownRendererProps {
  nextRoute?: MarkdownFileInfo;
  previousRoute?: MarkdownFileInfo;
  markdownFile: string; // Path to the Markdown file
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownFile, nextRoute, previousRoute }) => {
  const [content, setContent] = useState<string>("");

  // Fetch the Markdown file content
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownFile);
        const text = await response.text();
        setContent(text);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Error fetching the markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [markdownFile]);

  const components = {
    code({ node, inline, className, children, ...props }: any) {
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
    },
    a({ href, children, ...props }: any) {
      if (href?.endsWith(".md")) {
        const match = href.match(/(?<=\d{2}_)\w+(?=\.md)/);
        const reactRoute = match[0];
        return (
          <Link to={"/" + reactRoute} {...props}>
            {children}
          </Link>
        );
      }
      if (href?.startsWith("/#")) {
        const baseURL = window.location.href.split("#")[0];
        href = `${baseURL}${(href as string).slice(1)}`;
      } else {
        props.target = "_blank";
      }
      return (
        <a href={href} {...props}>
          {children}
        </a>
      );
    },
    blockquote({ children, ...props }: any) {
      return <blockquote {...props}>{children}</blockquote>;
    },
    table: ({ node, ...props }: any) => (
      <div className="table-container">
        <table {...props} />
      </div>
    ),
  };

  // Render Markdown with syntax highlighting and math support
  return (
    <div className="markdown-container">
      <Navbar prev={previousRoute} next={nextRoute} />
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        className="chapter"
        children={content}
        components={components as any}
      />
      <Navbar prev={previousRoute} next={nextRoute} />
    </div>
  );
};

export default MarkdownRenderer;
