const SignIn = ()=> {
    return ( 
     <div className="Sign-in">
      
      <form style={{}} className="formTop">
      <h1 style={{marginBottom:'1rem'}}>Welcome !</h1>
        <input style={{width: '20rem', height:'3rem', minWidth:'15rem',  borderRadius: '0.4rem', outline:'none'}} type="text" placeholder="username..." /> 
        <input style={{width: '20rem', height:'3rem', minWidth:'15rem', borderRadius: '0.4rem', outline: 'none', borderRadius: '0.4rem', outline: 'none', marginTop:'1rem', marginBottom:'1rem'}} type="text" placeholder="password" />
        <button className="login">Login</button>
      </form>
    </div>
    )
}
export default SignIn;