export function loadFrequenciesSuccess({ frequencies }) {
    return {
        type: '@frequencies/LOAD_SUCCESS',
        payload: {
            frequencies
        }
    }
}