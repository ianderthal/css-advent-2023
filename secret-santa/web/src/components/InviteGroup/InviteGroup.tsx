import Card from "../Card/Card"
import RoundButton from "../RoundButton/RoundButton"

const InviteGroup = () => {
  return (
    <div>
      <div className="label ml-5">Invite a friend or family member</div>
      <div className="bg-spanishGreen dark:bg-nileBlue flex items-center gap-5 p-4 mb-10 ml-5">
        <div className="field mb-0 relative flex-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="" />
        </div>
        <div className="field mb-0 relative flex-1">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" placeholder="" />
        </div>
        <RoundButton status="warning" />
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <Card
          avatar={{
            avatar: '/images/placeholder__avatar-01.png',
          }}
          name="Amy Dutton"
          email="amy@example.com"
          isCloseShowing={true}
        />
        <Card
          avatar={{
            avatar: '/images/placeholder__avatar-01.png',
          }}
          name="Amy Dutton"
          email="amy@example.com"
          isCloseShowing={true}
        />
        <Card
          avatar={{
            avatar: '/images/placeholder__avatar-01.png',
          }}
          name="Amy Dutton"
          email="amy@example.com"
          isCloseShowing={true}
        />
        <Card
          avatar={{
            avatar: '/images/placeholder__avatar-01.png',
          }}
          name="Amy Dutton"
          email="amy@example.com"
          isCloseShowing={true}
        />
      </div>
    </div>
  )
}

export default InviteGroup
