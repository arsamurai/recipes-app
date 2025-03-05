import React from "react"
import { default as CustomSelect, GroupBase, Props } from "react-select"

import { cn } from "@shared/lib/css"

import DropdownIndicator from "./components/dropdown-indicator"
import {
  clearIndicatorStyles,
  controlStyles,
  indicatorContainerStyles,
  menuStyles,
  multiOptionStyles,
  multiValueLabelStyles,
  multiValueRemoveStyles,
  multiValueStyles,
  noOptionsMessageStyles,
  optionStyles,
  placeholderStyles,
  valueContainerStyles,
} from "./select.styles"

function Select<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>({ components, ...props }: Props<OptionType, IsMulti, GroupType>) {
  return (
    <div className="w-full min-w-[240px]">
      <CustomSelect
        unstyled
        classNamePrefix="select"
        components={{ DropdownIndicator, ...components }}
        classNames={{
          control: ({ isFocused }) => cn(controlStyles.base, isFocused && controlStyles.focused),
          placeholder: () => placeholderStyles,
          valueContainer: () => valueContainerStyles,
          indicatorsContainer: () => indicatorContainerStyles,
          menu: () => menuStyles,
          option: ({ isSelected, isFocused, isMulti, isDisabled }) =>
            isMulti
              ? cn(
                  multiOptionStyles.base,
                  isFocused && multiOptionStyles.focused,
                  isSelected && multiOptionStyles.selected,
                  isDisabled && optionStyles.disabled,
                )
              : cn(
                  isFocused && optionStyles.focused,
                  isSelected && optionStyles.selected,
                  isDisabled && optionStyles.disabled,
                  optionStyles.base,
                ),
          noOptionsMessage: () => noOptionsMessageStyles,
          multiValue: () => multiValueStyles,
          multiValueLabel: () => multiValueLabelStyles,
          multiValueRemove: ({ isFocused }) =>
            cn(multiValueRemoveStyles.base, isFocused && multiValueRemoveStyles.focused),
          clearIndicator: () => clearIndicatorStyles,
          loadingMessage: () => noOptionsMessageStyles,
        }}
        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
        menuPortalTarget={document.body}
        {...props}
      />
    </div>
  )
}

export default Select
