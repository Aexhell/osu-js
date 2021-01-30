'use strict';

/**
 * user object
 * @prop {String} id
 * @prop {String} name
 * @prop {String} country
 * @prop {String|Number} level
 * @prop {String|Number} accuracy
 * @prop {String|Number} secondsPlayed
 * @prop {String} raw_joinDate
**/

class User {
	constructor(config, data) {
		this.id = data.user_id;
		this.name = data.username;
		this.country = data.country;
		this.level = data.level;
		this.accuracy = data.accuracy
		this.secondsPlayed = data.total_seconds_played;
		this.raw_joinDate = data.join_date;
	}
}

module.exports = User;