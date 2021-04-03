import React, { Component } from 'react'
import './css/reset.css'
import './App.css'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            srcs: [5, 0, 1]
        };
        this.onTouchMove = this.onTouchMove.bind(this)
        this.onTouchStart = this.onTouchStart.bind(this)
        this.onTouchEnd = this.onTouchEnd.bind(this)
        this.moveLeft = this.moveLeft.bind(this)
        this.moveRight = this.moveRight.bind(this)
        this.next = this.next.bind(this)
        this.last = this.last.bind(this)

        this.state.timer = setInterval(() => {
            this.moveLeft(true)
        }, 3000)
    }

    onTouchStart(event) {
        this.setState({LastTouch:event.touches[0].clientX})
        this.setState({ startTouch: event.touches[0].clientX })
        clearInterval(this.state.timer)
    }

    onTouchEnd(event) {
        let distance = this.state.LastTouch - this.state.startTouch
        console.log(distance)
        if (distance < -100) {
            this.moveLeft(true)
        } else if (distance > 100) {
            this.moveRight(true)
        } else if (distance > 0) {
            this.moveLeft(false)
        } else if (distance < 0) {
            this.moveRight(false)
        }
        this.setState({timer:setInterval(() => {
            this.moveLeft(true)
        }, 3000)})
    }

    onTouchMove(event) {
        let touch = event.touches[0].clientX
        let p = event.target.parentNode.parentNode
        p.style.left = p.offsetLeft + touch - this.state.LastTouch + "px"
        this.setState({LastTouch:touch})
    }

    moveLeft(recover) {
        let p
        let timer = setInterval(() => {
            p = document.getElementsByTagName('ul')[0]
            p.style.left = p.offsetLeft - 5 + "px"
            if (Math.abs(p.offsetLeft + 300) < 4 || Math.abs(p.offsetLeft + 600) < 6) {
                clearInterval(timer)
                if (recover) {
                    let srcs = this.state.srcs
                    srcs[1] = (srcs[1] + 1) % 6
                    this.setState({ srcs: srcs })
                    
                    document.getElementsByTagName('ul')[0].style.left = "-300px"
                    
                    srcs = this.state.srcs
                    srcs[0] = (srcs[0] + 1) % 6
                    srcs[2] = (srcs[2] + 1) % 6
                    this.setState({ srcs: srcs })
                }
                document.getElementsByTagName('ul')[0].style.left = "-300px"
            }
        }, 10);
    }

    moveRight(recover) {
        let p
        let timer = setInterval(() => {
            p = document.getElementsByTagName('ul')[0]
            p.style.left = p.offsetLeft + 5 + "px"
            console.log(p.offsetLeft)
            if (Math.abs(p.offsetLeft) < 4 || Math.abs(p.offsetLeft + 300) < 4) {
                clearInterval(timer)
                if (recover) {
                    let srcs = this.state.srcs
                    srcs[1] = (srcs[1] - 1) == -1 ? 5 : (srcs[1] - 1)
                    this.setState({ srcs: srcs })
                    
                    document.getElementsByTagName('ul')[0].style.left = "-300px"
                    
                    srcs = this.state.srcs
                    srcs[0] = (srcs[0] - 1) == -1 ? 5 : (srcs[0] - 1)
                    srcs[2] = (srcs[2] - 1) == -1 ? 5 : (srcs[2] - 1)
                    this.setState({ srcs: srcs })
                }
                document.getElementsByTagName('ul')[0].style.left = "-300px"
            }
        }, 10);
    }

    next() {
        clearInterval(this.state.timer)
        this.moveLeft(true)
        this.setState({timer:setInterval(() => {
            this.moveLeft(true)
        }, 3000)})
    }

    last() {
        clearInterval(this.state.timer)
        this.moveRight(true)
        this.setState({timer:setInterval(() => {
            this.moveLeft(true)
        }, 3000)})
    }

    render() {
        return (
            <div className='App-wrapper'>
                <div className='App'>
                    <ul className='Slide'
                        onTouchMove={this.onTouchMove}
                        onTouchStart={this.onTouchStart}
                        onTouchEnd={this.onTouchEnd}
                    >
                        {
                            this.state['srcs'].map((src, index) => {
                                return <li key={index}><img src={"./img/img (" + src +").png"} alt=''/></li>
                            })
                        }
                    </ul>
                </div>
                <button onClick={this.last}>上一张</button>
                <button onClick={this.next}>下一张</button>
            </div>
        )
    }
}
