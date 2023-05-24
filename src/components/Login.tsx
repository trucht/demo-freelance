import "./Login.css";

export default function Login() {
  return (
    <div class="login">
      <div class="login-container">
        <div class="switches-container">
          <input
            type="radio"
            id="switchLogin"
            name="switchPlan"
            value="Login"
            checked
          />
          <input
            type="radio"
            id="switchSignUp"
            name="switchPlan"
            value="SignUp"
          />
          <label for="switchLogin">login</label>
          <label for="switchSignUp">sign up</label>
          <div class="switch-wrapper">
            <div class="switch">
              <div>login</div>
              <div>sign up</div>
            </div>
          </div>
        </div>
      </div>
      <form id="loginForm">
        <div>
          <label for="username">First name:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="example@plah.com"
          />
        </div>
        <div>
          <label for="password">Last name:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="**********"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
