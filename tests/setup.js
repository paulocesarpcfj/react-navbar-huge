
require('babel-register')();

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];
global.document = jsdom('');
global.window = document.defaultView;
global.API_URL = 'http://localhost.com:8888';
global.ENV_NAME = 'DEV';

global.window.localStorage = global.window.sessionStorage = {
    getItem(key) {
        return this[key];
    },
    setItem(key, value) {
        this[key] = value;
    },
    removeItem(key) {
        delete this[key];
    },
};
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js',
};
