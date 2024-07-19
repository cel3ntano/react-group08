import { useEffect, useState } from 'react';
import css from './PasswordForm.module.css';
import clsx from 'clsx';

const initState = {
  hard: false,
  middle: false,
  easy: false,
};

export default function PasswordForm() {
  const [value, setValue] = useState('');
  const [color, setColor] = useState(initState);

  const isRedClass = clsx(value.length < 8 && value.length !== 0 && css.red);

  const firstClass = clsx(
    css.message,
    isRedClass ||
      (color.hard && css.green) ||
      (color.middle && css.yellow) ||
      (color.easy && css.red),
  );

  const secondClass = clsx(
    css.message,
    isRedClass,
    (color.hard && css.green) || (color.middle && css.yellow),
  );

  const thirdClass = clsx(css.message, isRedClass, color.hard && css.green);

  const hasLetters = /[a-zA-Z]/.test(value);
  const hasDigits = /\d/.test(value);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  const changeInput = e => {
    const inputValue = e.target.value.trim();
    const filteredValue = inputValue
      .split('')
      .filter(item => item !== ' ')
      .join('');
    setValue(filteredValue);
  };

  useEffect(() => {
    const typesCount = [hasDigits, hasLetters, hasSymbols].filter(
      Boolean,
    ).length;

    switch (typesCount) {
      case 3:
        setColor(prev => {
          return {
            ...prev,
            hard: true,
          };
        });
        break;
      case 2:
        setColor(prev => {
          return {
            ...prev,
            middle: true,
            hard: false,
          };
        });
        break;
      case 1:
        setColor(prev => {
          return {
            ...prev,
            easy: true,
            middle: false,
            hard: false,
          };
        });
        break;
      default:
        setColor(initState);
        break;
    }
  }, [hasDigits, hasLetters, hasSymbols, value]);

  return (
    <div className={css.passwordForm}>
      <input className={css.input} type="password" value={value} onChange={changeInput} />
      <div className={css.output}>
        <div className={firstClass}></div>
        <div className={secondClass}></div>
        <div className={thirdClass}></div>
      </div>
      {/* <input
        className={css.input}
        type="text"
        value={value.login}
        name="login"
        onChange={changeInput}
      />
      <input
        className={css.input}
        type="text"
        value={value.password}
        name="password"
        onChange={changeInput}
      /> */}
    </div>
  );
}
