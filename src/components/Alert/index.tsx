import React, {FC} from "react"

type Props = {
  type?: 'info' | 'success' | 'warning' | 'danger'
}

const Alert: FC<Props> = ({type}) => {
  return (
    <>
      <div className="alert alert-info">
        <div className="container">
          <div className="alert-icon">
            <i className="material-icons">info_outline</i>
          </div>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="material-icons">clear</i></span>
          </button>
          <b>Info alert:</b> You&apos;ve got some friends nearby, stop looking at your phone and find them...
        </div>
      </div>
      <div className="alert alert-success">
        <div className="container">
          <div className="alert-icon">
            <i className="material-icons">check</i>
          </div>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="material-icons">clear</i></span>
          </button>
          <b>Success Alert:</b> Yuhuuu! You&apos;ve got your $11.99 album from The Weeknd
        </div>
      </div>
      <div className="alert alert-warning">
        <div className="container">
          <div className="alert-icon">
            <i className="material-icons">warning</i>
          </div>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="material-icons">clear</i></span>
          </button>
          <b>Warning Alert:</b> Hey, it looks like you still have the &quot;copyright &#xA9; 2015&quot; in your footer.
          Please update it!
        </div>
      </div>
      <div className="alert alert-danger">
        <div className="container">
          <div className="alert-icon">
            <i className="material-icons">error_outline</i>
          </div>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"><i className="material-icons">clear</i></span>
          </button>
          <b>Error Alert:</b> Damn man! You screwed up the server this time. You should find a good excuse for your
          Boss...
        </div>
      </div>
    </>
  )
}

export default Alert