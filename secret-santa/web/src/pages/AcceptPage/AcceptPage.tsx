import { Form } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import Upload from 'src/components/Upload/Upload'

const AcceptPage = () => {
  return (
    <>
      <MetaTags title="Accept" description="Accept page" />

      <h3 className="font-handwriting uppercase m-0 p-0 text-3xl leading-none text-white text-center">Awesome</h3>
      <HeaderWithRulers className="text-white" heading="Sign Up" />

      <Form className="w-full max-w-[660px] mx-auto relative">
        <div className="field">
          <ShowHidePassword label="Password" name="Password" />
        </div>
        <div className="field">
          <Upload />
        </div>
        <div className="field">
          <button type="submit">Submit</button>
        </div>


      </Form>

    </>
  )
}

export default AcceptPage
