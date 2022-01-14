import { createPlan } from './plan.js'
const yearlyPlan = createPlan() 

console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createPotato } from './seeds/potato.js'
import { addPlant, usePlants } from './field.js'

const potatoSeed = createPotato()
addPlant(potatoSeed)
const plantArray = usePlants()
console.log(plantArray)


