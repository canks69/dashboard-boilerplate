import {AdminMenu, adminMenuProps} from "../routes/adminMenu.tsx";
import {Link, useLocation} from "react-router-dom";
import {twMerge} from "tailwind-merge";
import {Button, buttonStyles} from "../components/Button.tsx";
import {Icon} from "@iconify/react";
import {useSidebarContext} from "../contexts/SidebarContext.tsx";
import {PageHeaderFirstSection} from "./Navbar.tsx";
import {Children, Fragment, ReactNode, useState} from "react";

export function Sidebar() {
  const location = useLocation();
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext()
  const sidemenu = AdminMenu[0].children
  return (
    <>
      <aside className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 hidden md:flex ${
        isLargeOpen ? "lg:hidden" : "lg:flex"
      }`}>
        {sidemenu.map((item, index) => {
            return item.title && (
              <SmallSidebarItem
                key={index}
                icon={item.icon}
                iconActive={item.iconActive}
                title={item.title}
                path={item.path}
                isActive={location.pathname.includes(item.path)}
              />
            )
          }
        )}
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark  opacity-50"
        />
      )}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white dark:bg-gray-900 min-h-screen max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white dark:bg-gray-900 ">
          <PageHeaderFirstSection/>
        </div>
        <LargeSidebarSection>
          {
            sidemenu.map((item, index) => {
              return item.title && (
                <Fragment key={index}>
                  <LargeSidebarItem
                    key={index}
                    icon={location.pathname.includes(item.path) ? item.iconActive :  item.icon}
                    title={item.title}
                    path={item.path}
                    isActive={location.pathname.includes(item.path)}
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

function LargeSidebarItem({icon, isActive, title, path, children}: adminMenuProps) {
  const [isExpanded, setIsExpanded] = useState(isActive)
  return (
    <>
      {!children ? (
        <Link to={path}>
          <label
            className={twMerge(
              buttonStyles({ variant: "ghost" }),
              `w-full flex items-center bg-transparent text-slate-900 rounded-lg gap-4 p-2.5 mb-1 ${
                isActive ? "font-medium bg-neutral-100 dark:bg-gray-800" : undefined
              }`
            )}>
            <Icon icon={`${icon}`} className="text-xl" />
            <div className="whitespace-nowrap overflow-hidden text-sm">{title}</div>
          </label>
        </Link>
      ) : (
        <>
          <button
            className={twMerge(
              buttonStyles({variant: "ghost"}),
              `w-full flex items-center bg-transparent text-slate-900 rounded-lg gap-4 p-2.5 mb-1 ${
                isActive ? "font-medium bg-neutral-100 dark:bg-gray-800" : undefined
              }`
            )}
            onClick={() => { setIsExpanded(e => !e) }}
          >
            <Icon icon={`${icon}`} className="text-xl" />
            <div className="whitespace-nowrap overflow-hidden text-sm">{title}</div>
            <Icon
              icon={`iconamoon:arrow-down-2`}
              className={`ml-auto text-xl transition-transform duration-300 transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
          { children.map((subitem, index) => {
            return subitem.title && (
              <Link to={`${path}/${subitem.path}`} key={index}>
                <label
                  className={twMerge(
                    buttonStyles({ variant: "ghost" }),
                    `w-auto flex items-center bg-transparent text-slate-900 rounded-lg gap-4 p-2.5 mb-1 ${
                      location.pathname.endsWith(subitem.path) ? "font-medium bg-neutral-100 dark:bg-[#3f3f3f]" : undefined
                    } ${isExpanded ? '' : "hidden"}`
                  )}>
                  <Icon icon="tdesign:tree-list" className="text-xl" />
                  <div className="whitespace-nowrap overflow-hidden text-sm">{subitem.title}</div>
                </label>
              </Link>
            )
          })}
        </>
      )}
    </>
  )
  
}

function SmallSidebarItem({icon, iconActive, title, path, isActive}: adminMenuProps) {
  return (
    <>
      <Link to={path}>
        <label className={twMerge(buttonStyles({ variant: "ghost" }),
          "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
        )}>
          <Icon icon={`${isActive ? iconActive : icon}`} className="text-2xl" />
          <div className="text-sm">{title}</div>
        </label>
      </Link>
    </>
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
          className="w-full flex items-center  rounded-lg gap-4 p-3"
        >
          <Icon icon={ButtonIcon} className="text-xl" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  )
}