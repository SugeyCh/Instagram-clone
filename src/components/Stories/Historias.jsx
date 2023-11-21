import UserStories from "./User-stories"
import Publications from "../Publications/Publication"

const Historias = () => {
  return(
    <>
      <div className="historias">
        <div className="his">
          <div className="history">
            <div className="op-his" >
              <UserStories />
            </div>
          </div>
          <Publications />
        </div>
      </div>
    </>
  )
}

export default Historias