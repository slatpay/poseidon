import { ComponentProps } from "react";
import { SelectionField, Prefix, SelectFieldContainer } from "./styles";
import makeAnimated from 'react-select/animated';

import { StylesConfig } from 'react-select'

const animatedComponents = makeAnimated();

export interface SelectFieldProps extends ComponentProps<typeof SelectionField> {

    leftIcon?: React.ReactNode
    multiSelect?: boolean

}

const colourStyles: StylesConfig<any, true> = {
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: '#000',
        padding: '.25rem .75rem',
        borderRadius: '32px',
        display: 'flex',
        alignItems: 'center'
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: '#868686',
      background: '#545454',
      borderRadius: '100%',
      padding: 1,
      svg: {
        width: 16,
        height: 16,
      },
      ':hover': {
        color: '#FFF',
      },
    }),
  };

export function SelectField({ multiSelect = false, leftIcon, ...props }: SelectFieldProps) {

    return (
        <SelectFieldContainer>
            {!!leftIcon && <Prefix>{leftIcon}</Prefix>}
            <SelectionField
                components={{...animatedComponents, IndicatorSeparator: null}}
                styles={colourStyles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#00A0D8',
                        primary: '#18181B',
                        neutral10: '#868686',
                        neutral0: '#18181B',
                        neutral80: '#FFF',
                    },
                })}
                hideSelectedOptions
                isClearable={false}
                closeMenuOnSelect={!multiSelect}
                isMulti={multiSelect}
                {...props}
            />
        </SelectFieldContainer>
    )

}

SelectField.displayName = 'SelectField'