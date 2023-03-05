export const formatURL = (accountName) => {
    return accountName.replace('#', '-')
}

export const formatAccountName = (accountURL) => {
    return accountURL.replace('/account/', '')
}

export const formatBattleTag = (accountName) => {
    return accountName.replace('-', '#')
}

export const formatLabel = (label) => {
    if(label.includes(' - Avg per 10 Min')) {
        return label.replace(' - Avg per 10 Min', '')
    }
    else if(label.includes(' - Avg per 10 min')) {
        return label.replace(' - Avg per 10 min', '')
    } else {
        return label
    }
}