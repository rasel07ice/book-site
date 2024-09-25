import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import Button from "../utilityComponents/Button";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-3 items-center justify-between">
        <div>
          <Link to={ROUTES.HOME}>
            <img className="size-16 p-2" src="../../logo.png" alt="logo" />
          </Link>
        </div>
        <div>
          <ul className=" text-lg font-bold flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to={ROUTES.HOME}>
              <li className="hover:bg-primary hover:px-3 hover:py-1 hover:rounded-md duration-300">
                <span>Home</span>
              </li>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <li className="hover:bg-primary hover:px-3 hover:py-1 hover:rounded-md duration-300">
                <span>About</span>
              </li>
            </Link>
            <Link to={ROUTES.BLOG}>
              <li className="hover:bg-primary hover:px-3 hover:py-1 hover:rounded-md duration-300">
                <span>Blog</span>
              </li>
            </Link>
            <li className="hover:bg-primary hover:px-3 hover:py-1 hover:rounded-md duration-300">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="space-x-2">
            <Button content={{ title: "Buy Book", color: "primary" }} />
            <Button content={{ title: "Sign In", color: "backPrimary" }} />
          </div>
        </div>
      </div>
    </>
  );
}
