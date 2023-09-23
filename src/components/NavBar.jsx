import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
        </nav>
    </header>
  );
}
