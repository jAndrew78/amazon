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
            
            // SET INDEX = ARRAY POSITION OF ITEM TO BE REMOVED
            const index = state.cart.findIndex(
                // cartItem => cartItem.id === action.id  // if remove by id, only removes first one it finds with that id
                cartItem => cartItem.key === action.key     // does it work better if we remove by key
            )

            // MAKE A COPY OF CURRENT CART
            let newCart = [...state.cart]

            // IF THE INDEX APPEARS IN THE ARRAY, SPLICE IT OUT
            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                console.warn(
                    `Product (id: {action.id}) is not in the cart. Cannot remove.`
                )
            }

            // RETURN CURRENT STATE WITH CART UPDATED TO newCart (WITH ITEM REMOVED)
            return {
                ...state,
                cart: newCart,
            }

        // RETURNS THE CURRENT STATE WITH USER UPDATED
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
