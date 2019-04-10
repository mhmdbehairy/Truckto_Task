const initialState = {
    order: {}
};

export default function RootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ORDER':
            console.log(action.payload);
            return {
                ...state,
                order: action.payload
            };
        default:
            return state;
    }
}
