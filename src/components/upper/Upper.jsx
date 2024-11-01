import styles from './upper.module.css'
import Curve from '../curve/Curve.jsx'


export default function Upper() {
    return (
        <div className={styles.Upper}>
            <nav className={styles.navBar}>
                <div className={styles.navBrand}>
                    <img src="./netflix-svgs/Netflix_2015_logo.svg" alt="netflix" />
                </div>
                <div className={styles.navLinks}>
                    <div className={styles.languagesBox}>
                        <div className={styles.translateImage}>
                            <img src="./select-box/translate.svg" alt="" />
                        </div>
                        <select name="selectBox" id={styles.selectBox}>
                            <option value="English">English</option>
                            <option value="Hindi">हिन्दी</option>
                        </select>
                    </div>
                    <div>
                        <a href="https://www.netflix.com/login">
                            <button className={styles.SubmitBtn}>Sign In</button>
                        </a>
                    </div>
                </div>
            </nav>
            <main className={styles.mainDiv}>
                <h2>Unlimited movies, TV shows and more</h2>
                <p className={styles.price}>Starts at ₹149. Cancel anytime.</p>
                <p className={styles.create}>Ready to watch? Enter your email to create or restart your membership</p>

                <div className={styles.startPlanBox}>
                    <div className={styles.emailBox}>
                        <input type="email" name="email" id={styles.email} placeholder='Email Address' />
                        {/* <label htmlFor="email">Email Address</label> */}
                    </div>
                    <button type="submit">Get Started</button>
                </div>
            </main>
            < Curve />
        </div>
    )
}