import React from 'react'
import proptypes from 'prop-types'
 function TableRowProduct(props) {
    return (
        <div>
               <tr>
                 <td>{props.Name}</td>
                 <td>{props.Type}</td>
                 <td>{props.Price}</td>
              </tr>
        </div>
    )
}
TableRowProduct.propTypes ={
    Name: proptypes.string,
    Type: proptypes.string,
    Price: proptypes.number 


}
export default TableRowProduct
