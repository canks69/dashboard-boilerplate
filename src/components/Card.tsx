import {ReactNode} from "react";

interface CardProps {
  children: ReactNode;

}
export const Card = ({ children }: CardProps) => {
  return (
    <div className="relative z-10 rounded-md shadow-xl  ring-1 ring-slate-900/5 divide-y divide-slate-100 my-auto xl:mt-18">
      {children}
    </div>
  );
};