import React from 'react'
import "./BattleStats.css"

function BattleStats({ heroHP, enemyHP }) {
    return (
        <>
            <div className="heroBox">
                <p>HeroName</p>
                <progress className="heroBar" id="file" value={heroHP} max="100"></progress>
            </div>
            <div className="enemyBox">
                <p>EnemyName</p>
                <progress className="enemyBar" id="file" value={enemyHP} max="50"></progress>
            </div>
        </>
    )
}

export default BattleStats
