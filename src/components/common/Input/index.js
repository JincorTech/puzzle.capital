import React from 'react';
import classNames from 'classnames/bind';
import s from './styles.css';

const cx = classNames.bind(s);

const Input = (props) => {
  const {
    meta,
    label,
    required,
    ...restProps
  } = props;

  const {
    active,
    invalid,
    dirty
  } = meta;

  const isInvalid = () => {
    if (!active && invalid && dirty) return true;
    if (!invalid) return false;

    return null;
  };

  const inputClassName = cx(s.input, isInvalid() ? s.invalid : null);
  const labelClassName = cx(s.label, isInvalid() ? s.invalid : null);

  return (
    <div className={s.wrapper}>
      {label
        ? <label className={labelClassName}>{label}{required ? <span> *</span> : null}</label>
        : null}
      <input
        className={inputClassName}
        {...restProps}/>
    </div>
  );
};

export default Input;
