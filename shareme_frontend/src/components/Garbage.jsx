<div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div >
        <Sidebar/>
      </div>
      <div classname="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
        <HiMenu  fontSize={40} className='cursor-pointer' onClick={()=>setToggleSidebar(false)}/>
        {/* <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(false)} /> */}
        {/* <Link to="/">
          <img src={logo} alt="logo" className="w-28 m1-4"/>
        </Link>
        <Link to={`user-profile/${user?._id}`} className='m1-4'>
        <img src={user?.image}  className="w-10 h-10 rounded-full "/>
        </Link>
        </div> */}
        </div>
        {/* {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle fontSize={30} className='cursor-pointer' onClick={()=>setToggleSidebar(true)}/>

            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user && user} />

          </div>
        )} */}
          
        
      </div>
      
    </div>