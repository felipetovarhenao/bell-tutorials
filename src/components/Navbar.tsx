import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import { Link } from "react-router";

interface NavbarProps {
  prev?: MarkdownFileInfo;
  next?: MarkdownFileInfo;
}
const Navbar = ({ prev, next }: NavbarProps) => {
  return (
    <div className="banner">
      {prev ? (
        <div>
          <span>Previous: </span>
          <Link to={"/" + prev.route}>{prev.title}</Link>
        </div>
      ) : (
        <div />
      )}
      {(next || prev) && (
        <div>
          <span></span>
          <Link to="/">Index</Link>
        </div>
      )}
      {next ? (
        <div>
          <span>Next: </span>
          <Link to={"/" + next.route}>{next.title}</Link>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Navbar;
