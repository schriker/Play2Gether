export const ordderOptionsUpdater = (id, orderMethod, optionsArray) => {
    const resetArr = optionsArray.map((option) => {
        return {
            value: option.value,
            option: null
        }
    });
    const updatedOption = {
        ...optionsArray[id],
        option: orderMethod
    };
    const updatedArr = [
        ...resetArr.slice(0, id),
            updatedOption,
        ...resetArr.slice(id + 1, optionsArray.length)
    ];
    return {
        updatedOption: updatedOption,
        updatedArr: updatedArr
    };
}