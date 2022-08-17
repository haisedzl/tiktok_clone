import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import styles from './VideoConten.module.scss';
import useElementOnScreen from './HandleVideo';
import vid1 from '~/assets/images/vid1.mp4'

const cx = classNames.bind(styles);

function ContenVideo() {

    const videoRef = useRef();

    const [playing, setPlaying] = useState(false);

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
          rootMargin: "0px",
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
                    src={vid1}
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
