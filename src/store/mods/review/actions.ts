export function loadAction({ session }) {
    return {
        type: '@review/LOAD',
        payload: {
            session
        }
    }
}
export function loadOptionsAction() {
    return {
        type: '@review/LOAD_OPTIONS'
    }
}
export function loadOptionsSuccess({ options }) {
    return {
        type: '@review/LOAD_OPTIONS_SUCCESS',
        payload: {
            options
        }
    }
}
export function loadOptionsFailure() {
    return {
        type: '@review/LOAD_OPTIONS_FAILURE'
    }
}
export function setOptionAction({ card, option }) {
    return {
        type: '@review/SET_OPTION',
        payload: {
            card,
            option
        }
    }
}
export function finishAction({ session, cards }) {
    return {
        type: '@review/FINISH',
        payload: {
            session,
            cards
        }
    }
}
export function finishSuccess() {
    return {
        type: '@review/FINISH_SUCCESS'
    }
}
export function finishFailure() {
    return {
        type: '@review/FINISH_FAILURE'
    }
}