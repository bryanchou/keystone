var React = require('react'),
	Field = require('../field'),
	Note = require('../../components/note');

module.exports = Field.create({

	supports: {
		focusTarget: 'first'
	},
	
	valueChanged: function(which, event) {
		this.props.value[which] = event.target.value;
		this.props.onChange({
			path: this.props.path,
			value: this.props.value
		});
	},
	
	renderValue: function() {
		var values = {};
		if (this.props.value.first) {
			values.first = <div className="field-value">{this.props.value.first}</div>;
		}
		if (this.props.value.last) {
			values.last = <div className="field-value">{this.props.value.last}</div>;
		}
		if (!values.first && values.last) {
			values.none = <div className="field-value" />;
		}
		return values;
	},
	
	renderField: function() {
		return (
			<div className="form-row">
				<div className="col-sm-6">
					<input type="text" name={this.props.paths.first} ref="first" value={this.props.value.first} onChange={this.valueChanged.bind(this, 'first')} autoComplete="off" className="form-control" />
				</div>
				<div className="col-sm-6">
					<input type="text" name={this.props.paths.last} ref="last" value={this.props.value.last} onChange={this.valueChanged.bind(this, 'last')} autoComplete="off" className="form-control" />
				</div>
			</div>
		);
	}
	
});
