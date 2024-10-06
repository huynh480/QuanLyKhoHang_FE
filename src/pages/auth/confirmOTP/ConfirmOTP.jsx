/* eslint-disable */
import React from 'react'

import './Confirm.css';
import Header from '../../../components/header/Header';

const ConfirmOTP = () => {
  return (
    <>
    <Header/>
    <div className="otp-container">
      <img src="https://img.icons8.com/fluency/100/000000/new-post.png" alt="Email Icon" />
      <h2>Mã OTP gồm 6 chữ số đã được gửi đến bạn qua email</h2>
      <input type="text" maxLength="6" placeholder="######" />
      <button>Tiếp</button>
      <p>Gửi lại OTP</p>
    </div>

    </>
  )
}

export default ConfirmOTP