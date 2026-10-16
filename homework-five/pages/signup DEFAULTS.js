export const signup = `
<div class="account">
    <div class="hero">
        <div class="hero__content">
        <h2>Your Next Adventure</h2>
        <h1>Join Summit Ridge</h1>
        </div>
    </div>
    <div class="form">
        <div class="form__container">
            <form id="signup-form" class="form__form">
                <h1>A new adventure starts here.</h1>
                <p>
                Create your account for trail-ready gear and expert guidance
                from the Summit Ridge crew.
                </p>
                <p class="required">All fields are required.</p>
                <div class="form__name">
                <div class="form__name__name">
                    <label for="first-name"
                    >First Name <span class="orange">*</span></label
                    >
                    <input
                
                value="Katie"

                    size="1"
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Jane"
                    />
                </div>
                <div class="form__name__name">
                    <label for="last-name"
                    >Last Name <span class="orange">*</span></label
                    >
                    <input
                
                value="Afterimage"

                    size="1"
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last name"
                    />
                </div>
                </div>
                <label for="email"
                >Email Address <span class="orange">*</span></label
                >
                <input

                value="katieafterimage@katie.com"

                type="text"
                name="email"
                id="signup-email"
                placeholder="jane@example.com"
                />
                <label for="password"
                >Password <span class="orange">*</span></label
                >
                <input
                
                value="password"

                type="password"
                name="password"
                id="signup-password"
                placeholder="••••••••••••"
                />
                <label for="confirm-password"
                >Confirm Password <span class="orange">*</span></label
                >
                <input
                
                value="password"

                type="password"
                name="confirm-password"
                id="signup-confirm-password"
                placeholder="Re-enter your password"
                />
                <div id="toast"></div>
                <button type="submit">Create Account →</button>
                <div class="form__link">
                Already have an account? <a id="login-link">Login</a>
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
