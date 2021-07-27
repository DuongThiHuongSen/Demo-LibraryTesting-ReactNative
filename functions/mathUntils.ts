const sum = ( x: number, y:number ) => {
    return x+y;
}

let isChanged = false;

const changeFlowerName = (name: string) => {
    isChanged = true;
    return name;
}

export {
    sum,
    changeFlowerName,
    isChanged
}