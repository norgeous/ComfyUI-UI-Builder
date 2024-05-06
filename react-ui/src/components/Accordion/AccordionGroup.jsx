import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronUp } from 'react-icons/fa6';

const AccordionHeader = styled.button`
  background: black;
  color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  border: none;
`;

const Chevron = styled(FaChevronUp)`
  transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'rotate(180deg)')};
  transition: transform 350ms;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Wrapper2 = styled.div`
  width: 100%;
`;

const Collapse = styled.div`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  transition: max-height 350ms;
`;

const AccordionGroup = ({
  title = '',
  isOpen = false,
  onClick = () => {},
  children = null,
}) => (
  <>
    <AccordionHeader onClick={onClick}>
      {title}
      <Chevron $isOpen={isOpen} />
    </AccordionHeader>
    <Wrapper>
      <Wrapper2>
        <Collapse $isOpen={isOpen}>{children}</Collapse>
      </Wrapper2>
    </Wrapper>
  </>
);

AccordionGroup.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default AccordionGroup;
