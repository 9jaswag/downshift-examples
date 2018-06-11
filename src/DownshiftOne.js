import React from 'react'
import Downshift from 'downshift';

export default ({ items, onChange }) => {
  return (
    <Downshift onChange={onChange} itemToString={item => (item ? item.name : '')}>
      {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, highlightedItem, getLabelProps }) => (
        <div>
          <input {...getInputProps({ placeholder: "Search books" })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {
                items
                  .filter(item => !inputValue || item.name.includes(inputValue))
                  .map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: item.name, index, item })}
                      style={{
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      }}>
                      {item.name}
                    </div>
                  ))
              }
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}
