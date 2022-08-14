import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children }) {
    return (
        <div className={cx('menu-total')}>
            <nav>{children}</nav>
        </div>
    );
}
Menu.prototype = {
    children: PropTypes.node.isRequired,
};

export default Menu;
