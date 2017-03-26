var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = (props) => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li to="/">
                        <Link to="/" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>

            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Create by <a href="https://github.com/dungvatoi12" target="_blank">dungvatoi12</a>
                    </li>
                </ul>
                
            </div>
        </div>
    );
};

module.exports = Nav;