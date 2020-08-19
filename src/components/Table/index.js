import React from "react";

const Table = props => (
  <div className="table-responsive">
    <table className="table">
      <thead>
      <tr>
        {props.th.map((el, ind) => {
          if (ind === 0) {
            return <th className="text-left" key={'th'+ind}>{el}</th>
          } else if (ind === props.th.length - 1) {
            return <th className="text-right" key={'th'+ind}>{el}</th>
          } else {
            return <th key={'th'+ind}>{el}</th>
          }
        })}
      </tr>
      </thead>
      <tbody>
      {props.rows.map((td, tdInd)=>{
        return (<tr key={'tr'+tdInd}>
          {td.map((el, ind) => {
            if (ind === 0) {
              return <td className="text-left" key={'td'+ind}>{el}</td>
            } else if (ind === props.th.length - 1) {
              return <td className="td-actions text-right" key={'td'+ind}>{el}</td>
            } else {
              return <td key={'td'+ind}>{el}</td>
            }
          })}
        </tr>)
      })}
      </tbody>
    </table>
  </div>);

export default Table;