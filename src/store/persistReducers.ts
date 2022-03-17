import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistor = reducers => {
    const persistedReducer = persistReducer({
        key: "memo",
        storage,
        whitelist: [
            'auth', 'user', 
            'session', 'deck', 'personal', 'frequencies', 'themes', 'review', 'sessions'
        ],
    }, reducers);

    return persistedReducer;
}

export default persistor;