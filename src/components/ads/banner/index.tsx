import AdSense from 'react-adsense';

import { Wrapper } from './styles';

export default function AdBanner({ id, slot }: any) {
  return (
    <Wrapper>
      <AdSense.Google
        client={id}
        slot={slot}
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </Wrapper>
  );
}
