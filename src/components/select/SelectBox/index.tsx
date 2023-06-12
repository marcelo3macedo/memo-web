import Select from 'react-select';

import { groupStyles, Wrapper } from './styles';

export default function SelectBox({ options }) {
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span>{data.options.length}</span>
    </div>
  );

  return (
    <Wrapper>
      <Select options={options} formatGroupLabel={formatGroupLabel} />
    </Wrapper>
  );
}
