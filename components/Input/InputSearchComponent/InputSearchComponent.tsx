import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styles from './InputSearchComponent.module.scss';

export type InputSearchComponentRef = HTMLInputElement;
export type InputSearchComponentProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputSearchComponentWithoutRef = (
  props: InputSearchComponentProps,
  ref?: Ref<InputSearchComponentRef>,
) => {
  const { placeholder = 'Search', ...inputProps } = props;

  return (
    <input
      {...inputProps}
      ref={ref}
      placeholder={placeholder}
      className={clsx(inputProps.className, styles.input)}
    />
  );
};
export const InputSearchComponent = forwardRef(InputSearchComponentWithoutRef);
