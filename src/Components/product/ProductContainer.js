import React from 'react'
import '../../App.css'
import { makeOrder } from '../../Redux/Product/ProductActions'
import { connect } from 'react-redux'

function ProductContainer(props) {
  return (
    <div className='product'>
      <h2>Well Come to Our Redux</h2>
      <h2>Avalible product qty : {props.noOfProducts}</h2>
      <button onClick={props.makeOrder}>Make Order</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        noOfProducts: state.noOfProducts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        makeOrder: ()=>dispatch(makeOrder())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductContainer);