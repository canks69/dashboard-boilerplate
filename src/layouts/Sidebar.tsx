
import { twMerge } from "tailwind-merge"
import {Button, buttonStyles} from "../components/Button.tsx";
import {Icon} from "@iconify/react";
import {useSidebarContext} from "../contexts/SidebarContext";
import {PageHeaderFirstSection} from "./Navbar.tsx";
import {Children, ElementType, Fragment, ReactNode, useState} from "react";
import {menu} from "../dammy/SideMenu.tsx";

export function Sidebar(){
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
        isLargeOpen ? "lg:hidden" : "lg:flex"
      }`}>
        <SmallSidebarItem icon={`ic:round-home`} title="Home" url="/" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white min-h-screen max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection/>
        </div>
        <LargeSidebarSection>
          {
            menu.map((item, index) => {
              return (
                <Fragment key={index}>
                  {item.exact && (
                    <hr className={`mt-3`}/>
                  )}
                  <LargeSidebarItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    url={item.url}
                    isActive={item.url === "/"}
                    children={item.children}
                  />
                </Fragment>
              )
            })
          }
        </LargeSidebarSection>
      </aside>
    </>
)
}

type SmallSidebarItemProps = {
  icon: string,
    title: string
  url: string
}

function SmallSidebarItem({icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon icon={icon} className="text-2xl" />
      <div className="text-sm">{title}</div>
    </a>
  )
}

type LargeSidebarSectionProps = {
  children: ReactNode
  title?: string
  visibleItemCount?: number
}

function LargeSidebarSection({ children, title,  visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'
  
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded(e => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <Icon icon={ButtonIcon} className="text-xl" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  )
}

type LargeSidebarItemProps = {
  Img?: ElementType | string
  icon?: string
  title: string
  url: string
  isActive?: boolean
  children?: LargeSidebarItemProps[]
}

function LargeSidebarItem({ Img, icon, title, url, isActive = false, children }: LargeSidebarItemProps) {
  // Hide and show children
  const [isExpanded, setIsExpanded] = useState(false)
  const ButtonIcon = isExpanded ? 'iconamoon:arrow-up-2' : 'iconamoon:arrow-down-2'
  
  
  return (
    <>
      {!children ? (
        <a
          href={url}
          className={twMerge(
            buttonStyles({ variant: "ghost" }),
            `w-full flex items-center rounded-lg gap-4 p-2.5 mb-1 ${
              isActive ? "font-medium bg-neutral-100 hover:bg-secondary" : undefined
            }`
          )}
        >
          {icon && <Icon icon={icon} className="text-xl" />}
          {Img && typeof Img === "string" && (
            <img src={Img} className="w-6 h-6 rounded-full" />
          )}
          <div className="whitespace-nowrap overflow-hidden text-sm">
            {title}
          </div>
        </a>
      ): (
        <>
          <button
            className={twMerge(
              buttonStyles({variant: "ghost"}),
              `w-full flex items-center rounded-lg gap-4 p-2.5 mb-1 ${
                isActive ? "font-medium bg-neutral-100 hover:bg-secondary" : undefined
              }`
            )}
            onClick={() => { setIsExpanded(e => !e) }}
          >
            {icon && <Icon icon={icon} className="text-xl"/>}
            {Img && typeof Img === "string" && (
              <img src={Img} className="w-6 h-6 rounded-full"/>
            )}
            <div className="whitespace-nowrap overflow-hidden text-sm">
              {title}
            </div>
            {/*icon Arrow*/}
            <div className="flex-grow flex justify-end">
              <Icon icon={ButtonIcon} className="text-xl"/>
            </div>
          </button>
          {children.map((subitem, index) => {
            return (
              <a
                href={subitem.url}
                key={index}
                className={twMerge(
                  buttonStyles({ variant: "ghost" }),
                  `w-auto flex items-center rounded-lg gap-4 ml-9 p-2.5 mb-1 ${
                  isActive ? "font-medium bg-neutral-100 hover:bg-secondary" : undefined}
                  ${isExpanded ? '' : "hidden"}`
                )}
              >
                <div className="whitespace-nowrap overflow-hidden text-sm">
                  {subitem.title}
                </div>
              </a>
            )
          })}
        </>
      )}
    </>
  )
}