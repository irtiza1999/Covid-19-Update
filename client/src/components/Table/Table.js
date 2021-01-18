import React from 'react'
import './Table.css'
import numeral from 'numeral'

function Table({ countries }) {
  let index = 0
  return (
    <div className="table">
      {countries.map((country) => (
        <>
          <tr>
            <td>{(index += 1)}</td>
            <td>{country.country}</td>
            <td>
              <strong>{numeral(country.cases).format('0,0')}</strong>
            </td>
          </tr>
        </>
      ))}
    </div>
  )
}

export default Table
