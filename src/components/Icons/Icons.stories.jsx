import styled from 'styled-components';
import * as icons from './Icons';

const Container = styled.div`
  display: flex;
  gap: 8px;
  font-size: 50px;
  flex-wrap: wrap;
`;

export default {
  title: 'Icons',
};

export const Icons = {
  render: () => (
    <Container>
      {Object.entries(icons).map(([name, Icon]) => (
        <Icon key={name} title={name} />
      ))}
    </Container>
  ),
};
