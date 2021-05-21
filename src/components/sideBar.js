import './sideBar.css'
import Button from "./asideButton";

import { FaReact } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri'
import { BsListUl } from 'react-icons/bs'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import { BsPeople } from 'react-icons/bs'


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

      </div>
      <div id="accountArea">

      </div>
    </aside>
  )
}

export default sideBar