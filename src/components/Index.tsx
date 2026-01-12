import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import TOC from "./TOC";

interface IndexProps {
  lessons: MarkdownFileInfo[];
}
const Index = ({ lessons }: IndexProps) => {
  return (
    <div>
      <img className="main-logo" src="logo.svg" alt="bell-logo" />
      <h1 className="header">Bell Tutorials</h1>
      <blockquote className="header-subtitle">
        <i>a musician-friendly introduction to computer programming with the</i> bell <i>language</i>
      </blockquote>

      <TOC lessons={lessons} />
    </div>
  );
};
export default Index;
