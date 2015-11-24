import {
	get,
	set,
	$,
	Component
} from "Ember";
import layout from "hbs!templates/components/FileSelectComponent";


export default Component.extend({
	layout,
	tagName: "div",
	classNames: [ "input-group" ],

	value: "",
	placeholder: "",
	disabled: false,

	_createInput: function() {
		var self = this;
		self._input = $( "<input>" ).addClass( "hidden" ).attr({
			type: "file",
			tabindex: -1
		}).change(function() {
			if ( !this.value.length ) { return; }
			set( self, "value", this.value );
			this.files.clear();
		});
	}.on( "init" ),

	actions: {
		"selectfile": function() {
			if ( !get( this, "disabled" ) ) {
				this._input.click();
			}
		}
	}
});
