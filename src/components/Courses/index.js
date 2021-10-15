import React from 'react';
import { IconCurrentScheduleTitle } from '../../assets';
import Gap from '../../style/Gap';
import TitleWithIcon from '../TitleWithIcon';
import Course from './Course';

export default function Courses() {
  return (
    <>
      <TitleWithIcon title="Mata Kuliah Hari Ini" Icon={<IconCurrentScheduleTitle size={24} />} />
      <Course title="Implementasi Sistem Informasi" place="D003" teacher="Ronggo Permono" time="00:39:01" />
      <Course title="Struktur & Organisasi Data 1" place="D003" teacher="Meilani B Siregar" time="00:39:01" disabled />
      <Course title="Teknik Pemrog. Terstruktur 1" place="D003" teacher="Meilani B Siregar" time="00:39:01" disabled />
      <Gap height="36px" />
    </>
  );
}
