import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import { Field, Form, Formik } from 'formik';
import { Box, TextField } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const initialValues = { query: filter };

  const handleQuery = (query) => {
    dispatch(changeFilter(query));
  };

  const queryId = useId();

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={() => {}}
    >
      {({ values, handleChange }) => (
        <Form>
          <Box sx={{ mt: 2, mb: 2 }}>
            <Field
              as={TextField}
              fullWidth
              id={queryId}
              name="query"
              label="Find contacts by name"
              variant="outlined"
              value={values.query}
              onChange={(e) => {
                handleChange(e);
                handleQuery(e.target.value);
              }}
              autoComplete="off"
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default SearchBox;
