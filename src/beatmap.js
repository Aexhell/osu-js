'use strict';

/**
 * beatmap object
 * @prop {String|Number} approved
 * @prop {String|Date} submit_date
 * @prop {String|Date} approved_date
 * @prop {String|Date} last_update
 * @prop {String|Number} mode
 * @prop {String} artist
**/

class Beatmap {
	constructor(config, data) {
        this.approved = data.approved;
        this.submit_date = data.submit_date;
        this.approved_date = data.approved_date;
        this.last_update = data.last_update;
        this.mode = data.mode;
        this.artist = data.artist;
	}
}

module.exports = Beatmap;