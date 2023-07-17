import { ValueInput } from '@components/elements/input/values';
import { initialValues, schema } from '@services/Validation/search.schema';
import { Formik } from 'formik';

import { Search, Wrapper } from './styles';

export function SearchPrimary({ placeholder, action }: any) {
  function onSubmit({ value }: any) {
    action(value);
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
        enableReinitialize={true}>
        {({ handleSubmit, handleChange, values }) => (
          <Search>
            <ValueInput
              value={values.value}
              placeholder={placeholder}
              onEndEditing={handleSubmit}
              onChangeText={handleChange('value')}
            />
          </Search>
        )}
      </Formik>
    </Wrapper>
  );
}
