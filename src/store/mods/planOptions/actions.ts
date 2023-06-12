export function indexAction({ name }) {
  return {
    type: '@planOptions/INDEX',
    payload: {
      name,
    },
  };
}

export function indexSuccess({ option }) {
  return {
    type: '@planOptions/INDEX_SUCCESS',
    payload: {
      option,
    },
  };
}

export function paymentAction({ document, option }) {
  return {
    type: '@planOptions/PAYMENT',
    payload: {
      document,
      option,
    },
  };
}

export function paymentCheck({ id }) {
  return {
    type: '@planOptions/PAYMENT_CHECK',
    payload: {
      id,
    },
  };
}

export function paymentSuccess({ payment }) {
  return {
    type: '@planOptions/PAYMENT_SUCCESS',
    payload: {
      payment,
    },
  };
}

export function paymentFailed() {
  return {
    type: '@planOptions/PAYMENT_FAILED',
  };
}
