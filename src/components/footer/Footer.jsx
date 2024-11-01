import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.footerStatement}>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className={styles.startPlanBox}>
                    <div className={styles.emailBox}>
                        <input type="email" name="email" id={styles.email} placeholder='Email Address' />
                        {/* <label htmlFor="email">Email Address</label> */}
                    </div>
                    <button type="submit">Get Started &gt;</button>
                </div>
            </div>

            <div className={styles.help}>
                <p className={styles.helpStatement}>Questions? Call 000-800-919-1694</p>
                <div className={styles.wrapper}>
                    <ul className={styles.anchers}>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Help Centre</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="">Media Center</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Cookie Preferences</a></li>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Speed Test</a></li>
                        <li><a href="">Legal Notice</a></li>
                        <li><a href="">Only on Netflix</a></li>
                    </ul>
                </div>
                <div className={styles.languagesBox}>
                    <div className={styles.translateImage}>
                        <img src="./select-box/translate.svg" alt="" />
                    </div>
                    <select name="selectBox" id={styles.selectBox}>
                        <option value="English">English</option>
                        <option value="Hindi">हिन्दी</option>
                    </select>
                </div>
                <div className={styles.name}>
                    <p>Netflix India</p>
                </div>
            </div>
        </div>
    )
}