import icons from 'data/iconData';

const SELECT_ICON = 'SELECT_ICON';
const selectIcon = (i) => ({ type: SELECT_ICON, index: i });

export const actions = {
  selectIcon
}

// Reducer
// ========

const initialState = {
  icons,
  hovered: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ICON: {
      return {
        ...state,
        hovered: action.index
      };
    }
    default:
      return state;
  }
};

export default reducer;
