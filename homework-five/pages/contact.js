export const contact = `
<div class="contact">
    <div class="hero">
        <div class="hero__content">
        <h2>We're Here to Help</h2>
        <h1>Get in Touch</h1>
        </div>
    </div>
    <div class="form">
        <div class="form__container">
        <p class="form__desc">
            Whether you have a gear question, need help planning a trip, or
            just want to say hello — our team responds within one business
            day.
        </p>
        <form>
            <div class="form__name-email">
            <div>
                <label for="full-name">
                Full Name <span class="orange">*</span>
                </label>
                <input
                size="1"
                type="text"
                name="full-name"
                placeholder="Jane Smith"
                />
            </div>
            <div>
                <label for="email"
                >Email Address <span class="orange">*</span>
                </label>
                <input
                size="1"
                type="text"
                name="email"
                placeholder="jane@example.com"
                />
            </div>
            </div>
            <label for="number"> Phone Number </label>
            <input type="text" name="phone" placeholder="(303) 555-0000" />
            <label for="subject">
            Subject <span class="orange">*</span>
            </label>
            <input type="text" name="subject" />
            <label for="message">
            Message <span class="orange">*</span>
            </label>
            <textarea
            size="1"
            type="text"
            name="message"
            placeholder="Tell us what's on your mind — the more detail, the better we can help."
            ></textarea>
            <button>Send Message →</button>
        </form>
        <div class="form__info">
            <h1>Store Information</h1>
            <div class="form__info__data">
            <img src="./src/assets/location.svg" alt="" />
            <p>4821 Trailhead Blvd<br />Boulder, CO 80301</p>
            </div>
            <div class="form__info__data">
            <img src="./src/assets/phone.svg" alt="" />
            <p>(303) 555-0182</p>
            </div>
            <div class="form__info__data">
            <img src="./src/assets/email.svg" alt="" />
            <p>hello@summitridge.com</p>
            </div>
            <h1>Store Hours</h1>
            <div class="form__info__hours__container">
            <p class="form__info__hours__day">Mon – Fri</p>
            <p class="form__info__hours__time">8am – 8pm</p>
            </div>
            <div class="form__info__hours__container">
            <p class="form__info__hours__day">Saturday</p>
            <p class="form__info__hours__time">7am – 9pm</p>
            </div>
            <div class="form__info__hours__container">
            <p class="form__info__hours__day">Sunday</p>
            <p class="form__info__hours__time">9am – 6pm</p>
            </div>
            <div class="form__info__hours__open-now">
            <div class="big-dot"></div>
            <p>Open Now</p>
            </div>
            <div class="form__info__map">
            <img src="./src/assets/location.svg" alt="" />
            <h3>Boulder, CO</h3>
            <p>Click to open in Maps</p>
            </div>
            <h1>Follow Along</h1>
            <div class="form__info__links">
            <a href="https://www.instagram.com/" target="_blank">
                <img src="./src/assets/instagram-light.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img src="./src/assets/facebook-light.svg" alt="" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
                <img src="./src/assets/youtube-light.svg" alt="" />
            </a>
            <a href="https://www.twitter.com/" target="_blank">
                <img src="./src/assets/twitter-light.svg" alt="" />
            </a>
            </div>
        </div>
        </div>
    </div>
    <div class="faqs">
        <div class="faqs__container">
        <h2>Common Questions</h2>
        <h1>FAQs</h1>
        <div class="faqs__faqs">
            <div class="faqs__faqs__faq">
            <p>Do you offer gear rentals?</p>
            <img src="./src/assets/down.svg" alt="" />
            </div>
            <div class="faqs__faqs__faq">
            <p>What is your return policy?</p>
            <img src="./src/assets/down.svg" alt="" />
            </div>
            <div class="faqs__faqs__faq">
            <p>Do you price-match competitors?</p>
            <img src="./src/assets/down.svg" alt="" />
            </div>
            <div class="faqs__faqs__faq">
            <p>Can I get gear fitted before purchasing?</p>
            <img src="./src/assets/down.svg" alt="" />
            </div>
            <div class="faqs__faqs__faq">
            <p>Do you ship internationally?</p>
            <img src="./src/assets/down.svg" alt="" />
            </div>
        </div>
        </div>
    </div>
</div>
`;
