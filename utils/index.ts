export const isEmpty = (obj:any):Boolean => Object.keys(obj).length === 0;

export const areAllValuesEmpty = (obj:any): Boolean => Object.values(obj).every(value => value === '');
