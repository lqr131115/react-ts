export const isFalsy = (value:unknown) => value === 0 ? false: !value
export const cleanObjProWithoutVal = (obj:object) => {
    const _obj = {...obj}
    Object.keys(_obj).forEach(key => {
        // @ts-ignore
        let ele = _obj[key]
        if (isFalsy(ele)) {
            // @ts-ignore
            delete _obj[key]
        }
    })
    return _obj
}