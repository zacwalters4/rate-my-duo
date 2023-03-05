export const calculateScore = (accountStats) => {
    console.log(accountStats)
    let score = 10000
    let gamesPlayed = 0
    let gamesWon = 0
    if(accountStats.length === 0) {
        return 0
    }
    accountStats.forEach(stat => {
        if(stat.key === "objective_kills_avg_per_10_min") {
            score = score * (1 + stat.value/10)
        }
        else if(stat.key === "objective_time_avg_per_10_min") {
            score = score * (1 + stat.value/100)
        }
        else if(stat.key === "final_blows_avg_per_10_min") {
            score = score * (1 + stat.value/10)
        }
        else if(stat.key === "objective_contest_time_avg_per_10_min") {
            score = score * (1 + stat.value/100)
        }
        else if(stat.key === "solo_kills_avg_per_10_min") {
            score = score * (1 + stat.value/5)
        }
        else if(stat.key === "hero_damage_done_avg_per_10_min") {
            score = score * (1 + stat.value/10000)
        }
        else if(stat.key === "deaths_avg_per_10_min") {
            score = score * (8/stat.value)
        }
        else if(stat.key === "eliminations_avg_per_10_min") {
            score = score * (1 + stat.value/40)
        }
        else if(stat.key === "assists_avg_per_10_min") {
            score = score * (1 + stat.value/30)
        }
        else if(stat.key === "healing_done_avg_per_10_min") {
            score = score * (1 + stat.value/10000)
        }
        else if(stat.key === "games_played") {
            gamesPlayed = stat.value
        }
        else if(stat.key === "games_won") {
            gamesWon = stat.value
        }    
    })
    score = score * (gamesWon/gamesPlayed/.5)
    return Math.round(score)
}
