import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutation-types'

export default {
    addCart(context,payload) {
        let oldProduct = null;
        for (const item of context.state.cartList) {
            if (item.iid === payload.iid) {
                oldProduct = item
            }
        }

        if(oldProduct) {
            //oldProduct.count += 1
            context.commit(ADD_COUNTER,oldProduct)
        }
        else{
            payload.count = 1
            //state.cartList.push(payload)
            context.commit(ADD_TO_CART,payload)
        }
    }
}