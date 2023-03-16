import "./SignInForm.scss"

const SignInForm = () => {
    return (
      <>
<form action="action_page.php">
  <div class="container">
    <h2>SIGN IN</h2>
    <p>Sign in and start helping endangered species today!</p>


    <label for="Username"><b>Username</b></label>
    <input type="Username" placeholder="Username" name="Username" required />

    <label for="psw"><b>CPassword</b></label>
    <input type="password" placeholder="Password" name="psw" required />

    <div class="clearfix">
      <button type="submit" class="signupbtn">SIGN IN</button>
    </div>
  </div>
</form>
      </>
    )
  }
  
  export default SignInForm