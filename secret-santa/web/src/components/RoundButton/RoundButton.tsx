import Icon from "../Icon/Icon"

export interface RoundButtonProps {
  status: 'success' | 'warning' | 'error'
}

const RoundButton = ({ status }) => {
  return (
    <button className={`h-16 w-16 rounded-full center border-2 border-white status-${status}`}>
      <Icon id="plus" />
    </button>
  )
}

export default RoundButton
