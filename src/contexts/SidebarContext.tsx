import {createContext, ReactNode, useContext, useState, useEffect} from "react";

type SidebarContextType = {
  isLargeOpen: boolean
  isSmallOpen: boolean
  toggle: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType | null>(null)
export function useSidebarContext() {
  const value = useContext(SidebarContext)
  if (value == null) throw Error("Cannot use outside of SidebarProvider")
  
  return value
}

interface SidebarProviderProps {
  children: ReactNode;
}
export function SidebarProvider({ children }: SidebarProviderProps) {
  const  root = document.documentElement;
  const [isLargeOpen, setIsLargeOpen] = useState(true)
  const [isSmallOpen, setIsSmallOpen] = useState(false)
  root.setAttribute("class", localStorage.getItem('theme') || 'default');
  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setIsSmallOpen(false)
    }
    
    window.addEventListener("resize", handler)
    
    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])
  
  function isScreenSmall() {
    return window.innerWidth < 1024
  }
  
  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen(s => !s)
    } else {
      setIsLargeOpen(l => !l)
    }
  }
  
  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false)
    } else {
      setIsLargeOpen(false)
    }
  }
  
  return (
    <SidebarContext.Provider
      value={{
        isLargeOpen,
        isSmallOpen,
        toggle,
        close,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}