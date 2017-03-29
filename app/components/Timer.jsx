var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls')

var Timer = React.createClass({
    getInitialState: function() {
        return {
            runStatus: "stopped",
            count: 0
        }
    },
    componentDidUpdate(prevProps, prevState) {
        if (this.state.runStatus != prevState.runStatus) {
            switch(this.state.runStatus) {
                case 'started':
                    this.startTime();
                    break;
                case 'stopped': 
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.time);
                    this.time = undefined;
                    break;

            }
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.time);
        this.time = undefined;
    },
    startTime: function() {
        
        this.time = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({count: newCount});
        },1000)
    },
    handleStatusChange: function(newStatus) {
        this.setState({runStatus: newStatus})
    },
    render: function() {
        var {runStatus, count} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer App</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus ={runStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;