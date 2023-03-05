export const fetchAccount = (account) => {
    return (
        fetch(`https://overfast-api.tekrop.fr/players/${account}/stats?gamemode=competitive&platform=pc&hero=all-heroes`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(data => {
                return data['all-heroes'][1].stats
            })
    )
}