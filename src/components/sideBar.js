import './sideBar.css'
import Button from "./asideButton";

import { FaReact } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri'
import { BsPeople, BsGear, BsPerson } from 'react-icons/bs'
import { BiMessageRoundedDetail} from 'react-icons/bi'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoList } from 'react-icons/io5'
import { CgLogOut } from 'react-icons/cg'

const iconSize = '1.2rem'

function sideBar() {
  return (
    <aside>
      <div id="logoArea">
        <FaReact size={"4rem"}/>
        <h1>Company</h1>
      </div>
      <div id="menuArea">
        <Button icon={<RiHomeLine size={iconSize}/>} text='Dashboard'/>
        <Button icon={<IoList size={iconSize}/>} text='Projects'/>
        <Button icon={<BiMessageRoundedDetail size={iconSize}/>} text='Messages'/>
        <Button icon={<HiOutlineFolderOpen size={iconSize}/>} text='Services'/>
        <Button icon={<BsPeople size={iconSize}/>} text='Customers'/>
      </div>
      <div id="configsArea">
        <Button icon={<BsGear size={iconSize}/>} text='Settings'/>
        <Button icon={<IoMdNotificationsOutline size={iconSize}/>} text='Notifications'/>
      </div>
      <div id="accountArea">
        <Button icon={<BsPerson size={iconSize}/>} text='Account'/>
        <Button icon={<CgLogOut size={iconSize}/>} text='Logout'/>
      </div>
    </aside>
  )
}

export default sideBar