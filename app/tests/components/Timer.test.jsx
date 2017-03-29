var React = require('react');
var ReactDOM = require('react-dom');

var expect = require('expect');
var $ = require('jQuery');

var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');


describe('Timer', () => {
    it('should exists', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status',(done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        
        timer.handleStatusChange('started');

        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            expect(timer.state.runStatus).toBe('started');
            done();
        },1001);
    });

    it('shoud pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.setState({count: 10});
        timer.handleStatusChange('started')
        timer.handleStatusChange('paused');

        var pause_timer = 10;

        setTimeout(() => {
            expect(timer.state.count).toBe(pause_timer);
            expect(timer.state.runStatus).toBe('paused');
            done();
        }, 3001 );
    });


    it('shoud clear timer on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.setState({count: 10});
        timer.handleStatusChange('started')
        timer.handleStatusChange('stopped');


        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.runStatus).toBe('stopped');
            done();
        }, 3001 );
    });


});