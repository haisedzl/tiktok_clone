import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import classNames from "classnames/bind";
import styles from "./Getapp.module.scss"

const cx = classNames.bind(styles)


function BackToTop() {

           const [backToTop, setBackToTop] = useState(false);
           useEffect(() => {
               window.addEventListener("scroll", () =>  {
                   if(window.scrollY > 50) {
                       setBackToTop(true)
                   } else {
                       setBackToTop(false)
                   }
               })
           }, [])
   
           const scrollUp = () => {
               window.scrollTo({
                   top: 0,
                   behavior: 'smooth',
               })
           }
    
           return ( 
               <div>
               { backToTop && (
                <div className={cx('up-top')}>
                           <button
                           className={cx('icon')}
                           onClick={scrollUp}>
                               <FontAwesomeIcon icon={faCircleArrowUp}/>
                           </button>
                           </div>
                       )}
                </div>
               );
           }
       

export default BackToTop;