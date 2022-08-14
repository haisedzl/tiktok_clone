import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('Footer')}>
            <ul className={cx('title-footer')}>
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a>TikTok Browse</a>
                </li>
                <li>
                    <a>Newsroom</a>
                </li>
                <li>
                    <a>Careers</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
                <li>
                    <a>ByteDance</a>
                </li>
            </ul>
            <ul className={cx('title-footer')}>
                <li>
                    <a>TikTok for Good</a>
                </li>
                <li>
                    <a>Advertise</a>
                </li>
                <li>
                    <a>Developers</a>
                </li>
                <li>
                    <a>Transparency</a>
                </li>
                <li>
                    <a>TikTok Rewards</a>
                </li>
            </ul>
            <ul className={cx('title-footer')}>
                <li>
                    <a>Help</a>
                </li>
                <li>
                    <a>Safety</a>
                </li>
                <li>
                    <a>Terms</a>
                </li>
                <li>
                    <a>Privacy</a>
                </li>
                <li>
                    <a>Creator Portal</a>
                </li>
                <li>
                    <a>Community Guidelines</a>
                </li>
            </ul>
            <ul>© 2022 TikTok</ul>
        </div>
    );
}

export default Footer;
