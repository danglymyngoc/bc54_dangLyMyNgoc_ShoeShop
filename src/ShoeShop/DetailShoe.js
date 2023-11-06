import React, { Component } from 'react'
import { connect } from 'react-redux'

class DetailShoe extends Component {
    render() {
        const { detail } = this.props
        return (
            <img src={detail.image} alt="" />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.shoeReducer.detail
    }
}

export default connect(mapStateToProps)(DetailShoe)
