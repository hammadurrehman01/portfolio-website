import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hammad Ur Rehman
        </motion.span>
        <div className="social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hammad-ur-rehman-868a4525a/"
          >
            <img src="/linkedin-logo.png" alt="" />
          </a>
          <a target="_blank" href="https://github.com/hammadurrehman01">
            <img src="/github-logo.png" alt="" />
          </a>
          <a target="_blank" href="https://www.fiverr.com/hammadurrehman8">
            <img src="/fiverr-logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
