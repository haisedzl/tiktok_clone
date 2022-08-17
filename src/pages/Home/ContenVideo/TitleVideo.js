import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './VideoConten.module.scss';
import VideoPreview from './VideoPreview';

const cx = classNames.bind(styles);

function TitleVideo() {
    const renderAccountPreview = (props) => {
        return (
           <div tabIndex="-1" {...props}>
            <VideoPreview />
           </div>
          )}

    return (
        <div className={cx('title-conten')} tabIndex="-1">
            <img
                className={cx('img-conten')}
                src="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg"
                alt="avatar"
            ></img>
            <div className={cx('title-all')}>

                <Tippy 
                delay={[800, 700]}
                interactive
                offset={[-280, -75]}
                render={renderAccountPreview}
                >
                    <span className={cx('title-user')}>
                        <h3 className={cx('username')}>
                            <a href="/profile"> Haise Sasaki</a>
                        </h3>
                        <h4 className={cx('title')}>
                            <a href="/profile">Solo Leveling</a>
                        </h4>
                    </span>
                </Tippy>

                <span className={cx('hastag-conten')}>
                    <div>Mỗi ngày là một ngày vui :)</div>
                    <div className={cx('hastag-name')}> #vuive #xuhuong</div>
                </span>
                <div className={cx('mussic-conten')}>
                    <div>nhạc nền - Mỗi ngày là một ngày vui :3</div>
                </div>
                <Button outline className={cx('follow')}>
                    Follow
                </Button>
            </div>
        </div>
    )
}

export default TitleVideo;
