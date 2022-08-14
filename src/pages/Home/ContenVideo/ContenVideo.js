import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import styles from './VideoConten.module.scss';
import useElementOnScreen from './HandleVideo';

const cx = classNames.bind(styles);

function ContenVideo() {
    const videoRef = useRef();
    const [playing, setPlaying] = useState(true);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisibile = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisibile) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisibile]);

    return (
        <div className={cx('conten-video')}>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className={cx('video')}
                loop
                src="https://v16-webapp.tiktok.com/41013765f32b655c2e33b3bf41ec0490/62f64588/video/tos/maliva/tos-maliva-ve-0068c799-us/7b88a8c83b6242b69b6ec54f06cd5f8a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1686&bt=843&cs=0&ds=3&ft=eXd.6Hk_Myq8ZBsyHwe2NgCQml7Gb&mime_type=video_mp4&qs=0&rc=ZDtoOzM8OzhoaDg7O2Y6aUBpM3Y5Zjs6ZnE7ZTMzZzczNEAuM2A1NmAxNTYxYGJfLV9gYSNtYG5gcjQwZG5gLS1kMS9zcw%3D%3D&l=202208120620140102510031480301C254&btag=80000"
            />
            <div className={cx('icon-conten')}>
                <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                <div className={cx('number')}> 2222</div>
                <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                <div className={cx('number')}> 1111</div>

                <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                <div className={cx('number')}> 1010</div>
            </div>
        </div>
    );
}

export default ContenVideo;
