import React from "react";
import Link from "next/link";
import Styles from "./vlogList.module.css";

interface IProps {
    vlogTitle: string;
    vlogDate: string;
    desCription: string;
    buttonLink1: string;
}

function projectList({
    vlogDate,
    vlogTitle,
    desCription,
    buttonLink1
}: IProps) {
    return (
        <>
            <section className={Styles.thirdCont}>
                <div className={Styles.uppp}>
                    <div className={Styles.ProjectCon}>
                        <h1>{vlogTitle}</h1>
                    </div>
                    <div className={Styles.Projects}>
                        <p>{vlogDate}</p>
                    </div>
                    <div className={Styles.Projects}>{desCription}</div>




                    <div className={Styles.buttonCon}>
                        <button className={Styles.button}>
                            <Link href={buttonLink1}>See Live</Link>
                        </button>
                    </div>

                </div>


            </section>
        </>
    );
}

export default projectList;

