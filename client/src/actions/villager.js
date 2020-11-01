export const selectVillager = (villager) => {
    return {
        type: 'VILLAGER_SELECTED',
        payload: villager
    };
};