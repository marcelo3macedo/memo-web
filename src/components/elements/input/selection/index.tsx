import { Option, Select } from './styles';

export function SelectBoxInput({ options, name, onChange, value = null }: any) {
  if (!options || options.length === 0) {
    return <></>;
  }

  return (
    <Select name={name} onChange={onChange} value={value}>
      {options
        ? options.map((f, i) => (
            <Option key={i} value={f.id}>
              {f.name}
            </Option>
          ))
        : null}
    </Select>
  );
}
