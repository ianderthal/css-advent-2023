const HeaderWithRulers = ({heading, className }) => {
  return (
    <div className={`with-rulers font-condensed text-7xl uppercase ${className}`}>
      {heading}
    </div>
  )
}

export default HeaderWithRulers
