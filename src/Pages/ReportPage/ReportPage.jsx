import Media from 'react-media';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';
import MonthPIcker from '../../Components/MonthPIcker';
import Comeback from '../../Components/Comeback';
import PickerExpensesIncome from '../../Components/PickerExpensesIncome';
import CurrentCash from '../../Components/CurrentCash';

import BalanceInfo from '../../Components/BalanceInfo/BalanceInfo';
import s from './ReportPage.module.scss';
import './styleFixBalanceInfo.scss';

const ReportPage = () => {
  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 767px)',
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <section>
              <h1 hidden>Oтчетная страница</h1>
              <div className={s.wrapperFirst}>
                <Comeback />
                <div className={s.monthPIcker}>
                  <MonthPIcker />
                </div>
                <div className="balance-Info__wrapper">
                  <BalanceInfo />
                </div>
                <div className={s.currentCash}>
                  <CurrentCash />
                </div>
              </div>

              <div className={s.wrapper}>
                <div className={s.menu}>
                  <PickerExpensesIncome />
                  <GeneratorItemReport />
                </div>
                <div className={s.timetable}>
                  <GeneratorScheduleReport />
                </div>
              </div>
            </section>
          )}
          {matches.medium && (
            <section>
            <h1 hidden>Oтчетная страница</h1>
              <div className={s.wrapperFirst}>
                <div className={s.reportBar}>
                  <Comeback />
                  <div className="balance-Info__wrapper">
                    <BalanceInfo />
                  </div>
                  <MonthPIcker />
                </div>
                <div className={s.currentCash}>
                  <CurrentCash />
                </div>
                <div className={s.menu}>
                  <PickerExpensesIncome />
                  <GeneratorItemReport />
                </div>
              </div>
              <div className={s.wrapper}>
                <div className={s.timetable}>
                  <GeneratorScheduleReport />
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </Media>
  );
};

export default ReportPage;
