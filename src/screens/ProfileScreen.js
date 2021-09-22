import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="profileScreen" >
            <Nav />
            <div className="profileScreen_body">
                <h1>Edit profile</h1>
                <div className="profileScreen_info">
                    <img src="https://p.kindpng.com/picc/s/116-1169050_avatar-michael-jordan-jersey-clip-art-michael-jordan.png" alt="" />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans (Current Plan: premium)</h3>
                            <button onClick={() => auth.signOut()} className="profileScreen_signOut" >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
