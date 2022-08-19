import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';


import classNames from 'classnames/bind';
import styles from './AccountFollow.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountFollow() {

    const renderAccountPreview = (props) => {
        return (
           <div tabIndex="-1" {...props}>
                <PopperWrapper>
                <AccountPreview/>
                </PopperWrapper>
           </div>
          )}
    return (  
          // use div để ko warrning tippy
     <div>   
          <Tippy
          delay={[700, 0]}
          interactive
          placement="bottom"
          render={renderAccountPreview}
          >
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
          </Tippy>
     </div>
    );
}
export default AccountFollow;
