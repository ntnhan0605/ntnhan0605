import { InputSearchComponent } from '@/components/Input';
import { Search } from '@/icons';
import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styles from './FormSearchComponent.module.scss';

export type FormSearchComponentRef = HTMLFormElement;
export type FormSearchComponentProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const FormSearchComponentWithoutRef = (
  props: FormSearchComponentProps,
  ref?: Ref<FormSearchComponentRef>,
) => {
  return (
    <form {...props} ref={ref}>
      <div className={clsx('FormSearch--container', styles.container)}>
        <InputSearchComponent className={clsx('FormSearch--input', styles.input)} />
        <button type="submit" className={clsx('FormSearch--submit', styles.submit)}>
          <Search />
        </button>
      </div>
    </form>
  );
};
export const FormSearchComponent = forwardRef(FormSearchComponentWithoutRef);
