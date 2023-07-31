import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/fibefire";

function ResetPassword() {

    const [email, setEmail] = useState('')
    const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }
    return (
        <div className="resetPassword-main">
            <input className="resetEmailInput" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <button className="resetBtn" type="button" onClick={triggerResetEmail}>Ripristina password</button>

        </div>
    )
}

export default ResetPassword;