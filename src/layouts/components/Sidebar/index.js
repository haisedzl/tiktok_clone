import classNames from 'classnames/bind';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icon';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import AccountFollow from './AccountFollow';
import Discover from './Discover';
import Footer from './Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <Menu>
                <h4 className={cx('search-title')}>Suggested accounts</h4>
                <AccountFollow />
                <AccountFollow />
                <AccountFollow />
                <AccountFollow />
                <AccountFollow />
                <div className={cx('see-all')}>See all</div>
            </Menu>
            <Menu>
                <h4 className={cx('search-title')}>Following accounts</h4>
                <span className={cx('title-follow')}>Accounts you follow will appear here</span>
            </Menu>
            <Menu>
                <h4 className={cx('search-title')}>Discover</h4>

                <Discover />
            </Menu>

            <Footer />
        </aside>
    );
}

export default Sidebar;
