import React from 'react'
import './LoginScreen.css'

/*https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png​. below link for netflix logo */

function LoginScreen() {
    return (
        <div className="loginScreen" >
            <div className="loginScreen_background" >

                <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />

                <button className="loginScreen_button" >Sign In</button>

                <div className="loginScreen_gradient" > </div>

                <div className="loginScreen_body" >
                    <>
                        <h1>Unlimited films, TV programs and more.</h1>
                        <h2>Watch anywhere. cancel anytime</h2>
                        <h3>Ready to watch? Enter yout email to create or restart your membership</h3>

                        <div className="loginScreen_input" >
                            <form>
                                <input type="email" placeholder="Enter your e-mail address"  />
                                <button className="loginScreen_getStarted" >GetStarted</button>
                            </form>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
