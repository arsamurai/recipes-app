import { CircleArrowDown } from "lucide-react"
import React from "react"
import { DropdownIndicatorProps, GroupBase, components } from "react-select"

function DropdownIndicator<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>(props: DropdownIndicatorProps<OptionType, IsMulti, GroupType>) {
  return (
    <components.DropdownIndicator {...props} className="text-secondary-text-2">
      <CircleArrowDown />
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator
