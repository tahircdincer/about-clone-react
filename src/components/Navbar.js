export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo--area">
        <h3>Abstract</h3>
        <h3>|</h3>
        <h3>Help Center</h3>
      </div>
      <div className="navbar__button--area">
        <button className="btn__request">Submit a request</button>
        <button className="btn__sign--in">Sign in</button>
      </div>
    </nav>
  );
}
