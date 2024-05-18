import styled from 'styled-components';

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
const Right = styled.button``;

const InputHeader = () => (
  <Wrap>
    <Left>
      <Label>Label Label Label Label Label Label Label Label Label Label</Label>
      ?
    </Left>
    <Right>Reset</Right>
  </Wrap>
);

export default InputHeader;
