import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useRef, useState, useEffect } from 'react';
import styles from './VideoConten.module.scss';
import useElementOnScreen from './HandleVideo';

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
                src='https://v16-webapp.tiktok.com/5c5ce64a852feff633609863dd3fc9c7/62fc7574/video/tos/maliva/tos-maliva-ve-0068c799-us/0f7628e760be46739360954adff6e532/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3566&bt=1783&cs=0&ds=3&ft=eXd.6Hk_Myq8ZasoOwe2NSkhml7Gb&mime_type=video_mp4&qs=0&rc=OGQ8aDRpN2Q4ZjQ7aTxnZUBpanFrdGQ6ZnZvZTMzZzczNEAxNmIxLWBjNmExYGE0M2EvYSMtZmo2cjRvMHFgLS1kMS9zcw%3D%3D&l=2022081622581101024524603622671F50&btag=80000'
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
