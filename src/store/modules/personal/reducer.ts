import produce from "immer";

const INITIAL_STATE = {
    decks: [
        {
          "id": "fb7f0d7f-e631-4a2b-876d-ffe89495ef68",
          "name": "Science test",
          "userId": "39c77524-9f8f-4d04-ab8a-f9a39eeff84a",
          "imageId": null,
          "active": true,
          "createdAt": "2021-06-12T06:19:25.642Z"
        }
    ],
    lastSession: null
};

export default function personal(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            default:
                return state;
        }
    });
}