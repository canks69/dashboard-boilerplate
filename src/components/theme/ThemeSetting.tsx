import {Icon} from "@iconify/react";
import {Button} from "../Button.tsx";
import {useState} from "react";

export function ThemeSetting(){
  const [show, setShow] = useState(true)
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShow(!show)}
      >
        <Icon icon={`ant-design:setting-filled`} className="text-2xl"/>
      </Button>
      <div className={`absolute top-12 overflow-y-auto scrollbar-hidden right-16  rounded-md shadow-md transform duration-100 w-56 ${show && 'hidden'}`}>
      
      </div>
    </>
  );
}