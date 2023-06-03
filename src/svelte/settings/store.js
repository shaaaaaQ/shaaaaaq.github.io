import { writable } from 'svelte/store'
import settings from '../settings.js'

export const calcTypes = (() => {
    const calcTypes = writable(settings.get('calcTypes'))
    const rm = (index, propId) => {
        calcTypes.update(c => {
            if (propId) {
                delete c[index]['rates'][propId]
                return c
            } else {
                if (c.length === 1) return c;
                c.splice(index, 1);
                return c
            }
        })
    }
    const changeRate = (index, propId, rate) => {
        calcTypes.update(c => {
            c[index]['rates'][propId] = rate
            return c
        })
    }
    calcTypes.subscribe(c => settings.set('calcTypes', c))
    calcTypes.subscribe(console.log)

    return {
        ...calcTypes,
        rm,
        changeRate
    }
})()
