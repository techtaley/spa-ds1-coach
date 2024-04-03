import MembershipComponent from "../membership/MembershipComponent"
import './../../styles/variables/variables.scss'

//import './registerModal.css'

export const RegisterModal = () => {
  return (
    <aside className="modal-container">
        <div className="modal">
            <h1 className="register">Create an Account</h1>
            <MembershipComponent />
        </div>
    </aside>
  )
}
