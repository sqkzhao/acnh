export default (villagers = [], action) => {
    if(action.type === 'FETCH_VILLAGERS') {
        return action.payload;
    }
    return villagers;
};
