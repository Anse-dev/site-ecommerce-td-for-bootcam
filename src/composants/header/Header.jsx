import "./header.css";
function Header() {
  return (
    <header>
      <div className="header-content">
        <a href="/" className="navlink">
          home
        </a>
        <a href="/products">products</a>
      </div>
    </header>
  );
}

export default Header;
