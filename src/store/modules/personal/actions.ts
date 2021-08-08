export function loadDecks() {
    return {
        type: '@personal/LOAD_DECKS'
    }
}
export function loadDecksSuccess({ decks }) {
    return {
        type: '@personal/LOAD_DECKS_SUCCESS',
        payload: {
            decks
        }
    }
}
export function addDecks() {
    return {
        type: '@personal/ADD_DECKS'
    }
}