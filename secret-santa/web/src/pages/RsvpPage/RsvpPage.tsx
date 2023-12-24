import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import RsvpButton from 'src/components/RsvpButton/RsvpButton'

const RsvpPage = () => {
  return (
    <>
      <MetaTags title="RSVP" description="Rsvp page" />

      <HeaderWithRulers className="text-white" heading="YOU'RE INVITED TO" />

      <h1 className="page-title">Smith Christmas</h1>
      <h3 className="font-handwriting uppercase m-0 mb-10 p-0 text-3xl leading-none text-white text-center">Deceber 23, 2023</h3>

      <div className="flex justify-center gap-10">
        <RsvpButton className="bg-orangeRed text-white" icon="thumbsDown" heading="Regretfully Decline" />
        <RsvpButton className="bg-spanishGreen text-white" icon="thumbsUp" heading="I'll Be There!" />
      </div>
    </>
  )
}

export default RsvpPage
