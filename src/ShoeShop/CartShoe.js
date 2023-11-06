import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartShoe extends Component {
    render() {
        const { cart, handleCartQuanlity, handleCartRemove } = this.props
        return (

            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quanlity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        return <tr >
                            <td>{item.name}</td>
                            <td> <img style={{ width: 50 }} src={item.image} alt="" /></td>
                            <td>{item.price}</td>
                            <td className='w-25'>
                                <button onClick={() => { handleCartQuanlity(item.id, -1) }} className='btn btn-success'>-</button>
                                <span>{item.cartQuanlity}</span>
                                <button onClick={() => { handleCartQuanlity(item.id, 1) }} className='btn btn-success'>+</button>

                            </td>
                            <td><button onClick={() => { handleCartRemove(item.id) }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.shoeReducer.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCartQuanlity: (shoeID, quanlity) => {
            dispatch({
                type: 'CART_QUANLITY',
                shoeID, quanlity
            })
        },
        handleCartRemove: (shoeID) => {
            dispatch({
                type: 'CART_REMOVE',
                shoeID
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartShoe)
