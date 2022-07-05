export const getInitials = (name: string) => {
    // name split on /,
    name=name.split(/[/,]+/)[0];
    //get first letter of each work 
    let reg = /\b(\w)/g;
    let firstLetterofEachWork = name.match(reg)    
    return name ?
        `${firstLetterofEachWork?.length ?
            `${firstLetterofEachWork[0]}${firstLetterofEachWork.length !== 1 ?
                firstLetterofEachWork[1] : name[1]}`
            : ""}`.toUpperCase() : ""
}