import { NavLink } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="h-full w-full max-w-[1300px] px-[20px] mx-auto flex justify-between items-center ">
        <NavLink to='/'>
          <span className="text-3xl font-semibold">My Son</span>
        </NavLink>
        <ul className="space-x-5">
          <NavLink className="font-semibold" to="/">
            Home
          </NavLink>
          <NavLink className="font-semibold" to="/about">
            About
          </NavLink>
          <Button>
            <NavLink to="/login">
              Log In
            </NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
