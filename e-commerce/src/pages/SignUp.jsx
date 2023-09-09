import React from 'react'

export const SignUp = () => {
  return (
    <div>
      <form className='createAccount'>
        <div className="Account">
        <h1 className="headerSignUp">Create An Account</h1>
        <hr />
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='Enter First Name' />
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Enter Last Name' />
        <label htmlFor="">Email Address</label>
        <input type="text" placeholder='Enter Email Address' />
        <label htmlFor="">Phone Number</label>
        <input type="text" placeholder='Enter Phone Number' />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter Password' />
        </div>

        <div className='container'>
      <button className="create">Create an Account</button>
      </div>
      <p className='paragraphPrivacy'>By signing up you accept our <a href="#" className='linkPrivacy'>terms and conditions<br/>
& privacy policy</a></p>

<div className="log">
  <p>Already have an Account?</p>
  <button className="logBtn">Login</button>
</div>
      </form>
    </div>
  )
}
