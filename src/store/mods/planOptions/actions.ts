export function indexAction({ name }) {
    return {
        type: '@planOptions/INDEX',
        payload: {
            name
        }
    }
}

export function indexSuccess({ option }) {
    return {
        type: '@planOptions/INDEX_SUCCESS',
        payload: {
            option
        }
    }
}

export function paymentAction({ document }) {
    return {
        type: '@planOptions/PAYMENT',
        payload: {
            document
        }
    }
}

export function paymentSuccess({ payment }) {
    return {
        type: '@planOptions/PAYMENT_SUCCESS',
        payload: {
            payment
        }
    }
}

export function paymentFailed() {
    return {
        type: '@planOptions/PAYMENT_FAILED'
    }
}