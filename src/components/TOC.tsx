import { Link } from "react-router";
import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import MarkdownRenderer from "./MarkdownRenderer";

interface TOCProps {
  lessons: MarkdownFileInfo[];
}
const TOC = ({ lessons }: TOCProps) => {
  return (
    <div>
      <MarkdownRenderer markdownFile="introduction.md" />
      <div>
        <h2>Table of Contents</h2>
        <nav>
          <ul>
            {lessons?.map((lesson) => (
              <li key={lesson.route}>
                <Link to={lesson.route}>{lesson.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default TOC;
