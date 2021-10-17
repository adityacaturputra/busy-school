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
    console.log(mataKuliah);
    return { mataKuliah, error };
  } catch (error) {
    console.log(error);
  }
};
