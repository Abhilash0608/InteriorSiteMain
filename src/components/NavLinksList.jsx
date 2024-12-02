import { motion } from "framer-motion";
import {  useState } from "react";
import { NavLinks, serviceData } from "../utils/servicesData";
import { useLocation } from "react-router-dom";
import { selectSerivce } from "../store/slices/services/servicesSlice";
const NavLinksList = ({  dispatch }) => {
    const location = useLocation();
    const [showMenu, setMenu] = useState(false);

    return (
        <ul className="hidden md:flex space-x-4">
            {NavLinks.map((link, ind) => (
                (location.pathname !== "/services" ||
                    !["About Us", "Services", "Contact Us"].includes(link.title)) && (
                    <motion.li
                        key={link.title}
                        whileHover={{ scale: 1.1 }}
                        className="relative text-lg transition duration-300 font-serif"
                    >
                        {ind === 1 ? (
                            <div
                                onMouseEnter={() => setMenu(true)}
                                onMouseLeave={() => setMenu(false)}
                                className="relative"
                            >
                                <a className="cursor-pointer">{link.title}</a>
                                {showMenu && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-5   -left-5 mt-2 w-52 p-3 bg-white shadow-lg rounded-lg p-0"
                                    >
                                        {serviceData.map((service) => (
                                            <li
                                                key={service.id}
                                                className="py-1 px-2 hover:bg-gray-200 rounded"
                                            >
                                                <a
                                                    href="/services"
                                                    onClick={() => dispatch(selectSerivce(service.id))}
                                                >
                                                    {service.title}
                                                </a>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </div>
                        ) : (
                            <a href={link.path} className="">{link.title}</a>
                        )}
                    </motion.li>
                )
            ))}
        </ul>
    );
};
export default NavLinksList