
const SignUpForm = () => {
    return (
      <>
<form action="action_page.php">
  <div class="container">
    <h2>SIGN UP!</h2>
    <p>Sign up and start helping endagered species today!</p>

    <label for="Name"><b>Name</b></label>
    <input type="text" placeholder="Name" name="Name" required />

    <label for="Username"><b>Choose a Username</b></label>
    <input type="Username" placeholder="Username" name="Username" required />

    <label for="psw"><b>Choose a Password</b></label>
    <input type="password" placeholder="Password" name="psw" required />

    <div class="clearfix">
      <button type="submit" class="signupbtn">SIGN UP!</button>
    </div>
  </div>
</form>
      </>
    )
  }
  
  export default SignUpForm