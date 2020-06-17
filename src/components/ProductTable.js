import React from 'react'
import PropTypes from 'prop-types'
import TableRowProduct from './tableRowProduct'
function ProductTable(props) {
    return (
        <div>
            {props.Table.map(element =>

                <TableRowProduct Name={element.Name} Type={element.Type} Price={element.Price}  ></TableRowProduct>
            )
            }
        </div>)
}
ProductTable.propTypes = {
    Table: PropTypes.array


}
export default ProductTable;