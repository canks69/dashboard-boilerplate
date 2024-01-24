import {Button} from "../components/Button.tsx";
import {Icon} from "@iconify/react";
import {useSidebarContext} from "../contexts/SidebarContext.tsx";
import logo from "../assets/react.svg";

import {useState} from "react"
import {ProfileCard} from "../components/users/ProfileCard.tsx";

export function Navbar() {
  const [showFullWidthSearch] = useState(false)
  return (
    <>
      <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidthSearch}/>
        <div className={`flex-shrink-0 md:gap-2 flex`}>
          <Button type="button" size="icon" className="flex-shrink-0">
            <Icon icon={`ion:notifcations`} className="text-3xl"/>
          </Button>
          {/*Users*/}
          <ProfileCard/>
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
      <Button onClick={toggle} variant="ghost" size="icon" className="bg-transparent">
        <Icon icon={`ant-design:menu-outlined`} className="text-2xl"/>
      </Button>
      <a href="/admin">
        <img src={logo} className="h-6"/>
      </a>
    </div>
  )
}
