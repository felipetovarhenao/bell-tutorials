import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import TOC from "./TOC";

interface IndexProps {
  lessons: MarkdownFileInfo[];
}
const Index = ({ lessons }: IndexProps) => {
  return (
    <div>
      <img className="main-logo" src="logo.png" alt="bell-logo" />
      <h1 className="header">Programming with bell</h1>
      <blockquote>
        <i>a musician-friendly introduction to programming with the</i> bell <i>programming language</i>
      </blockquote>

      <TOC lessons={lessons} />
    </div>
  );
};
export default Index;
