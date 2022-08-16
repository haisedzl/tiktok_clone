import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import styles from "./Getapp.module.scss"
import { useEffect } from "react";

const cx = classNames.bind(styles)

function GetApp() {

    const HandleClick = ({ children, location: {pathname} }) => {
        useEffect(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }, [pathname])
    }
    return ( 
        <div className={cx('right-app')}>
            <span className={cx('get-app')}>
            <p> Get app </p>
            </span>
            <div className={cx('up-top')} onClick={HandleClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faCircleArrowUp}/>
            </div>
        </div>

     );
}

export default GetApp;