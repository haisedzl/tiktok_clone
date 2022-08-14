import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountFollow.module.scss';

const cx = classNames.bind(styles);

function AccountFollow() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avarta')}
                src="https://upanh123.com/wp-content/uploads/2020/12/tai-anh-anime-ve-lam-avatar10.jpg"
                alt="Avarta"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Haise Sasaki</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Solo Leveling</span>
            </div>
        </div>
    );
}
export default AccountFollow;
