import { CHANGE_PAGE } from "../actions/page"

const initialState = {
    title: 'qwe',
    bg: 'qwe',
    text: 'qwe',
    images: [1, 2, 3, 4],
    info: 'qwe',
    map: 'qwe'
}

const pageReducer = (state=initialState, action) => {
    if (action.type === CHANGE_PAGE) {
        return state={
            ...state,
            title: action.payload.title,
            bg: action.payload.bg,
            text: action.payload.text,
            images: action.payload.images,
            info: action.payload.info,
            map: action.payload.map
        }
    }
    return state
}

export default pageReducer
