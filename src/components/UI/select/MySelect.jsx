import React from 'react'

const MySelect = ({ options, defaulValue, value, change }) => {
  return (
    <select value={value} onChange={(e) => change(e.target.value)}>
      <option disabled value=''>
        {defaulValue}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default MySelect
