import {Alert} from 'react-native';
const defaultState = {
  selectedItems: {items: []},
};

const foodReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      const newState = {...state};
      const filteredItems = state.selectedItems.items.find(
        item => item.id === action.payload.id,
      );
      if (filteredItems) {
        Alert.alert('Warning', 'Already in Basket');

        return state;
      } else {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
        };
        console.log(action.payload);
        console.log(newState);
        return newState;
      }
    }
    case 'REMOVE_FROM_BASKET': {
      const newState = {...state};
      newState.selectedItems = {
        items: [
          ...newState.selectedItems.items.filter(
            item => item.id !== action.payload.id,
          ),
        ],
      };
      console.log(action.payload);
      return newState;
    }

    default:
      return state;
  }
};

export default foodReducer;
