import React from 'react'
import Downshift from 'downshift';

export default ({ books, onChange, label, placeholder }) => {
  return (
    <Downshift onChange={onChange} itemToString={books => (books ? books.name : '')}>
      {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, getLabelProps }) => (
        <div>
          <label style={{ marginTop: '1rem', display: 'block' }} {...getLabelProps()}>{label}</label> <br />
          <input {...getInputProps({ placeholder })} />
          {isOpen ? (
            <div className="downshift-dropdown">
              {
                books
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
