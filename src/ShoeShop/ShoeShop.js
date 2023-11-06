import React, { Component } from 'react'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'
import DetailShoe from './DetailShoe'

export default class ShoeShop extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <CartShoe />
                    </div>
                    <div className="col-6">
                        <ListShoe />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <DetailShoe />
                    </div>
                </div>
            </div>
        )
    }
}
