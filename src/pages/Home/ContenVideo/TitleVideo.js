import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './VideoConten.module.scss';

const cx = classNames.bind(styles);
function TitleVideo() {
    return (
        <div className={cx('title-conten')}>
            <img
                className={cx('img-conten')}
                src="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg"
                alt="avatar"
            ></img>
            <div className={cx('title-all')}>
                <span className={cx('title-user')}>
                    <h3 className={cx('username')}>
                        <a href="/profile"> Haise Sasaki</a>
                    </h3>
                    <h4 className={cx('title')}>
                        <a href="/profile">Solo Leveling</a>
                    </h4>
                </span>
                <span className={cx('hastag-conten')}>
                    <p>Mỗi ngày là một ngày vui :)</p>
                    <p className={cx('hastag-name')}> #vuive #xuhuong</p>
                </span>
                <div className={cx('mussic-conten')}>
                    <p>nhạc nền - Mỗi ngày là một ngày vui :3</p>
                </div>
                <Button outline className={cx('follow')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default TitleVideo;
