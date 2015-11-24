import {
	get,
	set,
	Route
} from "Ember";
import preload from "utils/preload";


export default Route.extend({
	model: function() {
		var store = get( this, "store" );

		return Promise.all([
			store.findAll( "twitchStreamsSummary", { reload: true } ),
			store.query( "twitchStreamsFeatured", {
				offset: 0,
				limit: 5
			})
		])
			.then(function( data ) {
				var summary  = data[0].toArray()[0];
				var featured = data[1].toArray();

				return Promise.resolve( featured )
					.then( preload([
						"image",
						"stream.preview.large_nocache"
					]) )
					.then(function() {
						return { summary, featured };
					});
			});
	},

	resetController: function( controller, isExiting ) {
		if ( isExiting ) {
			set( controller, "isAnimated", false );
		}
	}
});
