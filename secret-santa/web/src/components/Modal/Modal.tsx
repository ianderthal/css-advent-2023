import Icon from "../Icon/Icon"
import Overlay from "../Overlay/Overlay"

const Modal = ({children, status}) => {
  return (
    <div className="h-screen w-screen center fixed inset-0">
      {/* overlay */}
      <Overlay />
      {/* modal */}
      <div className={`relative max-w-[735px] w-full border-[6px] border-white px-20 py-12 status-${status}`}>
        <button className="absolute right-6 top-6">
          <Icon id="close" size={32} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
