import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';
import styles from './LogoComponent.module.scss';

export type LogoComponentProps = Partial<
  Pick<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'className' | 'style'>
> &
  Pick<LinkProps, 'href'>;
export const LogoComponent = (props: LogoComponentProps) => {
  const { src = '/logo.png', alt = '', href, width = 200, height = 58, className, style } = props;
  return (
    <Link href={href} className={clsx(className, styles.logo)} style={style}>
      <Image src={src} alt={alt} width={width} height={height} className={styles.image} priority />
    </Link>
  );
};
