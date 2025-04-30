import React,{ useState } from 'react'
import "./Navbar.css"
const Navbar = ({scrollToView,setContactTray}) => {
  const[trayOpen,setTrayOpen] = useState(false) 
  const[activeIndex,setActiveIndex] = useState(null)
  const navs=['Home','About','Client','Services',]

  return (
    <div className='nav-outdiv'>

      <div className='nav-inndiv'>

        <div className='nav-imgdiv'>
          <img src='/logo.png' alt='logo'/>
        </div>

        <nav>
          <ul>{navs.map((item,idx)=>(
            <li key={idx} className={`${activeIndex===idx?'active':''}`} onClick={()=>{scrollToView(`${item}`);setActiveIndex(idx)}}>{item}</li>
          ))}</ul>
        </nav>

        <div onClick={()=>{setContactTray(true)}} className='nav-innright'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 28.314 28.323">
               <path fill="#ffffff"  d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/>
          </svg>
          <h1>Enquiry</h1>
        </div>

        <div onClick={()=>{setTrayOpen(true)}} className='nav-hamburger'>
          <svg xmlns="http://www.w3.org/2000/svg"    width="24" height="24" viewBox="0 0 24 24">
         <rect y="4"  width="24" height="3" rx="1.5"/>
         <rect y="10.5" width="24" height="3" rx="1.5"/>
         <rect y="17" width="24" height="3" rx="1.5"/>
        </svg>
        </div>
      </div>
       
      <div className='SideTray-out'>
          <div className="sideNav" style={{ right : trayOpen ? "0" : "-100%" }}>
    <div>
       <button  onClick={()=>{setTrayOpen(false)}} >
         <svg className='cross-svg' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" >
           <line x1="18" y1="6" x2="6" y2="18"></line>
           <line x1="6" y1="6" x2="18" y2="18"></line>
         </svg>
       </button>
    </div>
    <ul className='hiddenNav'>{navs.map((item,idx)=>(
            <li key={idx} className={`${activeIndex===idx?'active':''}`} onClick={()=>{scrollToView(`${item}`);setActiveIndex(idx);setTrayOpen(false)}}>{item}</li>
          ))}</ul>
     </div>
    </div>
  
     
    </div>
  )
}

export default Navbar
