import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContenVideo, { TitleVideo } from './ContenVideo';

const cx = classNames.bind(styles);
function Home( ) {
   
        return (   

             <h2 className={cx('wapper')}>
                    <TitleVideo />
                     <ContenVideo />

                     <TitleVideo />
                     <ContenVideo />

            </h2>         
    );
}

export default Home;
