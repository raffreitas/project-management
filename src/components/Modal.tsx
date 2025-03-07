import { ReactNode, forwardRef } from "react"
import { createPortal } from "react-dom"
import Button from "./Button"

type ModalProps = {
  children: ReactNode,
  buttonCaption: string
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ children, buttonCaption }, ref) => {
  // const dialog = useRef<HTMLDialogElement>(null)

  // useImperativeHandle(ref, () => ({
  //   open: () => {
  //     dialog.current?.showModal()
  //   },
  //   close: () => {
  //     dialog.current?.close()
  //   }
  // }))

  return createPortal(
    <dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md mx-auto my-auto">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  )
})

export default Modal