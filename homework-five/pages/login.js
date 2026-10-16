export const login = `
<div class="account">
    <div class="hero">
        <div class="hero__content">
        <h2>Back to the Trail</h2>
        <h1>Welcome Back</h1>
        </div>
    </div>
    <div class="form">
        <div class="form__container">
            <form id="login-form" class="form__form">
                <h1>Ready for your next adventure?</h1>
                <p>
                Log in to Summit Ridge and get back to finding the gear for
                wherever the trail takes you.
                </p>
                <label for="email"
                >Email Address <span class="orange">*</span></label
                >
                <input
                type="text"
                id="login-email"
                placeholder="jane@example.com"
                />
                <label for="password"
                >Password <span class="orange">*</span></label
                >
                <input
                type="password"
                id="login-password"
                placeholder="••••••••••••"
                />
                <div id="toast"></div>
                <button type="submit">Login →</button>
                <div class="form__link">
                Don't have an account? <a id="signup-link">Sign Up</a>
                </div>
            </form>
            <div class="form__description">
                <img src="./src/assets/hero.jpg" alt="" />
                <h2>BOULDER, CO · EST. 1998</h2>
                <h1>Where the Trail Begins.</h1>
                <p>
                Premium outdoor gear and expert guidance for every adventure —
                from your first summit to your hundredth.
                </p>
            </div>
        </div>
    </div>
</div>
`;
