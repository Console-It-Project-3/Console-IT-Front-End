import React from 'react'
import "./scores.css"

function scores() {
    return (
        <div className="highcontain">
            <div className="scoreContain">
                <h3 className="scoreTitle">High Scores</h3>
                <div className="row">
                    <div className="col-md-6 scoreName">
                        <p>Andre</p>
                    </div>
                    <div className="col-md-6 scoreScore">
                        <p>10,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default scores
