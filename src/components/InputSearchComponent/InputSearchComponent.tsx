import SearchSvg from 'src/icons/SearchSvg';
import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes, MouseEventHandler, Ref, forwardRef } from 'react';
import styles from './InputSearchComponent.module.scss';

export type InputSearchComponentRef = HTMLInputElement;
export type InputSearchComponentProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onClickSearch?: MouseEventHandler<SVGSVGElement>;
};

const InputSearchComponentWithoutRef = (
  props: InputSearchComponentProps,
  ref?: Ref<InputSearchComponentRef>,
) => {
  const { placeholder = 'Search', onClickSearch, ...inputProps } = props;

  return (
    <div className={clsx('inputSearch--container', styles.inputSearchContainer)}>
      <input
        {...inputProps}
        ref={ref}
        placeholder={placeholder}
        className={clsx('inputSearch', inputProps.className, styles.inputSearch)}
      />
      <SearchSvg
        className={clsx('inputSearch--btn', styles.inputSearchButton)}
        onClick={onClickSearch}
      />
    </div>
  );
};
export const InputSearchComponent = forwardRef(InputSearchComponentWithoutRef);
