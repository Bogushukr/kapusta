import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';
import PickerExpensesIncome from '../../Components/PickerExpensesIncome';
import CurrentCash from '../../Components/CurrentCash';

import BalanceInfo from '../../Components/BalanceInfo/BalanceInfo';
import Summary from '../../Components/Summary/'
import s from './ReportPage.module.scss';

const ReportPage = () => {
  return (
    <>
      <div className={s.wrapper}>
      <Summary cashIncome={false}/>
      <Summary cashIncome={true}/>
        <div className={s.reportBar}>
          <Comeback />
          <MonthPIcker />
          <BalanceInfo />
        </div>
        <div className={s.currentCash}>
          <CurrentCash />
        </div>
        <div className={s.menu}>
          <PickerExpensesIncome />
          <GeneratorItemReport />
        </div>
        <div className={s.timetable}>
          <GeneratorScheduleReport />
        </div>
      </div>
    </>
  );
};

export default ReportPage;
