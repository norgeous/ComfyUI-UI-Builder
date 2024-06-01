import { useContext } from 'react';
import styled, { css } from 'styled-components';

import FormContext from '@/contexts/FormContext';

import Tooltip from '@/components/Tooltip';
import { FaShuffle } from 'react-icons/fa6';
import Accordion from '../Accordion/Accordion';

import Missing from '../form-fields/Missing';
import InputSelect from '../form-fields/InputSelect/InputSelect';
import InputRange from '../form-fields/InputRange/InputRange';
import InputTextarea from '../form-fields/InputTextarea/InputTextarea';
import InputNumber from '../form-fields/InputNumber/InputNumber';
import InputCheckbox, {
  Checkbox,
} from '../form-fields/InputCheckbox/InputCheckbox';
import InputSelectCkpt from '../form-fields/InputSelectCkpt/InputSelectCkpt';
import InputFile from '../form-fields/InputFile/InputFile';
import InputSpeech from '../form-fields/InputSpeech/InputSpeech';
import InputSeed from '../form-fields/InputSeed/InputSeed';
import { Button } from '../form-fields/InputHeader/InputHeader';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const Item = styled.div`
  ${({ colSpan }) =>
    colSpan === 2 &&
    css`
      grid-column: 1 / span 2;
    `}
`;

const components = {
  select: InputSelect,
  range: InputRange,
  textarea: InputTextarea,
  number: InputNumber,
  checkbox: InputCheckbox,
  selectckpt: InputSelectCkpt,
  fileupload: InputFile,
  speech: InputSpeech,
  seed: InputSeed,
};

const subC = {
  checkbox: ({ id, label, value, updateFormState }) => (
    <Tooltip text={label}>
      <Checkbox
        checked={value}
        onChange={event => updateFormState({ [id]: event.target.checked })}
      />
    </Tooltip>
  ),
  shuffle: ({ label, targetId, updateFormState, onChange }) => (
    <Tooltip text={label}>
      <Button
        onClick={() => {
          const newSeed = Math.floor(Math.random() * 10 ** 10);
          updateFormState({ [targetId]: newSeed, ...onChange });
        }}
      >
        <FaShuffle style={{ display: 'block', fontSize: 12 }} />
      </Button>
    </Tooltip>
  ),
};

const FormBuilder = () => {
  const { formConfig, formState, updateFormState } = useContext(FormContext);

  const accordionGroups = [...new Set(formConfig.map(({ group }) => group))];

  const sections = accordionGroups.map(accordionGroup => {
    const itemsInGroup = formConfig.filter(
      ({ group }) => group === accordionGroup,
    );

    const children = itemsInGroup.map(
      ({
        group,
        type,
        id,
        defaultValue,
        defaultValueIndex,
        colSpan,
        subComponents = [],
        onChange,
        ...props
      }) => {
        const Component = components[type] || Missing;
        const value = formState[id];

        const handleChange = data => {
          const newState = { [id]: data, ...onChange };
          updateFormState(newState);
        };

        const headerChildren = subComponents.map(
          ({ id, type, label, ...props }) => {
            const SubComponent = subC[type];
            const subValue = formState[id];
            // const handleChange = data => {
            //   const newState = { [id]: data, ...onChange };
            //   updateFormState(newState);
            // };

            return (
              <SubComponent
                {...props} // eslint-disable-line react/jsx-props-no-spreading
                key={id}
                id={id}
                label={label}
                value={subValue}
                // onChange={handleChange}
                updateFormState={updateFormState}
              />
            );
          },
        );

        return (
          <Item key={id} colSpan={colSpan}>
            <Component
              {...props} // eslint-disable-line react/jsx-props-no-spreading
              type={type}
              id={id}
              defaultValue={defaultValue}
              defaultValueIndex={defaultValueIndex}
              value={value}
              onChange={handleChange}
              headerChildren={headerChildren}
            />
          </Item>
        );
      },
    );

    return { title: accordionGroup, children: <Grid>{children}</Grid> };
  });

  return <Accordion sections={sections} />;
};

export default FormBuilder;
