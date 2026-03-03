const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <svg className="logo"></svg>
      </div>
      <nav>
        <ul>
          <li>Login</li>
          <li>Register</li>
          <li>Pricing</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
