export function loadThemesSuccess({ themes }) {
    return {
        type: '@theme/LOAD_SUCCESS',
        payload: {
            themes
        }
    }
}

export function selectThemeAction({ themeId }) {
    return {
        type: '@theme/SELECT_ACTION',
        payload: {
            themeId
        }
    }
}