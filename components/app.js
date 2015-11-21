var React = require('react');

var RoutineWorkBox = React.createClass({
  render: function () {
    return (<div className="col-xs-6 col-sm-3 routine-work-box">
             <span>{ this.props.label } </span>  
           </div>);
  }
});

var BodylineWork = React.createClass({
  label: 'Bodyline Work',
  render: function() {
    return <RoutineWorkBox label={this.label} /> 
  }
});

var SkillWork = React.createClass({
  label: 'Skill Work',
  render: function() {
    return <RoutineWorkBox label={this.label} /> 
  }
});

var StrengthWork = React.createClass({
  label: 'Strength Work',
  render: function() {
    return <RoutineWorkBox label={this.label} /> 
  }
});

var DynamicStretches = React.createClass({
  label: 'Dynamic Stretches',
  render: function() {
    return <RoutineWorkBox label={this.label} /> 
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
