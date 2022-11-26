import React from "react";
import about_pic from "../assets/img/aboutUs_pic.jpg";
import styles from "./About.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.wrapper}></div>
        <img className={styles.aboutPhoto} src={about_pic} alt="aboutUs Pic" />
        <div className={styles.heading}>About Us</div>
      </div>
      <div className={styles.middle}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          corrupti fugit consequatur eveniet iusto vitae quae excepturi
          repudiandae minima maxime, enim voluptas quod aliquam pariatur maiores
          doloribus veniam deserunt, similique esse perferendis quis explicabo
          possimus repellendus! Fugiat obcaecati voluptatum autem itaque quaerat
          nihil dolor dolores explicabo maxime, quis labore laboriosam. Eveniet
          amet quae soluta a fugit, iste ipsum exercitationem eius, nisi ea
          atque nemo magni architecto tempore illum, harum aliquam asperiores.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo
          ipsa cumque nulla dolore voluptates. Quod perspiciatis, iste ab quam
          praesentium possimus exercitationem laudantium? Incidunt cumque beatae
          facere eaque temporibus quibusdam saepe quo, optio at. Quibusdam
          perferendis officia sed iste et. Ipsa, quam! Iusto autem incidunt
          dolore doloremque, quae sequi consequuntur aspernatur corporis sint
          enim eos sunt impedit culpa eum. Totam, soluta autem!
        </p>
      </div>
      <div className={styles.down}>
        <div className={styles.container}>
          <div className={styles.front + " " + styles.side}>
            <div className={styles.content}>
              <h1>Our Vision</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium, voluptatem. Incidunt dolorem itaque doloremque? Qui,
                facere perferendis deleniti itaque accusantium voluptatum esse
                ipsam totam? Dicta, veniam repellendus. Sed fuga voluptatem
                perferendis blanditiis beatae atque in? Maxime veniam
                perspiciatis ab laudantium.
              </p>
            </div>
          </div>
          <div className={styles.back + " " + styles.side}>
            <div className={styles.content}>
              <h1>Our Mission</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                error esse magnam id ducimus inventore quis similique, ipsum
                facere atque ullam est, laudantium repellat facilis amet earum!
                Placeat consequatur quibusdam cum, voluptatum mollitia sapiente
                nemo illo tenetur explicabo nam facilis animi recusandae harum
                voluptatem provident aliquam ipsa numquam qui dignissimos,
                expedita a modi ea distinctio ipsam! Laborum voluptates, sint
                minus pariatur commodi recusandae error, culpa non aspernatur
                nostrum amet? Dolorum nihil repudiandae impedit aspernatur
                itaque perferendis reprehenderit asperiores molestias placeat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
