export const formatURL = (accountName) => {
    return accountName.replace('#', '-')
}

export const formatAccountName = (accountURL) => {
    return accountURL.replace('/account/', '')
}