const Reducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_IMAGE':
            return {
                ...state,
                selectedImage: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;