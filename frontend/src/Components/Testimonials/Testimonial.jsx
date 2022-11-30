import React from "react";
import styles from "./Testimonial.module.css";
import testimonial_pic from "../../assets/img/testimonial_pic.jpg";
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
              <p className={styles.card_text}>
                If you do the job badly enough, sometimes you don't get asked to
                do it again.
              </p>
            </blockquote>
            <h3>Wisteria Ravenclaw</h3>
            <h4>Google Inc.</h4>
          </figcaption>
        </figure>
        <figure className={styles.snip1533}>
          <figcaption>
            <blockquote>
              <p className={styles.card_text}>
                I'm killing time while I wait for life to shower me with meaning
                and happiness.
              </p>
            </blockquote>
            <h3>Ursula Gurnmeister</h3>
            <h4>Facebook</h4>
          </figcaption>
        </figure>
        <figure className={styles.snip1533}>
          <figcaption>
            <blockquote>
              <p className={styles.card_text}>
                The only skills I have the patience to learn are those that have
                no real application in life.{" "}
              </p>
            </blockquote>
            <h3>Ingredia Nutrisha</h3>
            <h4>Twitter</h4>
          </figcaption>
        </figure>
      </div>

      <div className={styles.down}>
        <div className={styles.left}>
          <h1 className={styles.text_main}>Why Us?</h1>
          <p className={styles.text_top}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            consequatur repellendus ex perferendis! Quibusdam recusandae ea
            nostrum modi cupiditate laboriosam dolorem ipsum delectus rem
            voluptatum, commodi nisi est ad architecto.
          </p>
          <p className={styles.text_down}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            quisquam ea, assumenda dolor qui cupiditate sint veritatis nostrum
            necessitatibus facilis. Officiis a laborum repudiandae error facilis
            odit cumque adipisci vero illum veniam, magnam atque velit possimus
            ratione explicabo odio vel tenetur voluptatem saepe ea nulla ullam.
            Beatae sed similique, quo ipsa nobis accusantium distinctio debitis
            asperiores, corporis doloribus aperiam! Sit!
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl. Enim nunc
            </p>
            <h5 className={styles.card_name}>Celia Almeda</h5>
          </div>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl. Enim nunc
            </p>
            <h5 className={styles.card_name}>Celia Almeda</h5>
          </div>
          <div className={styles.card}>
            <span className={styles.card_comma}>&ldquo;</span>

            <p className={styles.card_text}>
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl. Enim nunc
            </p>
            <h5 className={styles.card_name}>Celia Almeda</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
