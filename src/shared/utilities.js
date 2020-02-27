export const createAction = (type, payloads) => {
    return {type: type, ...payloads};
};

export const copyObject = (source) => {
    let result = {};
    if(source instanceof Array) {
        const newArray = [];
        for (let item in source) {
            newArray.push(copyObject(source[item]));
        }
        return newArray;
    } else for (let key in source) {
        if (source[key] instanceof Array ) {
            const newArray = [];
            for (let item in source) {
                newArray.push(copyObject(source[item]));
            }
            result[key] = newArray;
        } else if (source[key] instanceof Object) {
            result[key] = copyObject(source[key]);
        } else {
            result[key] = source[key];
        }
    }
    return result;
};

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
