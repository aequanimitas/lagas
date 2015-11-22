var React = require('react');

var RoutineWorkBox = React.createClass({
  propTypes: {
    workboxlabel: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className={this.props.workboxlabel + " col-xs-6 col-sm-3 routine-work-box"}>
      </div>
    );
  }
});

var Routine = React.createClass({
  render: function() {
    return (
      <div className="row routine-container">
        <RoutineWorkBox workboxlabel='dynamic-stretches' />
        <RoutineWorkBox workboxlabel='bodyline-work' />
        <RoutineWorkBox workboxlabel='skill-work' />
        <RoutineWorkBox workboxlabel='strength-work' />
      </div>
    );
  }
});

var app = React.createClass({
  // es6
  render: function() {
    return (
      <Routine />
    );
  }
});

module.exports = app;
