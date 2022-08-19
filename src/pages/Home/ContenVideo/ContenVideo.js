import { useRef, useState, useEffect } from 'react';
import useElementOnScreen from './HandleVideo';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';


import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './VideoConten.module.scss';
import vid1 from '~/assets/images/vid1.mp4'



const cx = classNames.bind(styles);

function ContenVideo() {
  
  const [numberHeart, setnumberHeart] = useState(2022)
  const [colorHeart, setcolorHeart] = useState(false)
  const colortoggle = colorHeart ? 'active': null;
   
  const HandleHeart = () => { 

    setcolorHeart(colorHeart => !colorHeart)

    if(numberHeart <=  2022) {
      setnumberHeart(numberHeart + 1)
      
    } else {
      setnumberHeart(numberHeart - 1)
    }}
    
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

                    <FontAwesomeIcon className={cx('icon',`${colortoggle}`)} icon={faHeart} onClick={HandleHeart}/>
                       <div className={cx('number')}>{numberHeart}</div>

                    <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                       <div className={cx('number')}> 1111</div>

                        

                          <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                          <div className={cx('number')}> 1010</div>
                       
                </div>
            </div>
        );
    }

export default ContenVideo;
