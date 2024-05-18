import styled from 'styled-components';
import Spinner from '@/components/Spinner';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Left = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
`;

const Label = styled.label`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Button = styled.button``;

const InputHeader = () => (
  <Wrap>
    <Left>
      <Label>Label Label Label Label Label Label Label Label Label Label</Label>
      <Button>?</Button>
      <Spinner />
    </Left>
    <Button>Reset</Button>
  </Wrap>
);

export default InputHeader;
