import {SET_ACTIVE_ROUTE } from '../actionTypes/general.js'

export function setActiveRoute (activeRoute) {
    return {
        type:SET_ACTIVE_ROUTE,
        activeRoute
    }
}
