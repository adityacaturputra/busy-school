import { createClient } from '@supabase/supabase-js';
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_KEY } from './constants';

const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_KEY,
);

export const getCourses = async () => {
  try {
    const { data: mataKuliah, error } = await supabase
      .from('mata_kuliah')
      .select('*');
    return { mataKuliah, error };
  } catch (error) {
    return error;
  }
};

export default supabase;
