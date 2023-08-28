import { ValueInput } from '@components/elements/input/values';
import IconMedium from '@components/icons/IconMedium';
import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { initialValues, schema } from '@services/Validation/search.schema';
import { Formik } from 'formik';
import { useTheme } from 'styled-components';

import { Search, SearchIcon, Wrapper } from './styles';

export function SearchPrimary({ placeholder, action, value = null }: any) {
  const theme = useTheme() as any;

  function onSubmit({ value }: any) {
    action(value);
  }

  if (value) {
    initialValues.value = value;
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
              styled={Styles.NoBorder}
            />
            <SearchIcon>
              <IconMedium
                name={'search'}
                fill={theme.LIGHT_COLOR}
                action={handleSubmit}
              />
            </SearchIcon>
          </Search>
        )}
      </Formik>
    </Wrapper>
  );
}
