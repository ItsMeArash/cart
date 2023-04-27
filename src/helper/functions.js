export const nameShortener = (name) => {
    const splittedName = name.split(" ");
    return `${splittedName[0]} ${splittedName[1]} ${splittedName[2]}`;
}