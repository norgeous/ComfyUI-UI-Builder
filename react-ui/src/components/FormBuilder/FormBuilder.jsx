import { useContext } from 'react';
import styled, { css } from 'styled-components';
import FormContext from '@/contexts/FormContext';
import Accordion from '../Accordion/Accordion';
import FormItem from './FormItem';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const GridItem = styled.div`
  ${({ colSpan }) =>
    colSpan === 2 &&
    css`
      grid-column: 1 / span 2;
    `}
`;

const FormBuilder = () => {
  const { formConfig } = useContext(FormContext);

  const accordionGroups = [...new Set(formConfig.map(({ group }) => group))];

  const sections = accordionGroups.map(accordionGroup => {
    const itemsInGroup = formConfig.filter(
      ({ group }) => group === accordionGroup,
    );

    const children = itemsInGroup.map(({ id, colSpan, ...props }) => (
      <GridItem key={id} colSpan={colSpan}>
        <FormItem
          {...props} // eslint-disable-line react/jsx-props-no-spreading
          id={id}
        />
      </GridItem>
    ));

    return { title: accordionGroup, children: <Grid>{children}</Grid> };
  });

  return <Accordion sections={sections} />;
};

export default FormBuilder;
