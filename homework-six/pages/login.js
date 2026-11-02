export default function login() {
  return `
    <div class="login">
        <div class="login__container">
            <div class="login__column">
            <h2>Login Here!</h2>
            <div class="input-box">
                <label for="email">Email Address</label>
                <input id="login-email" name="email" type="email" />
            </div>
            <div class="input-box">
                <label for="password">Password</label>
                <input id="login-password" name="password" type="password" />
            </div>
            <button>Login</button>
            </div>
            <div class="login__column">
            <p>Don't have an account?</p>
            <h2>Sign Up!</h2>
            <div class="input-box">
                <label for="first-name">First Name</label>
                <input id="signup-first-name" name="first-name" type="text" />
            </div>
            <div class="input-box">
                <label for="last-name">Last Name</label>
                <input id="signup-last-name" name="last-name" type="text" />
            </div>
            <div class="input-box">
                <label for="email">Email Address</label>
                <input id="signup-email" name="email" type="email" />
            </div>
            <div class="input-box">
                <label for="password">Password</label>
                <input id="signup-password" name="password" type="password" />
            </div>
            <button>Sign Up</button>
            </div>
        </div>
    </div>
  `;
}
