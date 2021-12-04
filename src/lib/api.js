/* eslint-disable no-console */
/* eslint-disable consistent-return */
import { createClient } from '@supabase/supabase-js';
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from './constants';

export const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY,
);

export const fetchCourses = async () => {
  try {
    const { data: mataKuliah, error } = await supabase
      .from('mata_kuliah')
      .select('*');
    return { mataKuliah, error };
  } catch (error) {
    console.log('test');
  }
};

export const sendCourse = async (courseForm) => {
  try {
    const { data, error } = await supabase
      .from('mata_kuliah')
      .insert([
        courseForm,
      ]);
    return { addedCourse: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const sendUpdateCourse = async (courseForm) => {
  try {
    const { data, error } = await supabase
      .from('mata_kuliah')
      .update(courseForm)
      .eq('id', courseForm.id);
    console.log(data);
    return { editedCourse: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const sendDeleteCourse = async (id) => {
  try {
    const { data, error } = await supabase
      .from('mata_kuliah')
      .delete()
      .eq('id', id);
    return { deletedCourse: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const fetchTasks = async () => {
  try {
    const { data, error } = await supabase.from('tasks').select('*');
    return { list: data, error };
  } catch (error) {
    console.log(error);
  }
};

export const sendTask = async (taskForm) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .insert([
        taskForm,
      ]);
    return { list: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const sendDeleteTask = async (id) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);
    return { task: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const sendCheckTask = async (id) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update({ disabled: true })
      .eq('id', id);

    return { task: data[0], error };
  } catch (error) {
    console.log(error);
  }
};

export const sendUnCheckTask = async (id) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update({ disabled: false })
      .eq('id', id);

    return { task: data[0], error };
  } catch (error) {
    console.log(error);
  }
};
