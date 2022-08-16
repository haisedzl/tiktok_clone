import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";

import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://upanh123.com/wp-content/uploads/2020/12/tai-anh-anime-ve-lam-avatar10.jpg" alt="là một cái ảnh" ></img>
                    <Button primary> Follow</Button>
                </div>
                    <div className={cx('body')}>
                        <p className={cx('nickname')}>
                           <strong>Haise Sasaki</strong>
                           <FontAwesomeIcon className={cx('check')} icon={ faCheckCircle} />
                       </p>
                   <p className={cx('name')}>Solo Leveling</p>
                   <p className={cx('analytics')}>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Followers</span>
                            <strong className={cx('value')}>8.2M </strong>
                            <span className={cx('label')}>Likes</span>
                   </p>
                  
            </div>  
        </div>
     );
}

export default AccountPreview;