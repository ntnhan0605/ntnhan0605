import clsx from 'clsx';
import styles from './FooterComponent.module.scss';

export const FooterComponent = () => {
  return (
    <footer className={clsx('footer', styles.footer)}>
      <div className={clsx(styles.footerTop)}>
        <div className="container max-md:max-w-full"></div>
      </div>
      <div className={clsx(styles.footerBottom)}></div>
    </footer>
  );
};
