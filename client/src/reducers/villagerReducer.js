import { combineReducers } from 'redux';

const selectVillagerReducer = (selectedVillager = null, action) => {
    if(action.type === 'VILLAGER_SELECTED') {
        return action.payload;
    }
    return selectedVillager;
};

export default combineReducers({
    selectedVillager: selectVillagerReducer
})