import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import GetApp from '~/layouts/components/GetApp';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('conten')}> {children}</div>
                <div>
                   <GetApp />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
