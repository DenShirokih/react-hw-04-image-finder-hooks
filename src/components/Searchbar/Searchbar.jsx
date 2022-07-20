import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { Searchbar, Input } from './Searchbar.module';
import 'react-toastify/dist/ReactToastify.css';

const value = {
  query: '',
};
export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value.query);

    if (value.query.trim() === '') {
      toast.error('Введите запрос ');
      return;
    }
    resetForm();
  };
  return (
    <Searchbar>
      <Formik initialValues={value} onSubmit={handleSubmit}>
        <Form autoComplete="off">
          <Field
            as={Input}
            type="text"
            name="query"
            placeholder="Search images and photos"
          />
          {/* <SearchFormBtn tupe="submit"></SearchFormBtn> */}
        </Form>
      </Formik>
    </Searchbar>
  );
};
