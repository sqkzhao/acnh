import acnh from '../apis/acnh';

export const fetchVillagers = () => async (dispatch) => {
    const response = await acnh.get('/villagers');
    dispatch({ type: 'FETCH_VILLAGERS', payload: response.data });
};

export const fetchSpecies = () => async (dispatch, getState) => {
    const species = [];
    const vList = getState().villagers;
    for(const i in vList) {
        if(!species.includes(vList[i]['species'])) {
            species.push(vList[i]['species']);

        }
    }
    dispatch( {type: 'FETCH_SPECIES', payload: species });
};

export const fetchVillagerData = () => async (dispatch) => {
    await dispatch(fetchVillagers());
    dispatch(fetchSpecies());
};
