import React, { useMemo } from "react"
import { GroupBase, MenuListProps } from "react-select"
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List,
  type ListRowProps,
} from "react-virtualized"

function VirtualizedList<
  OptionType,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>,
>({ children }: MenuListProps<OptionType, false, GroupType>) {
  const rows = children

  const cellCache = useMemo(() => {
    return new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 30,
    })
  }, [rows]) //eslint-disable-line react-hooks/exhaustive-deps

  if (!Array.isArray(rows)) {
    return <>{children}</>
  }

  const rowRenderer = ({ key, parent, index, style }: ListRowProps) => (
    <CellMeasurer cache={cellCache} key={key} columnIndex={0} rowIndex={index} parent={parent}>
      <div key={key} style={style}>
        {rows[index]}
      </div>
    </CellMeasurer>
  )

  return (
    <div style={{ height: "300px" }}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            deferredMeasurementCache={cellCache}
            rowHeight={cellCache.rowHeight}
            rowCount={rows.length}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  )
}

export default VirtualizedList
