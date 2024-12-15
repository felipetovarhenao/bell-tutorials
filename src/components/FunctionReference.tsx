import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { nativeFunctions as functions } from "../utils/nativeFunctions";
import Navbar from "./Navbar";

const FunctionReference: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  const [filteredFunctions, setFilteredFunctions] = useState(functions); // State to track the filtered functions

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    // Filter the functions based on the search term
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    setFilteredFunctions(functions.filter((func) => func.name.toLowerCase().includes(lowercasedSearchTerm)));
  }, [searchTerm]); // Run the filtering logic whenever the search term changes

  return (
    <div className="chapter">
      <Navbar />
      <h1>
        Appendix I: <i>bell</i> functions
      </h1>
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search functions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredFunctions.map((func) => (
        <div key={func.name}>
          <h2 className="inline-code">{func.name}()</h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ children, className, ...props }: any) {
                return (
                  <b className="inline-code" {...props}>
                    {children}
                  </b>
                );
              },
            }}
          >
            {func.description}
          </ReactMarkdown>

          <h4>Arguments</h4>
          <ul style={{ listStyleType: "none" }}>
            {func.args.map((arg, index) => (
              <li key={index}>
                <strong className="inline-code">@{arg.name}</strong>
                {arg.default !== undefined && <span> (default: {JSON.stringify(arg.default)})</span>}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
      {filteredFunctions.length === 0 && <p>No functions found matching "{searchTerm}".</p>}
    </div>
  );
};

export default FunctionReference;
