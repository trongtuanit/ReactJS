import React from 'react'

export default function Select({ values, callback, disabled = false, readonly = false, selected }) {
    return (
    <div>
      <select
        disabled={disabled}
        readOnly={readonly}
        onChange={({ target : { value } }) => callback(value)}
      >
        {values.map(([value, text]) => <option selected={selected === value}value={value}>{text}</option>)}
      </select>
    </div>
  )
}
