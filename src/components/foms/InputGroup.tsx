import React from "react";
import {Icon} from "@iconify/react";
import {ButtonLink} from "./ButtonLink.tsx";

interface InputGroupProps {
  label: string;
  name: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  placeholder?: string;
  error?: string;
}

export const InputGroup: React.FC<InputGroupProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const newType = props.type === "password" && showPassword ? "text" : props.type

  return (
    <div className={"block text-sm mb-3"}>
      <span className={"text-gray-700 dark:text-gray-400"}>{props.label}</span>
      <div className="relative">
        {props.icon && (
          <div className="absolute inset-y-0 flex p-3">
            <Icon icon={props.icon} className={"w-4 h-4"}/>
          </div>
        )}
        <input
          type={newType}
          className={`block w-full mt-1 p-2 ${props.icon && 'pl-8'} border text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray border-gray-300 rounded-md ${props.error ? "border-red-500" : ""} `}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {props.type === "password" && (
          <ButtonLink className={"absolute pr-3"} onClick={() => setShowPassword(!showPassword)}>
            <Icon icon={`bi:eye${showPassword ? "-slash" : ""}`} className={"w-4 h-4"}/>
          </ButtonLink>
          // <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          //   <Icon icon={"bi:eye"} className={"w-4 h-4"} />
          // </div>
        )}
        {props.error && <i className={"ml-1 text-red-500 text-xs"}>{props.error}</i>}
      </div>
    </div>
  )
}