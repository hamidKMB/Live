

const darkModeReducer = (state = {
    isDark: false,
}
, action) => {
    switch(action.type){
        case "darkModeOn": {
            return{
                ...state,
                isDark: !state.isDark
            }
        }
        default:
            return state
    }
}

export default darkModeReducer