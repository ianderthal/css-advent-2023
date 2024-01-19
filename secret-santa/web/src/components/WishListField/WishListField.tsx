import { number } from "prop-types"
import RoundButton from "../RoundButton/RoundButton"
import type { RoundButtonProps } from "../RoundButton/RoundButton"

interface WishListFieldProps {
  name: string
  number: number
  roundButton: RoundButtonProps
}

const WishListField = ({ name, number, roundButton}: WishListFieldProps) => {
  return (
    <div className="grid grid-cols-2 items-center gap-x-5 gap-y-2">
      <div className="flex items-center bg-white">
        <div>
          <label htmlFor={name} className="text-3XL pl-8 pr-5">
            {number}
          </label>
        </div>
        <input type="text" id={name} name={name} className="font-bold outline-none" />        
      </div>
      <RoundButton {...roundButton} />
      <div className="relative flex items-start gap-2 pl-8">
        <img src="/images/l-bracket.svg" alt="bracket" />
        <div className="flex flex-1 items-center bg-white">
          <div className="px-6">
            <label htmlFor={`${name}-url`}>URL</label>
          </div>
          <input type="url" id="url" name={`${name}-url`} className="short flex-1" />
        </div>
      </div>
    </div>
  )
}

export default WishListField
