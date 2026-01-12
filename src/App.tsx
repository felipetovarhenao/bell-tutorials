import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router";
import MarkdownRenderer from "./components/MarkdownRenderer";
import getMarkdownInfo, { MarkdownFileInfo } from "./utils/getMarkdownInfo";
import Index from "./components/Index";
import FunctionReference from "./components/FunctionReference";
import ReactGA from "react-ga4";
import AnalyticsTracker from "./components/AnalyticsTracker";

function formatPaths(x: string, i: number): string {
  return "markdown/" + `0${i}`.match(/\d{2}$/)![0] + "_" + x;
}
const App: React.FC = () => {
  const [lessons, setLessons] = useState<MarkdownFileInfo[]>([]);

  useEffect(() => {
    ReactGA.initialize("G-8PVL4YVC4V", {
      testMode: !window.origin.includes("felipe-tovar-henao.com"),
    });
  }, []);

  useEffect(() => {
    const markdownPaths: string[] = [
      "introduction.md",
      "helloworld.md",
      "comments.md",
      "variables.md",
      "numtypes.md",
      "lists.md",
      "evaluation.md",
      "expressions.md",
      "functions.md",
      "listfunctions.md",
      "symbols.md",
      "null.md",
      "operators.md",
      "addresses.md",
      "keys.md",
      "listop.md",
      "conditionals.md",
      "loops.md",
      "userfunctions.md",
      "funcvalues.md",
      "formatting.md",
      "nextsteps.md",
    ];

    getMarkdownInfo(markdownPaths.map(formatPaths)).then((lessons) => {
      setLessons(lessons);
    });
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
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
        <Route path="/pseudovariables" element={<MarkdownRenderer markdownFile={"markdown/pseudovariables.md"} />} />
        <Route path="/mistakes" element={<MarkdownRenderer markdownFile={"markdown/mistakes.md"} />} />
        <Route path="/keywords" element={<MarkdownRenderer markdownFile={"markdown/keywords.md"} />} />
      </Routes>
      <hr style={{ marginTop: "25px", marginBottom: "25px" }} />
      <footer style={{ width: "100%", paddingBottom: "25px", textAlign: "center" }}>
        <i>{new Date().getFullYear()} © Felipe Tovar-Henao</i>
      </footer>
    </Router>
  );
};

export default App;
