import {cva, VariantProps} from "class-variance-authority"
import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";
export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: [
        "hover:bg-secondary-hover",
        "dark:hover:bg-[#282828]",
      ],
      ghost: [
        "bg-transparent",
        "dark:bg-transparent",
        "hover:bg-secondary",
        "dark:hover:bg-gray-800",
        "dark:text-white",
        "text-slate-900",
      ],
      dark: [
        "bg-[#0f0f0f]",
        "dark:bg-transparent",
        "dark:hover:bg-[#3f3f3f]",
        "text-secondary",
      ],
      card: [
        "bg-secondary",
        "dark:bg-[#3f3f3f]",
        "hover:bg-secondary-hover",
        "dark:hover:bg-[#282828]",
        "text-white",
      ],
    },
    size: {
      default: [" rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  )
}
