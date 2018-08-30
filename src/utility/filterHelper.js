export const filterByValue = (array, value, orderOption) => {

    const searchValue = value.toLowerCase();
    const key = orderOption.value.toLowerCase();
    const order = orderOption.option;

    const newArray = array.filter((item) => item.name.toLowerCase().includes(searchValue));

    const sortArr = (a, b) => {
        if (typeof a[key] === "number") {
            if (order === "DESC") {
                return b[key] - a[key];
            }
            else if (order === "ASC") {
                return a[key] - b[key];
            }
        }
        else if (typeof a[key] === "string") { 
            if (order === "DESC") {
                return a[key].localeCompare(b[key]);
            }
            else if (order === "ASC") {
                return b[key].localeCompare(a[key]);
            }
        }
    }

    if(order !== null) {
        newArray.sort(sortArr);  
    }

    return newArray;
}