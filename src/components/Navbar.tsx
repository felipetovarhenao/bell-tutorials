import { MarkdownFileInfo } from "../utils/getMarkdownInfo";
import { Link } from "react-router";
import { Icon } from "@iconify/react"; // Import Iconify for icons

export interface NavbarProps {
  prev?: MarkdownFileInfo;
  next?: MarkdownFileInfo;
}

const Navbar = ({ prev, next }: NavbarProps) => {
  return (
    <div className="banner">
      {prev ? (
        <div className="nav-item">
          <Link to={"/" + prev.route} className="nav-link">
            <Icon icon="material-symbols:arrow-back-ios-rounded" className="nav-icon" />
            <span>{prev.title}</span>
          </Link>
        </div>
      ) : (
        <div className="nav-item" />
      )}
      {
        <div className="nav-item">
          <Link to="/" className="nav-link">
            Index
          </Link>
        </div>
      }
      {next ? (
        <div className="nav-item">
          <Link to={"/" + next.route} className="nav-link">
            <span>{next.title}</span>
            <Icon icon="material-symbols:arrow-forward-ios-rounded" className="nav-icon" />
          </Link>
        </div>
      ) : (
        <div className="nav-item" />
      )}
    </div>
  );
};

export default Navbar;
