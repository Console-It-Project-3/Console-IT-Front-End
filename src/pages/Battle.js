import React, { Component, useState } from "react";
import BattleText from "../components/battleText"
import Moving from "../components/movement"
import Inventory from "../components/inventory"






function handleButtonInventory() {
    console.log("clicked");

}
function handleButton3() {
    console.log("clicked");

}
function handleButtonRun() {
    console.log("clicked");

}


class Battle extends Component {

    state = {
        heroHP: 100,
        heroAttack: 20,
        enemyHP: 50,
        enemyAttack: 10,
        battleDialogue: "You encountered a rogue knight! What would you like to do? ",
        currentlyInBattle: true,
        faded: true,
    }


    handleButtonFight = () => {
        console.log("clicked");

        this.setState({
            // battleDialogue: `You attacked! You dealt ${this.state.heroAttack} damage \n Enemey deal you ${this.state.enemyAttack}`,
            enemyHP: this.state.enemyHP - this.state.heroAttack,
            faded: false
        }, function () {
            if (this.state.enemyHP <= 0 && this.state.currentlyInBattle === true) {
                console.log('defeated enimes!!!')

                this.endBattle()
            } else {
                this.setState({
                    heroHP: this.state.heroHP - this.state.enemyAttack,
                    // faded: true,

                })
            }
            var self = this
            setTimeout(function () {
                if (self.state.currentlyInBattle) {
                    self.setState({ faded: true, battleDialogue: `You attacked! You dealt ${self.state.heroAttack} damage \n Enemey deal you ${self.state.enemyAttack}` })
                }

            }, 100)
        })

    }

    endBattle = () => {
        this.setState({
            battleDialogue: "You have defeated the enemy!",
            currentlyInBattle: false
        })

    }



    render() {




        // if (this.state.enemyHP <= 0 && this.state.currentlyInBattle === true) {
        //     console.log('defeated enimes!!!')

        //     this.endBattle()
        // }

        // else {
        //     console.log('taking 10 damadge!!')
        //     this.setState({
        //         battleDialogue: " Enemy attacked taking 10 damage",
        //         heroHP: this.state.heroHP - this.state.enemyAttack
        //     })
        // }

        return (
            <>
                <Moving />
                <BattleText handleButtonFight={this.handleButtonFight} handleButtonInventory={this.handleButtonInventory} handleButton3={this.handleButton3} handleButtonRun={this.handleButtonRun} battleDialogue={this.state.battleDialogue} faded={this.state.faded} />
                <Inventory />
            </>
        )
    }
}

export default Battle