const http = require('http');
const log = require('./log');
const fetch = require('node-fetch');
const url = require('url');

class EurekaAPI {
    
    constructor (settings) {
        log.debug('settings', JSON.stringify(settings));
        this.conf = settings;
    }

    apps () {
        log.debug('EurekaAPI: ls');

        const path = '/apps';
        const apiUrl = new url.URL(this.conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    app (appId) {
        const path = `/apps/${appId}`;
        const apiUrl = new url.URL(this.conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    appInstance (appId, instanceId) {
        const path = `/apps/${appId}/${instanceId}`;
        const apiUrl = new url.URL(this.conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    instance (instanceId) {
        const path = `/instances/${instanceId}`;
        const apiUrl = new url.URL(this.conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
}

module.exports = EurekaAPI;