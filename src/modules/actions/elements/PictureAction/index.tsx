import { Picture, Wrapper } from './styles';

export default function PictureAction({ icon, action }: any) {
  return (
    <Wrapper onClick={action} className='no-select'>
      <Picture src={icon} />
    </Wrapper>
  );
}
