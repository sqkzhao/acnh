export default (species = [], action) => {
    if(action.type === 'FETCH_SPECIES') {
        return action.payload;
    }
    return species;
};