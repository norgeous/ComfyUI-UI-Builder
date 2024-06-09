import { useContext } from 'react';
import styled, { css } from 'styled-components';
import FormContext from '@/contexts/FormContext';
import Input from '../form-fields/Input/Input';
import AccordionSingle from '../Accordion/AccordionSingle';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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

  return (
    <Container>
      {accordionGroups.map(accordionGroup => {
        const itemsInGroup = formConfig.filter(
          ({ group }) => group === accordionGroup,
        );

        return (
          <AccordionSingle key={accordionGroup} title={accordionGroup}>
            <Grid>
              {itemsInGroup.map(
                ({
                  id,
                  colSpan,
                  defaultValue,
                  defaultValueIndex,
                  options,
                  ...props
                }) => (
                  <GridItem key={id} colSpan={colSpan}>
                    <Input
                      {...props} // eslint-disable-line react/jsx-props-no-spreading
                      id={id}
                      defaultValue={
                        defaultValue ?? options[defaultValueIndex].value
                      }
                      options={options}
                    />
                  </GridItem>
                ),
              )}
            </Grid>
          </AccordionSingle>
        );
      })}
    </Container>
  );
};

export default FormBuilder;
