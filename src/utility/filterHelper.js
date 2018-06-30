export const filterByValue = (array, value) => {
    const searchValue = value.toLowerCase();
    return array.filter((item) => item.name.toLowerCase().includes(searchValue));
}