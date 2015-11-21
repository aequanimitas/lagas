var React = require('react');

var BodylineWork = React.createClass({
  render() {
    return (
      <div className="col-xs-6 col-sm-3">
       <span>Bodyline Work</span>  
      </div>
    );
  }
});
var SkillWork = React.createClass({
  render() {
    return (
      <div className="col-xs-6 col-sm-3">
        <span>Skill Work</span>
      </div>
    );
  }
});
var StrengthWork = React.createClass({
  render() {
    return (
      <div className="col-xs-6 col-sm-3">
        <span>Strength Work</span>
      </div>
    );
  }
});
var DynamicStretches = React.createClass({
  render() {
    return (
      <div className="col-xs-6 col-sm-3">
        <span>Dynamic Stretches</span>
      </div>
    );
  }
});

var Routine = React.createClass({
  render: function() {
    return (
      <div className="row routine-container">
        <DynamicStretches />
        <BodylineWork />
        <SkillWork />
        <StrengthWork />
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
