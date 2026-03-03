import TodoLogo from "../assets/icons/Todo-logo.webp";
const Header = () => {
  return (
    <header className="flex justify-between items-center mt-10 shadow-2xl p-3 rounded-3xl">
      <div className="w-[5%] ">
        <a href="">
          <img src={TodoLogo} alt="" className="w-full rounded-xl" />
        </a>
      </div>
      <nav>
        <ul className="flex gap-5 mr-5">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">SignUp</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
