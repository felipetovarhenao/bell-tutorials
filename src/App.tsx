import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MarkdownRenderer from "./components/MarkdownRenderer";
import getMarkdownInfo, { MarkdownFileInfo } from "./utils/getMarkdownInfo";
import TOC from "./components/TOC";

function formatPaths(x: string, i: number): string {
  return "markdown/" + `0${i + 1}`.match(/\d{2}$/)![0] + "_" + x;
}
const App: React.FC = () => {
  // List of chapters with their titles, paths, and file locations

  const [lessons, setLessons] = useState<MarkdownFileInfo[]>([]);
  useEffect(() => {
    const markdownPaths: string[] = [
      "helloworld.md",
      "comments.md",
      "variables.md",
      "expressions.md",
      "lists.md",
      "functions.md",
      "listfunctions.md",
      "symbols.md",
      "null.md",
      "operators.md",
      "addresses.md",
      "keys.md",
      "listop.md",
      "compassign.md",
      "numtypes.md",
      "conditionals.md",
      "loops.md",
      "parens.md",
      "formatting.md",
    ];

    getMarkdownInfo(markdownPaths.map(formatPaths)).then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TOC lessons={lessons} />} />
        {lessons.map((lesson) => (
          <Route key={lesson.route} path={lesson.route} element={<MarkdownRenderer markdownFile={lesson.path} />} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
