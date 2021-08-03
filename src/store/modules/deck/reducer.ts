import produce from "immer";

const INITIAL_STATE = {
    deck: {
        "name": "Deck 001",
        "cards": [
            {
                "id": "24b22a45-2a5e-4a56-99ee-ef9e9359f739",
                "content": "What is 2+2 lorem ipuidsahaph adoh apos h hsoah?",
                "secretContent": "What is 2+2 lorem ipuidsahaph adoh apos h hsoah",
                "active": true,
                "createdAt": "2021-06-12T17:52:19.570Z"
            },
            {
                "id": "34b22a45-2a5e-4a56-99ee-ef9e9359f739",
                "content": "What is 2+2?",
                "secretContent": "It's 4.",
                "active": true,
                "createdAt": "2021-06-12T17:52:19.570Z"
            },
            {
                "id": "44b22a45-2a5e-4a56-99ee-ef9e9359f739",
                "content": "What is 2+2?",
                "secretContent": "It's 4.",
                "active": true,
                "createdAt": "2021-06-12T17:52:19.570Z"
            },
            {
                "id": "54b22a45-2a5e-4a56-99ee-ef9e9359f739",
                "content": "What is 2+2?",
                "secretContent": "It's 4.",
                "active": true,
                "createdAt": "2021-06-12T17:52:19.570Z"
            }
        ]
    }
};

export default function navigate(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}