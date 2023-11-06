import { shoeArr } from "../ShoeShop/data";

const initialState = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: []
}

const shoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VIEW_DETAIL': {
            state.detail = action.shoe
            return { ...state }
        }
        case 'ADD_CART': {
            let newCart = [...state.cart]
            let index = newCart.findIndex(value => value.id == action.shoe.id)
            if (index !== -1) {
                newCart[index].cartQuanlity += 1
            } else {
                newCart.push({ ...action.shoe, cartQuanlity: 1 })
            }
            state.cart = newCart
            return { ...state }
        }
        case 'CART_QUANLITY': {
            let newCart = [...state.cart]
            let index = newCart.findIndex(value => value.id == action.shoeID)
            if (index != -1) {
                newCart[index].cartQuanlity = newCart[index].cartQuanlity + action.quanlity || 1
            }
            state.cart = newCart
            return { ...state }
        }
        case 'CART_REMOVE': {
            let newCart = state.cart.filter((item) => {
                return item.id != action.shoeID
            })
            state.cart = newCart
            return { ...state }
        }
        default: return { ...state }
    }
}

export default shoeReducer