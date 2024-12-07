import { Link } from "react-router";
import { MarkdownFileInfo } from "../utils/getMarkdownInfo";

interface TOCProps {
  lessons: MarkdownFileInfo[];
}
const TOC = ({ lessons }: TOCProps) => {
  return (
    <div className="toc">
      <h2>Index</h2>
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
  );
};
export default TOC;
