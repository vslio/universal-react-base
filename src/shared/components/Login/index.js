/**
 * Login component
 */
import React from 'react'
import style from './login.css'

export default () => (
  <div>
    <header className={style.header}>
      <h3 className={style.heading}>Login</h3>
      <span className={style.description}>Please enter your details to login.</span>
    </header>
    <form>
      <label className={style.label} htmlFor='login-email'>Email_</label>
      <input className={style.input} type='text' name='login-email' placeholder='Type in your email&hellip;'/>
      <label className={style.label} htmlFor='login-password'>Password_</label>
      <input className={style.input} type='password' name='login-password' placeholder='Type in your password&hellip;'/>
      <input className={style.submit} type='submit' value='Go!'/>
    </form>
  </div>
)
