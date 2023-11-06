import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemShoe from './ItemShoe'

class ListShoe extends Component {

    render() {
        let { listShoe } = this.props
        console.log(listShoe)
        return (<div className="row">
            {listShoe.map((shoe, index) => {
                return <ItemShoe key={index} shoe={shoe} />

            })}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listShoe: state.shoeReducer.shoeArr
    }
}

export default connect(mapStateToProps)(ListShoe)
