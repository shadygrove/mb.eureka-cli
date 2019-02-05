const http = require('http');
const log = require('./log');
const fetch = require('node-fetch');
const url = require('url');

const conf = {
    host: 'http://localhost:8765/eureka'
}

class EurekaAPI {
    apps () {
        log.info('EurekaAPI: ls');

        const path = '/apps';
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    app (appId) {
        const path = `/apps/${appId}`;
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    appInstance (appId, instanceId) {
        const path = `/apps/${appId}/${instanceId}`;
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
    instance (instanceId) {
        const path = `/instances/${instanceId}`;
        const apiUrl = new url.URL(conf.host + path);

        return fetch(apiUrl, {
                headers: { 'Accept': 'application/json' },
            })
            .then(res => res.json())
            .then(body => (body));
    }
}

module.exports = EurekaAPI;