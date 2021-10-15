import React from 'react';
import IconCurrentTasksTitle from '../../assets/svg/IconCurrentTasksTitle';
import TitleWithIcon from '../TitleWithIcon';
import Task from './Task';

export default function Tasks() {
  return (
    <>
      <TitleWithIcon title="Pengingat Tugas" Icon={<IconCurrentTasksTitle size={24} />} />
      <Task title="Sistem Informasi Manajemen" />
      <Task title="Pemrograman Olah Berkas" />
      <Task title="Implementasi Sistem Informasi" />
      <Task title="Teknik Pemrograman Terstruktur 1" />
      <Task title="Struktur dan Organisasi Data 1" />
    </>
  );
}
