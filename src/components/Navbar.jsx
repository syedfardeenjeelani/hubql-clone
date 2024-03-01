import { BiLogoGithub } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div
      className="flex w-[100vw] h-[70px] bg-[#18181bea] xl:px-[15rem] py-2 justify-between
     border-b border-gray-700 sticky  top-0 z-50"
    >
      <div className="flex justify-between w-[100vw] px-4 py-2">
        <img
          src="https://uploads-ssl.webflow.com/63a42963d46c17f428220c43/64818edb05be9f0de0f0202c_hubql-logo.svg"
          loading="lazy"
          alt="Hubql logo"
          className="h-[50px] "
        ></img>
        <div className="hidden  items-center  xl:flex w-full text-[#C2C2C2]">
          <ul className="hidden  items-center  xl:flex  list-none">
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">Features</span>
              <FiChevronDown />
            </li>
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">Solution</span>
              <FiChevronDown />
            </li>
            <li className="px-4 py-2 flex items-center">
              <span className="px-2">Integrations</span>
              <FiChevronDown />
            </li>
          </ul>
        </div>

        <div className="flex items-center w-fit">
          <a href="https://github.com/anipr2002/hubql-clone">
            <div className=" hidden  items-center  xl:flex text-white px-8">
              <BiLogoGithub size={25} />
              <span className="text-[#c2c2c2] pl-2 hover:text-white hover:cursor-pointer">
                Github
              </span>
            </div>
          </a>

          <button className="bg-[#7108C2] text-white px-4 py-2 rounded-md flex">
            Login
          </button>
          <li className="list-none">
            <i class="fa-solid fa-bars  pt-4 flex  xl:hidden text-2xl pl-4  "></i>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
