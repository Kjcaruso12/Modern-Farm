const fieldArray = []

export const addPlant = (seed) => {
    fieldArray.push(seed)
    return fieldArray
}

export const usePlants = () => {
    return Array.from(fieldArray)
}