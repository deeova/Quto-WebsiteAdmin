import React from 'react'
import './Profile.css';
function Profile() {
    return (
        <div className="profile">
            <img className="img" src="images/Landing-images.png" alt="Logo" />
            <span>Takut datang ke Restourant?</span>
            <p>Quto hadir untuk kami pesan makanan lebih aman, mudah dan cepat</p>
            <div className="button-area">
                <span className="button">Sign-In</span>
                <span className="button">Log-In</span>
            </div>
        </div>
    )
}

export default Profile
