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
        <ul className="toc-list">
          {lessons?.map((lesson) => (
            <li key={lesson.route}>
              <Link to={lesson.route}>{lesson.title}</Link>
            </li>
          ))}
          <li>
            <Link to={"/reference"}>
              Appendix I: <i>bell</i> functions
            </Link>
          </li>
          <li>
            <Link to={"/pseudovariables"}>Appendix II: Pseudo-Variables</Link>
          </li>
          <li>
            <Link to={"/keywords"}>Appendix III: Reserved Keywords</Link>
          </li>
          <li>
            <Link to={"/mistakes"}>Appendix IV: Frequent Mistakes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default TOC;
