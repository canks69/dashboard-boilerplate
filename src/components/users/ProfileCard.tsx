import {Profile} from "../../assets/Image.tsx";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {LinkGroup} from "../LinkGroup.tsx";
import {Button} from "../Button.tsx";
import {Icon} from "@iconify/react";
import i18n from "../../commons/hooks/i18n.ts";
import {Language} from "../../commons/hooks/Language.ts";
import {ButtonLink} from "../foms/ButtonLink.tsx";
import Swal from "sweetalert2";

export function ProfileCard(){
  const  root = document.documentElement;
  const [show, setShow] = useState(true)
  const [lang, setLang] = useState(true)
  const [mode, setMode] = useState(true)
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default')
  
  const profileCardRef = useRef<HTMLDivElement>(null);
  
  const handleLanguage = () => {
    setShow(!show)
    setLang(!lang)
  }
  
  const selectLanguage = (val: string) => {
    localStorage.setItem("language", val);
    i18n.changeLanguage(val);
    setLanguage(val);
  }
  const handleTheme = (val: string) => {
    if (val == "system" && window.matchMedia("(prefers-color-scheme: dark)").matches) val = "dark";
    root.setAttribute("class", val);
    localStorage.setItem("theme", val);
    setTheme(val);
  }
  const handleProfileShow = () => {
    if(!mode){
      setMode(!mode)
    }
    else{
      setShow(!show)
    }
  }
  
  const handleAppearance = () => {
    setMode(!mode)
    setShow(!show)
  }
  
  const handleClickOutside = (event: MouseEvent) => {
    if (profileCardRef.current && !profileCardRef.current.contains(event.target as Node)) {
      setShow(true);
      setMode(true);
      setLang(true);
    }
  };

  const hanleLogout = () => {
    localStorage.removeItem('token');
    Swal.fire({
      icon: 'warning',
      title: 'Logged Out',
      text: 'You have been logged out',
      confirmButtonText: 'Login',
      showCancelButton: true,
      cancelButtonText: 'Close'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login'
      }
    })
  }
  
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
        className={`absolute bg-white top-12 overflow-y-auto scrollbar-hidden dark:bg-gray-900 right-5 rounded-md shadow-md transform duration-100 w-72 h-auto ${show && 'hidden'}`} style={{zIndex: 1000}}>
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
              <LinkGroup icon={`ant-design:setting-outlined`} className={`p-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700`}
                         path={`/admin/settings`} title={`Settings`}/>
            </li>
            <li className={`text-md w-full`}>
              {/*<LinkGroup icon={`ant-design:logout-outlined`} className={`p-4 py-2 hover:bg-gray-300`}*/}
              {/*           path={`/admin/logout`} title={`Logout`}/>*/}
              <ButtonLink
                className={`w-full p-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700`}
                onClick={hanleLogout}
              >
                <Icon icon={`ant-design:logout-outlined`} className={`text-xl mr-2`}/>
                <span>Logout</span>
              </ButtonLink>
            </li>
            <li className={`text-md w-full`}>
              <button
                className={`w-full hover:bg-gray-300 dark:hover:bg-gray-700`}
                onClick={() => handleLanguage()}
              >
                <div className={`flex items-center gap-2 p-4 py-2 `}>
                  <Icon icon={`ant-design:global-outlined`} className={`text-xl`}/>
                  <span className={`flex items-center`}>Language : {language}</span>
                  {/*Right Icon*/}
                  <div className={`ml-auto items-center`}>
                    <Icon icon={`ep:arrow-right-bold`} className={`text-xs`}/>
                  </div>
                </div>
              </button>
            </li>
            <li className={`text-md w-full`}>
              <button
                className={`w-full hover:bg-gray-300 dark:hover:bg-gray-700`}
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
        className={`absolute top-12 overflow-y-auto dark:bg-gray-900 scrollbar-hidden right-5 rounded-md shadow-md bg-white transform duration-100 w-72 h-100 ${mode && 'hidden'}`} style={{zIndex: 1000}}>
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
              className={`w-full hover:bg-gray-300 dark:hover:bg-gray-700`}
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
              className={`w-full hover:bg-gray-300 dark:hover:bg-gray-700`}
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
              className={`w-full hover:bg-gray-300 dark:hover:bg-gray-700`}
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
      <div
        className={`absolute bg-white z-20 top-12 overflow-y-auto dark:bg-gray-900 scrollbar-hidden right-5 rounded-md shadow-md transform duration-100 w-72 h-100 ${lang && 'hidden'}`} style={{zIndex: 1000}}>
        <div className={'flex items-center gap-2 p-2 '}>
          <Button
            variant={`ghost`}
            size={`icon`}
            onClick={() => handleLanguage()}
          >
            <Icon icon={`ph:arrow-left-bold`} className={`text-xl`}/>
          </Button>
          <span className={`flex items-center`}>Back</span>
        </div>
        <hr className={`my-2`}/>
        
        <ul className={`flex flex-col gap-2 mb-3`}>
          {Language.map((item, index) => {
            return (
              <li className={`text-md w-full`} key={index}>
                <button
                  className={`w-full hover:bg-gray-900 dark:hover:bg-gray-700`}
                  onClick={() => selectLanguage(item.code)}
                >
                  <div className={`flex items-center gap-2 p-4 py-2 `}>
                    {language == item.code ? (
                      <Icon icon={`ph:check-light`} className={`text-xl mx-2`}/>
                    ) : (
                      <div className={`flex w-9`}/>
                    )}
                    <span className={`flex items-center`}>
                      {item.name}
                    </span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}