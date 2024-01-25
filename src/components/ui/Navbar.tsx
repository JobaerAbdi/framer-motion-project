import { NavLink } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
  return (
    <header className="bg-red-400 h-16">
      <nav className="bg-lime-700 h-full w-full max-w-[1300px] px-[20px] mx-auto flex justify-between items-center"> 
        <span>iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Log In</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
