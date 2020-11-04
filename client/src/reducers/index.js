import { combineReducers } from 'redux';
import villagerReducer from './villagerReducer';
import selectedVillagerReducer from './selectedVillagerReducer';
import specieReducer from './specieReducer';

export default combineReducers({
    villagers: villagerReducer,
    selectedVillager: selectedVillagerReducer,
    species: specieReducer,
});