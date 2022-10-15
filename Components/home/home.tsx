import React from "react";
import Link from "next/link";

import Styles from "./home.module.css";

function home() {
  return (
    <div>
      <section className={Styles.FirstSec}>
        <div className={Styles.imgCont}>
          <img className={Styles.img} src={"/draw.svg"} alt="" />
        </div>
        <div className={Styles.TextCon}>
          <h1>The Reactjs <span className={Styles.Colo}>Developer</span></h1>
        </div>
      </section>

      <section className={Styles.secondCont}>
        <div className={Styles.upp}>
          <div className={Styles.textheadCon}>
            <h1>Technologies</h1>
          </div>

          <div className={Styles.paraCon}>
            I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, and
            Web Hosting
          </div>
        </div>
      </section>

      <section className={Styles.thirdCont}>
        <div className={Styles.uppp}>
          <div className={Styles.ProjectCon}>
            <h1>Projects</h1>
          </div>
          <div className={Styles.Projects}>
            <p>
              I like to showcase my work and thus, you can see my projects hosted
              online
            </p>
          </div>
          <div className={Styles.buttonCon}>
            <button className={Styles.button}>
              <Link href="/project">Projects</Link>
            </button>
          </div>
        </div>
      </section>

      <section className={Styles.fourthCon}>
        <div className={Styles.upppp}>
          <div className={Styles.BlogCon}>
            <h1>Blogs</h1>
          </div>
          <div className={Styles.Blogdes}>
            <p>
              I like to showcase my work and thus, you can see my blogs hosted
              online
            </p>
          </div>
          <div className={Styles.buttonCont}>
            <button className={Styles.button1}>
              <Link href="/blogs">Blogs</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
