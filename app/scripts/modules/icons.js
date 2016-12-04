import icons from 'data/iconData';

const SET_HOVERED = 'SET_HOVERED';
const TOGGLE_GRID = 'TOGGLE_GRID';
const TOGGLE_OPEN = 'TOGGLE_OPEN';

const setHovered = index => ({ type: SET_HOVERED, index });
const toggleGrid = () => ({ type: TOGGLE_GRID });
const toggleOpen = (isOpen = true) => ({ type: TOGGLE_OPEN, isOpen });

export const actions = {
  setHovered,
  toggleGrid,
  toggleOpen
}

// Reducer
// ========

const initialState = {
  icons,
  hovered: null,
  isGrid: true,
  isOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOVERED: {
      return {
        ...state,
        hovered: state.icons[action.index]
      };
    }
    case TOGGLE_GRID: {
      return {
        ...state,
        isGrid: !state.isGrid
      }
    }
    case TOGGLE_OPEN: {
      return {
        ...state,
        isOpen: action.isOpen
      }
    }
    default:
      return state;
  }
};

export default reducer;
