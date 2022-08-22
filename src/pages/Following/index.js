import classNames from 'classnames/bind';
import styles from './Following.module.scss'

const cx = classNames.bind(styles)

function Following() {
    return <h2 className={cx('wapper')}>Trang Follow </h2>;
}

export default Following;
