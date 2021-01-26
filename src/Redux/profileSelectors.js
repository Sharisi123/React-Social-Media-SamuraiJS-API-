import { createSelector } from "reselect"

export const getProfile = state => {
    return state.profilePage.profile
}

export const getProfileSuperSelector = createSelector( getProfile, (profile) => {
    return profile
})