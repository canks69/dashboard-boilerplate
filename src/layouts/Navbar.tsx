import {Button} from "../components/Button.tsx";
import {Icon} from "@iconify/react";
import {useSidebarContext} from "../contexts/SidebarContext.tsx";
import logo from "../assets/react.svg";
import Profile from "../assets/profile.webp";
import {useState} from "react";

export function Navbar() {
  const [showFullWidthSearch] = useState(false)
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidthSearch}/>
        <div className={`flex-shrink-0 md:gap-2 flex`}>
          <Button type="button" size="icon" className="flex-shrink-0 mx-3">
            <Icon icon={`ion:notifcations`} className="text-3xl"/>
          </Button>
          {/*Users*/}
          <button className={`transition-colors bg-transparent border rounded-full w-10 h-10 p-[2px] flex-shrink-0`}>
            <img src={Profile} className={`rounded-full w-full `}/>
          </button>
        </div>
      </div>
    </>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({hidden = false}: PageHeaderFirstSectionProps) {
  const {toggle} = useSidebarContext()
  
  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Icon icon={`ant-design:menu-outlined`} className="text-2xl"/>
      </Button>
      <a href="/admin">
        <img src={logo} className="h-6"/>
      </a>
    </div>
  )
}
