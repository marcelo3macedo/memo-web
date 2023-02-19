const validationTsPath = 'validationMessages'

function getErrorMessage(response) {
    if (!response || !response.data || !response.data.error) return;

    return `${validationTsPath}.${response.data.error}`
}

export {
    getErrorMessage
} 