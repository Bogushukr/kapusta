import { NavLink } from 'react-router-dom';
import './ReportsNav.scss';

const ReportsNav = () => {
  return (
    <div className="toReports">
      <NavLink to="/report" className="toReportsLink">
        <p className="toReport">Перейти к отчетам</p>
      </NavLink>
    </div>
  );
};

export default ReportsNav;
