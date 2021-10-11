import React from 'react';

import GeneratorItemReport from '../../Components/GeneratorItemReport';
import GeneratorScheduleReport from '../../Components/GeneratorScheduleReport/';

// import Balance from '../../Components/Balance';
import s from './ReportPage.module.scss';

const ReportPage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.menu}>
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
