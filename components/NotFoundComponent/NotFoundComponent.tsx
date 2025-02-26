import { ButtonComponent } from '../ButtonComponent';
import { EmptyComponent } from '../EmptyComponent';

import styles from './NotFound.module.scss';

export const NotFoundComponent = () => {
  return (
    <EmptyComponent
      title="Error Page"
      description="The page you are looking for doesn't exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website's homepage to find what you're looking for."
      className={styles.notFound}
    >
      <ButtonComponent href="/">Back To Home</ButtonComponent>
    </EmptyComponent>
  );
};
