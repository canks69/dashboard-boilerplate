interface ButtonLinkProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <button className={`inset-y-0 right-0 flex items-center ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}