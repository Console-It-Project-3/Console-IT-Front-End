import React from 'react'
import "./returnToStory.css"


function ReturnToStory({ endShow }) {

    const returnStory = endShow ? "returnStory" : "returnStory hide"

    return (
        <div>
            <button href="/movement" className={returnStory}>Continue</button>
        </div >
    )
}

export default ReturnToStory
