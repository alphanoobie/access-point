import React from "react";
import styles from "./Testimonial.module.css";
import testimonial_pic from "../../assets/img/testimonial_main.jpg";
const Testimonial = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.wrappertesti}></div>
        <img
          className={styles.testimonialPhoto}
          src={testimonial_pic}
          alt="Testimonial main Pic"
        />
        <div className={styles.heading}>Testimonials</div>
      </div>
      <div className={styles.middle}>
        <figure className={styles.snip1533}>
          <figcaption>
            <blockquote>
              <p className={styles.topcard_text}>
                A big thanks for the support provided by the company. Hope to
                witness continued dedication in future!
              </p>
            </blockquote>
            <h3>ICICI Prudentials</h3>
            {/* <h4 className={styles.card_company}>Google Inc.</h4> */}
          </figcaption>
        </figure>
        <figure className={styles.snip1533}>
          <figcaption>
            <blockquote>
              <p className={styles.topcard_text}>
                This is to inform you that the work done at sanchar nagar branch
                was great. It was completed on time and instantly with good
                furnishing. Keep up the good work.
              </p>
            </blockquote>
            <h3> AXIS BANK</h3>
            {/* <h4 className={styles.card_company}>AXIS BANK</h4> */}
          </figcaption>
        </figure>
        <figure className={styles.snip1533}>
          <figcaption>
            <blockquote>
              <p className={styles.topcard_text}>
                This is to express sincere gratitude towards your efforts in
                resolving our issues promptly. The company's approach towards
                responding and following up until issue was resolved was
                commendable. Keep up the good work and best wishes.
              </p>
            </blockquote>
            <h3>Yes Bank</h3>
            {/* <h4 className={styles.card_company}>Twitter</h4> */}
          </figcaption>
        </figure>
      </div>

      <div className={styles.down}>
        <div className={styles.left}>
          <h1 className={styles.text_main}>Why Us?</h1>
          <p className={styles.text_top}>
            We are India's most Customer Centric company in repair and
            maintenance industry by exceeding the Customer's expectations and
            implied needs and fly off their worries by rendering quality
            services On time, All the time and Every time.
          </p>
          <p className={styles.text_down}>
            We take our responsibilities to you seriously, and it shows in all
            our services that we offer. Rated five stars, we've been given a 97%
            positive service rating by all our clients. Our professionals are
            here to take care of you, and we work hard to find new ways of
            making your experience with us nothing but exceptional.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              Friendly and Professional Folks! Access Point Plumbing Service was
              great. We had an emergency, and they got to us quickly and helped
              us through it. We’ve used them in the past and will definitely use
              them again in the future, and we recommend them to our friends.
            </p>
            <h5 className={styles.card_name}>Mark</h5>
          </div>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              Access Point recently completed the interior and exterior of our
              entire house. We’re very happy with the results, and the house
              looks great. They were professional and friendly throughout. We
              highly recommend them.
            </p>
            <h5 className={styles.card_name}>Ana</h5>
          </div>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              What a great team! They were able to fix what we needed fast!
              Amazing electrician with a job well done! I would highly recommend
              them!
            </p>
            <h5 className={styles.card_name}>Atharva Singh</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
