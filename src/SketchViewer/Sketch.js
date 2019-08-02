import p5 from "p5";
import PropTypes from "prop-types";
import React from "react";

export default class Sketch extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        setup: PropTypes.func.isRequired,
        draw: PropTypes.func,
        windowResized: PropTypes.func,
        preload: PropTypes.func,
        mouseClicked: PropTypes.func,
        doubleClicked: PropTypes.func,
        mouseMoved: PropTypes.func,
        mousePressed: PropTypes.func,
        mouseWheel: PropTypes.func,
        mouseDragged: PropTypes.func,
        mouseReleased: PropTypes.func,
        keyPressed: PropTypes.func,
        keyReleased: PropTypes.func,
        keyTyped: PropTypes.func,
        touchStarted: PropTypes.func,
        touchMoved: PropTypes.func,
        touchEnded: PropTypes.func,
        deviceMoved: PropTypes.func,
        deviceTurned: PropTypes.func,
        deviceShaken: PropTypes.func
    };
    componentDidMount() {
        this.scketch = new p5(p => {
            p.setup = () => {
                this.props.setup(p, this.refs.canvas_container);
            };
            const p5Events = [
                "draw",
                "windowResized",
                "preload",
                "mouseClicked",
                "doubleClicked",
                "mouseMoved",
                "mousePressed",
                "mouseWheel",
                "mouseDragged",
                "mouseReleased",
                "keyPressed",
                "keyReleased",
                "keyTyped",
                "touchStarted",
                "touchMoved",
                "touchEnded",
                "deviceMoved",
                "deviceTurned",
                "deviceShaken"
            ];
            p5Events.forEach(event => {
                if (this.props[event]) {
                    p[event] = () => {
                        this.props[event](p);
                    };
                }
            });
        });
    }
    shouldComponentUpdate() {
        return false;
    }
    componentWillUnmount() {
        this.scketch.remove();
    }
    render() {
        return <div ref="canvas_container" className={this.props.className || ""} style={this.props.style || {}} />;
    }
}