import { NavLink } from 'react-router-dom';

import Icon from '../../Icons/comeback.svg';
import s from './Comeback.module.scss';

const Comeback = ({ text, path }) => {
  return (
    <div className={s.wrapper}>
      <NavLink to={path} exact className={s.link}>
        <img className={s.comebackSvg} alt="comeback" src={Icon} />
        <span className={s.text}> {text}</span>
      </NavLink>
    </div>
  );
};

Comeback.defaultProps = {
  text: 'Вернуться на главную',
  path: '/home',
};

export default Comeback;
