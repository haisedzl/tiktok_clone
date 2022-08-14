import styles from './Discover.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('name-mussic')}>
            <p className={cx('mussic')}>#suthatla</p>
            <p className={cx('mussic')}># mackedoiiiii</p>
            <p className={cx('mussic')}># sansangthaydoi</p>
            <p className={cx('mussic')}>#Yêu Đơn Phương Là Gì (MEE Remix)</p>
            <p className={cx('mussic')}>#Về Nghe Mẹ Ru NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàn</p>
            <p className={cx('mussic')}>#Thiên Thần Tình Yêu - RICKY STAR</p>
            <p className={cx('mussic')}>#Thằng Hầu (Thái Hoàng Remix) -- [Short Version]</p>
        </div>
    );
}

export default Discover;
