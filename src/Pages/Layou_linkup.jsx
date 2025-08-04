import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { dummyUserData } from '../assets/assets'
import close from '../assets/close.png'
import menu from '../assets/Menu.png'
import { Outlet } from 'react-router-dom'
import Loading from '../Components/Loading'
import { Menu, X } from 'lucide-react'
import "../Css-Property/Layou_linkup.css"


const Layou_linkup = () => {

 const user = dummyUserData;   
const [Open, setOpen] = useState(false);

  return  user? (
    
    <div className='rightside'>

        <Sidebar Open={Open} setOpen={setOpen}  />

        <div className="right_side_containt">
            <Outlet />
        </div>

        {
           
            Open ? null : <Menu className="menu" onClick={()=>setOpen(true)} />
        }
    </div>
  ):(
    <Loading />
  )
};

export default Layou_linkup