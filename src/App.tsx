import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router";
import MarkdownRenderer from "./components/MarkdownRenderer";
import getMarkdownInfo, { MarkdownFileInfo } from "./utils/getMarkdownInfo";

import Index from "./components/Index";
import FunctionReference from "./components/FunctionReference";

function formatPaths(x: string, i: number): string {
  return "markdown/" + `0${i}`.match(/\d{2}$/)![0] + "_" + x;
}
const App: React.FC = () => {
  const [lessons, setLessons] = useState<MarkdownFileInfo[]>([]);
  useEffect(() => {
    const markdownPaths: string[] = [
      "introduction.md",
      "helloworld.md",
      "comments.md",
      "variables.md",
      "lists.md",
      "expressions.md",
      "functions.md",
      "listfunctions.md",
      "symbols.md",
      "null.md",
      "operators.md",
      "addresses.md",
      "keys.md",
      "listop.md",
      // "compassign.md",
      // "numtypes.md",
      // "conditionals.md",
      // "loops.md",
      // "parens.md",
      // "userfunctions.md",
      // "formatting.md",
      // "nextsteps.md",
    ];

    getMarkdownInfo(markdownPaths.map(formatPaths)).then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Index lessons={lessons} />} />
        {lessons.map((lesson, i) => {
          const prev = i > 0 ? lessons[i - 1] : undefined;
          const next = i < lessons.length - 1 ? lessons[i + 1] : undefined;
          return (
            <Route
              key={lesson.route}
              path={lesson.route}
              element={<MarkdownRenderer previousRoute={prev} nextRoute={next} markdownFile={lesson.path} />}
            />
          );
        })}
        <Route path="/reference" element={<FunctionReference />} />
      </Routes>
      <footer style={{ width: "100%", paddingBottom: "25px", textAlign: "center" }}>
        <i>{new Date().getFullYear()} @ Felipe Tovar-Henao</i>
      </footer>
    </Router>
  );
};

export default App;
