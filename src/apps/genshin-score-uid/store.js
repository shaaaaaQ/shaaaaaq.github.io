import { writable } from "svelte/store"
import { getCalcTypes } from "./utils.js"

export const calcType = writable()
export const calcTypes = writable(getCalcTypes())