import { useState } from "react";
import Avatar from "../Avatar/Avatar"
import Icon from "../Icon/Icon"
import { AnimatePresence, motion } from "framer-motion";

const MyAccount = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  
  const toggleDropdown = () => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div>
      <button className="flex items-center gap-2 text-black dark:text-white" onClick={toggleDropdown}>
        <motion.div animate={{ rotate: isDropdownShowing ? '180deg' : '0' }}>
          <Icon id="chevron" />
        </motion.div>
        <Avatar avatar="/images/placeholder__avatar-01.png" alt="Avatar" />
        <div className="text-left">
          <div className="text-sm">Logged in as</div>
          <div className="text-lg bold">Cody Fisher</div>
        </div>
      </button>

      <AnimatePresence>
        {isDropdownShowing && (
          <motion.nav
           initial={{ opacity:0, y:-20 }}
           animate={{ opacity:1, y:0 }}
           exit={{ opacity:0, y:-20 }}
           className="bg-white py-5 pl-4 pr-5 inline-block dropdown">
            <ul className="flex flex-col gap-2">
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="user" />
                </div>
                My Account
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="calendar" />
                </div>
                My Event
              </li>
              <li>
                <div className="text-pastelMagenta">
                  <Icon size={32} id="logout" />
                </div>
                Logout
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MyAccount
