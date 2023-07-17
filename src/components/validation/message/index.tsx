import { ErrorMessage } from 'formik';

import { TextValue, Wrapper } from './styles';

export default function MessageValidation({ name }) {
  const renderError = message => <TextValue>{message}</TextValue>;

  return (
    <Wrapper>
      <ErrorMessage name={name} render={renderError} />
    </Wrapper>
  );
}
