export default (selectedVillager = null, action) => {
    if(action.type === 'VILLAGER_SELECTED') {
        console.log('secleted')
        return action.payload;
    }
    return selectedVillager;
};