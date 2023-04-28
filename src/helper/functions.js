export const nameShortener = (name) => {
    const splittedName = name.split(" ");
    return `${splittedName[0]} ${splittedName[1]} ${splittedName[2]}`;
}

export const isInCart = (state, id) => {
    return !!state.selectedItems.find(item => item.id === id);
}

export const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if(index === -1) return false;
    else return state.selectedItems[index].quantity;
}