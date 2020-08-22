import React, {FC} from 'react'
import classNames from 'classnames'

type Props = {
  th: Array<JSX.Element | string | number>
  rows: Array<Array<JSX.Element | string | number>>
}

const Table: FC<Props> = (props) => (
  <div className="table-responsive">
    <table className="table">
      <thead>
      <tr>
        {props.th.map((el, ind) => (
          <th key={'th' + ind}
              className={classNames({'text-left': ind === 0, 'text-right': ind === props.th.length - 1})}
          >
            {el}
          </th>)
        )}
      </tr>
      </thead>
      <tbody>
      {props.rows.map((td, tdInd) => {
        return (<tr key={'tr' + tdInd}>
          {td.map((el, ind) => (
            <td key={'td' + ind}
                className={classNames({'text-left': ind === 0, 'td-actions text-right': ind === props.th.length - 1})}
            >
              {el}
            </td>)
          )}
        </tr>)
      })}
      </tbody>
    </table>
  </div>
)
export default Table