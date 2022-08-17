import classNames from "classnames/bind";
import styles from "./Getapp.module.scss"
import BackToTop from './BackToTop'



const cx = classNames.bind(styles)

function GetApp() {

        return ( 
            <div className={cx('right-app')}>
                <span className={cx('get-app')}>
                    <p> Get app </p>
                </span>
                   <BackToTop/>
            </div>           
            );
        }
    
export default GetApp;