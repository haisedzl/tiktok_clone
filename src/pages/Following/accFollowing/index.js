import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Accfollowing.module.scss';
import vide2 from '~/assets/images/vide2.mp4';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccFollowing() {
    const videoRef = useRef();
    const [move, setMove] = useState(false);

    const HandleMove = () => {
        if (move) {
            videoRef.current.pause();
            setMove(false);
        } else {
            videoRef.current.play();
            setMove(true);
        }
    };

    return (
        <div className={cx('wapper')}>
            <video muted loop ref={videoRef} className={cx('video')} src={vide2} onMouseMove={HandleMove} />

            <div className={cx('title-all')}>
                <img
                    className={cx('avatar')}
                    src="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg"
                    alt="avatar"
                ></img>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>Haise Sasaki</span>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </h4>
                    <span className={cx('username')}>Solo Leveling</span>
                </div>

                <Button primary>Follow</Button>
            </div>
        </div>
    );
}

export default AccFollowing;
