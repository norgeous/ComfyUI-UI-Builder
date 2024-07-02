import styled from 'styled-components';
import * as icons from '.';

const Container = styled.div`
  display: flex;
  gap: 8px;
  font-size: 30px;
  flex-wrap: wrap;
`;

export default {
  title: 'Icons',
};

export const Icons = {
  parameters: {
    viewport: {
      width: 214,
      height: 214,
    },
  },
  render: () => (
    <Container>
      {Object.entries(icons).map(([name, Icon]) => (
        <Icon key={name} title={name} />
      ))}
    </Container>
  ),
};
