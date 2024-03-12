import {Link} from "react-router-dom";

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  to?: string;
}

export const Card = (props: CardProps) => {
  return (
    props.to ? (
      <Link to={props.to}>
        <div className={`flex items-center p-4 bg-white border rounded-lg shadow-xs dark:border-none dark:bg-gray-800`}>
          {props.title && (
            <h1 className="text-lg font-semibold">{props.title}</h1>
          )}
          {props.children}
        </div>
      </Link>
    ) : (
      <div
        className={`flex items-center p-4 bg-white border rounded-lg shadow-xs dark:border-none dark:bg-gray-800 w-full`}>
        {props.title && (
          <h1 className="text-lg font-semibold">{props.title}</h1>
        )}
        {props.children}
      </div>
    )
  )
}