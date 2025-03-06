import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode
} & ComponentProps<'button'>

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}>
      {children}
    </button>
  )
}