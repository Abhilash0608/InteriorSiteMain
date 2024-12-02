import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
const Logo = ({ isServices }) => (
    <div className={`flex items-center ${isServices ? "hidden" : "flex"} lg:flex`}>
        <div className="w-24 overflow-hidden">
            <a href="/" className="cursor-pointer">
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full"
                    style={{ transform: "scale(1.1)" }}
                />
            </a>
        </div>
        <motion.h1 className="text-xl hidden lg:flex font-bold font-serif ml-1.5">
            Halchemy Interior
        </motion.h1>
    </div>
);
export default Logo