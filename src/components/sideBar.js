import './sideBar.css'
import Button from "./asideButton";

import { FaReact } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri'
import { BsListUl, BsPeople, BsGear, BsPerson } from 'react-icons/bs'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CgLogOut } from 'react-icons/cg'

function sideBar() {
  return (
    <aside>
      <div id="logoArea">
        <FaReact/>
        <h1>Company</h1>
      </div>
      <div id="menuArea">
        <Button icon={<RiHomeLine/>} text='Dashboard'/>
        <Button icon={<BsListUl/>} text='Projects'/>
        <Button icon={<BiMessageRoundedDetail/>} text='Messages'/>
        <Button icon={<HiOutlineFolderOpen/>} text='Services'/>
        <Button icon={<BsPeople/>} text='Customers'/>
      </div>
      <div id="configsArea">
        <Button icon={<BsGear/>} text='Settings'/>
        <Button icon={<IoMdNotificationsOutline/>} text='Notifications'/>
      </div>
      <div id="accountArea">
        <Button icon={<BsPerson/>} text='Account'/>
        <Button icon={<CgLogOut/>} text='Logout'/>
      </div>
    </aside>
  )
}

export default sideBar