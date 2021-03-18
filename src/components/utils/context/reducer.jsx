export const initialState = {
    cart: [],
    user: null
}

// SELECTOR
export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // console.log(state);
    switch (action.type) {

        // ADD THE ITEM WE PREFORMED AN ACTION ON TO THE END OF THE CART ARRAY
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        
        // SET THE CART ARRAY BACK TO AN EMPTY ARRAY
        case 'EMPTY_CART': 
            return {
                ...state,
                cart: []
            };

        // REMOVE A SINGLE ITEM FROM THE CART ARRAY
        case "REMOVE_FROM_CART":
            
            // index = array position of item to be removed
            const index = state.cart.findIndex(
                cartItem => cartItem.id === action.id
            )

            // make a copy of current cart
            let newCart = [...state.cart]

            // if the index appears in the array, splice it out of the array
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(
                    `Product (id: {action.id}) is not in the cart. Cannot remove.`
                )
            }

            // return current state with cart updated to newCart (without the item we removed)
            return {
                ...state,
                cart: newCart,
            }

        case "SET_USER":

            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;
