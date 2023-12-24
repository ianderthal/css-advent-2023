import Icon from "../Icon/Icon"

const RsvpButton = ({ className, heading, icon }) => {
  return (
    <button className="h-[115px] max-w-[300px] bg-white text-left text-3xl font-bold leading-none tracking-tight relative pl-[72px] pr-[72px] ml-[72px]">
      <div className={`center h-[132px] w-[132px] rounded-full border-[6px] border-white
      ${className} absolute -left-[72px] -top-2`}>
        <Icon id={icon} size={72}/>
      </div>
      {heading}
    </button>
  )
}

export default RsvpButton
