import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

interface LinkGroupProps {
  icon: string;
  path: string;
  title: string;
  className?: string;
}
export function LinkGroup({icon, path, title, className}: LinkGroupProps) {
  return (
    <>
     <Link to={path}>
        <div className={`flex items-center gap-2 ${className} dark:hover:bg-[#3f3f3f]`}>
          <Icon icon={icon} className="text-xl" />
          <span className={''} >{title}</span>
        </div>
     </Link>
    </>
  )
}