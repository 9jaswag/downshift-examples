import React from 'react'
import Downshift from 'downshift';

export default ({ items, onChange }) => {
  return (
    <Downshift onChange={onChange} itemToString={item => (item ? item.value : '')}>
      {(getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, highlightedItem, getLabelProps) => (
        <div>
          <input {...getInputProps({ placeholder: "Search books" })} />
        </div>
      )}
    </Downshift>
  )
}
