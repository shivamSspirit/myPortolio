import React from "react";
import Link from "next/link";
import Styles from "./projectList.module.css";

interface IProps {
    projectTitle: string;
    projectDate: string;
    desCription: string;
    buttonLink1: string;
    buttonLink2: string;
}

function projectList({
    projectDate,
    projectTitle,
    desCription,
    buttonLink1,
    buttonLink2,
}: IProps) {
    return (
        <>
            <section className={Styles.thirdCont}>
                <div className={Styles.uppp}>
                    <div className={Styles.ProjectCon}>
                        <h1>{projectTitle}</h1>
                    </div>
                    <div className={Styles.Projects}>
                        <p>{projectDate}</p>
                    </div>
                    <div className={Styles.Projects}>{desCription}</div>




                    <div className={Styles.buttonCon}>
                        <button className={Styles.button}>
                            <Link href={buttonLink1}>See Live</Link>
                        </button>

                        <button className={Styles.button}>
                            <Link href={buttonLink2}>See Source</Link>
                        </button>
                    </div>

                </div>


            </section>
        </>
    );
}

export default projectList;
