import {Profile} from "../../assets/Image.tsx";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {LinkGroup} from "../LinkGroup.tsx";
import {Button} from "../Button.tsx";
import {Icon} from "@iconify/react";

export function ProfileCard(){
  const  root = document.documentElement;
  const [show, setShow] = useState(true)
  const [mode, setMode] = useState(true)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default')
  const profileCardRef = useRef(null);
  
  
  const handleTheme = (val: string) => {
    if (val == "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) val = "dark";
    root.setAttribute("class", val);
    localStorage.setItem("theme", val);
    setTheme(val);
  }
  const handleProfileShow = () => {
    if(!mode){
      setMode(!mode)
    }else{
      setShow(!show)
    }
  }
  
  const handleAppearance = () => {
    setMode(!mode)
    setShow(!show)
  }
  
  const handleClickOutside = (event: any) => {
    if (profileCardRef.current && !profileCardRef.current.contains(event.target)) {
      setShow(true);
      setMode(true);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])
  
  return (
    <div ref={profileCardRef}>
      <button
        className={`transition-colors border rounded-full w-10 h-10 p-[2px] mr-7 flex-shrink-0`}
        onClick={() => handleProfileShow()}
      >
        <img src={Profile} className={`rounded-full w-full `}/>
      </button>
      <div
        className={`absolute top-12 overflow-y-auto scrollbar-hidden dark:bg-[#282828] right-5 rounded-md shadow-md transform duration-100 w-72 h-auto ${show && 'hidden'}`}>
        <div className={``}>
          <div className={`flex items-center gap-2 p-4`}>
            <img src={Profile} className={`rounded-full w-10 h-10`}/>
            <div className={`flex flex-col`}>
              <div className={`text-sm font-semibold`}>Admin</div>
              <div className={`text-xs text-gray-500`}>
                Admin
              </div>
              <Link to={`/admin/profile`}>
                <div className={`text-xs text-blue-500`}>
                  View Profile
                </div>
              </Link>
            </div>
          </div>
          <hr className={`my-2`}/>
          
          <ul className={`flex flex-col gap-2 mb-3`}>
            <li className={`text-md w-full`}>
              <LinkGroup icon={`ant-design:setting-outlined`} className={`p-4 py-2 hover:bg-gray-300`} path={`/admin/settings`} title={`Settings`}/>
            </li>
            <li className={`text-md w-full`}>
              <LinkGroup icon={`ant-design:logout-outlined`} className={`p-4 py-2 hover:bg-gray-300`} path={`/admin/logout`} title={`Logout`}/>
            </li>
            <li className={`text-md w-full`}>
              <button
                className={`w-full hover:bg-gray-300 dark:hover:bg-[#3f3f3f]`}
                onClick={() => handleAppearance()}
              >
                <div className={`flex items-center gap-2 p-4 py-2 `}>
                  <Icon icon={`iconamoon:mode-dark-light`} className={`text-xl`}/>
                  <span className={`flex items-center`}>Appearance : {theme}</span>
                  {/*Right Icon*/}
                  <div className={`ml-auto items-center`}>
                    <Icon icon={`ep:arrow-right-bold`} className={`text-xs`}/>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        
      </div>
      <div
        className={`absolute z-20 top-12 overflow-y-auto dark:bg-[#282828] scrollbar-hidden right-5 rounded-md shadow-md transform duration-100 w-72 h-100 ${mode && 'hidden'}`}>
        <div className={'flex items-center gap-2 p-2 '}>
          <Button
            variant={`ghost`}
            size={`icon`}
            onClick={() => handleAppearance()}
          >
            <Icon icon={`ph:arrow-left-bold`} className={`text-xl`}/>
          </Button>
          <span className={`flex items-center`}>Back</span>
        </div>
        <hr className={`my-2`}/>
        
        <ul className={`flex flex-col gap-2 mb-3`}>
          <li className={`text-md w-full`}>
            <button
              className={`w-full hover:bg-gray-300 dark:hover:bg-[#3f3f3f]`}
              onClick={() => handleTheme('default')}
            >
              <div className={`flex items-center gap-2 p-4 py-2 `}>
                {theme == "default" ? (
                  <Icon icon={`ph:check-light`} className={`text-xl mx-2`}/>
                ) : (
                  <div className={`flex w-9`}/>
                )}
                <span className={`flex items-center`}>Default</span>
              </div>
            </button>
          </li>
          <li className={`text-md w-full`}>
            <button
              className={`w-full hover:bg-gray-300 dark:hover:bg-[#3f3f3f]`}
              onClick={() => handleTheme('dark')}
            >
              <div className={`flex items-center gap-2 p-4 py-2 `}>
                  {theme == "dark" ? (
                    <Icon icon={`ph:check-light`} className={`text-xl mx-2`}/>
                  ) : (
                    <div className={`flex w-9`}/>
                  )}
                <span className={`flex items-center`}>Dark Theme</span>
              </div>
            </button>
          </li>
          <li className={`text-md w-full`}>
            <button
              className={`w-full hover:bg-gray-300 dark:hover:bg-[#3f3f3f]`}
              onClick={() => handleTheme('light')}
            >
              <div className={`flex items-center gap-2 p-4 py-2 `}>
                {theme == "light" ? (
                  <Icon icon={`ph:check-light`} className={`text-xl mx-2`}/>
                ) : (
                  <div className={`flex w-9`}/>
                )}
                <span className={`flex items-center`}>Light Theme</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}