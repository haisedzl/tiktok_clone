import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import AccFollowing from './accFollowing';

const cx = classNames.bind(styles);

function Following() {
    return (
        <h2 className={cx('wapper')}>
            <AccFollowing />
            <AccFollowing />
            <AccFollowing />
            <AccFollowing />
            <AccFollowing />
            <AccFollowing />
            <AccFollowing />
        </h2>
    );
}

export default Following;
