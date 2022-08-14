import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ContenVideo, { TitleVideo } from './ContenVideo';
// import { useEffect } from 'react';
// import database from './firebase';

function Home() {
    // useEffect(() => {
    //     database
    //         .collection('video')
    //         .get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 console.log(doc.id, '=>', doc.data());
    //             });
    //         });
    // });

    const cx = classNames.bind(styles);
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
