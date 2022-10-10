import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistor = reducers => {
    const persistedReducer = persistReducer({
        key: "memo",
        storage,
        whitelist: [
            'auth', 'user', 'session', 'redirect', 'deck', 'personal', 'frequencies', 'themes', 'review', 'sessions', 'navigate', 'decks', 'cards', 'featured'
        ],
    }, reducers);

    return persistedReducer;
}

export default persistor;