import React, { Component } from 'react'
import { connect } from 'react-redux'

class ItemShoe extends Component {
    render() {
        const { shoe, handleViewDetail, handleAddCart } = this.props
        return (

            <div className="col-3 card">
                <img src={shoe.image} alt="" />
                <button onClick={() => { handleAddCart(shoe) }} className='btn btn-info'>Add</button>
                <button onClick={() => { handleViewDetail(shoe) }} className='btn btn-warning'>View Detail</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleViewDetail: (shoe) => {
            dispatch({
                type: 'VIEW_DETAIL',
                shoe
            })
        },
        handleAddCart: (shoe) => {
            dispatch({
                type: 'ADD_CART',
                shoe
            })
        }


    }
}

export default connect(null, mapDispatchToProps)(ItemShoe)


