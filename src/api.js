'use strict';

const request = require('superagent');
const Beatmap = require('./beatmap');
const User = require("./user");

class Api {
    constructor(apiKey) {
        this.apiKey = String(apiKey)
    }

    async apiReq(endpoint, options) {
        try {
            options.k = this.apiKey;
            let resp = await request.get("https://osu.ppy.sh/api" + endpoint).set('User-Agent', `osu-js v1.0.0`).query(options);
            
            return resp.body;
		} catch (error) {
			throw new Error(error);
		}
    }

	async getUser(options) {
        let resp = await this.apiReq('/get_user', options);

		if (resp.length === 0) {
            return this.notFound(resp);
        }

        return new User(this.config, resp[0]);
    }
    
    async getBeatmap(options) {
        let resp = await this.apiReq('/get_beatmaps', options);

		if (resp.length === 0) {
            return this.notFound(resp);
        }

        options.b = Number(options.b);

        return new Beatmap(this.config, resp[0]);
    }
}

module.exports = Api;