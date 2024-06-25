import { useContext } from 'react';
import FormContext from '@/contexts/FormContext';
import Input from '@/components/Input';
import Collapsable from '@/components/Collapsable';
import { Grid, GridItem } from './styled';

const FormBuilder = () => {
  const { formConfig } = useContext(FormContext);
  const accordionGroups = [...new Set(formConfig.map(({ group }) => group))];

  return (
    <>
      {accordionGroups.map(accordionGroup => {
        const itemsInGroup = formConfig.filter(
          ({ group }) => group === accordionGroup,
        );

        return (
          <Collapsable key={accordionGroup} title={accordionGroup}>
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
          </Collapsable>
        );
      })}
    </>
  );
};

export default FormBuilder;
