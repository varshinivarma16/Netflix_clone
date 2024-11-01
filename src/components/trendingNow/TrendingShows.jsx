import { useRef } from 'react';
import styles from './trendingShows.module.css';

import React, { useState, useEffect } from "react";

export default function TrendingShows() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const posterBoxRef = useRef(null);

    const scrollRight = () => {
        posterBoxRef.current.scrollBy({
            left: width * 0.8,
            behavior: "smooth"
        });
    };

    const scrollLeft = () => {
        posterBoxRef.current.scrollBy({
            left: -width * 0.8,
            behavior: "smooth"
        });
    };

    return (
        <div className={styles.TrendingShows}>
            {/* <div className={styles.curveDiv}>
                <div className={styles.curve}></div>
            </div> */}
            <div className={styles.trends}>
                <h1 className={styles.trendHeading}>Trending Now</h1>
                <div className={styles.inputs}>
                    <select name="country" id={styles.country}>
                        <option value="india">India</option>
                        <option value="global">Global</option>
                    </select>
                    <select name="type" id={styles.type}>
                        <option value="movies">Movies</option>
                        <option value="shows">Shows</option>
                    </select>
                </div>

                <div className={styles.posterBoxes}>
                    <button
                        className={`${styles.navigations} ${styles.navLeft}`}
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                    >
                        &lt;
                    </button>

                    <div className={styles.posters} ref={posterBoxRef}>
                        <div className={styles.poster}>
                            <img src='/trending-images/first.jpg' alt="first-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/second.jpg' alt="second-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/third.jpg' alt="third-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/fourth.jpg' alt="fourth-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/fifth.jpg' alt="fifth-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/sixth.jpg' alt="sixth-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/seventh.jpg' alt="seventh-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/eighth.jpg' alt="eighth-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/ninth.jpg' alt="ninth-trending" />
                        </div>
                        <div className={styles.poster}>
                            <img src='/trending-images/tenth.jpg' alt="tenth-trending" />
                        </div>
                    </div>

                    <button
                        className={`${styles.navigations} ${styles.navRight}`}
                        onClick={scrollRight}
                        aria-label="Scroll right"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
