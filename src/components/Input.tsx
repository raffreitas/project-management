import { ComponentProps, forwardRef, Ref } from "react"

type InputProps = {
  label: string
  textarea?: boolean,
} & (ComponentProps<'input'> | ComponentProps<'textarea'>)

const Input = forwardRef(function Input({ label, textarea = false, ...props }: InputProps, ref: Ref<HTMLInputElement | HTMLTextAreaElement>) {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea ?
        (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            className={classes}
            {...props as ComponentProps<'textarea'>}
          />
        )
        : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            className={classes}
            {...props as ComponentProps<'input'>}
          />
        )
      }
    </p>
  )
})

export default Input