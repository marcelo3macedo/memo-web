import produce from "immer";

const INITIAL_STATE = {
    option: null,
    loading: false,
    failed: false,
    paymentId: null,
    payment: null
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case "@planOptions/INDEX_SUCCESS": {
                draft.option = action.payload.option;
                break;
            }
            case "@planOptions/PAYMENT": {
                draft.loading = true;
                draft.failed = false;
                break;
            }
            case "@planOptions/PAYMENT_CHECK": {
                draft.paymentId = action.payload.paymentId;
                break;
            }
            case "@planOptions/PAYMENT_SUCCESS": {
                draft.loading = false;
                draft.payment = action.payload.payment;
                break;
            }
            case "@planOptions/PAYMENT_FAILED": {
                draft.loading = false;
                draft.failed = true;
                break;
            }
            default:
                return state;
        }
    });
}