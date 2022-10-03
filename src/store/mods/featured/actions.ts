export function navigateTo({ deckId }) {
    return {
        type: '@featured/NAVIGATE_TO',
        payload: { deckId }
    }
}

export function loadIndexAction({ id }) {
    return {
        type: '@featured/LOAD_INDEX',
        payload: {
            id
        }
    }
}

export function loadIndexSuccess({ deck }) {
    return {
        type: '@featured/LOAD_INDEX_SUCCESS',
        payload: {
            deck
        }
    }
}