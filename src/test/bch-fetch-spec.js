let expect  = require('expect.js');
let fetch   = require('../bch-fetch');
let sinon   = require('sinon');
let should  = require('should');

describe('Fetch suite', function() {
    obj = null;
    clock = null;

    before(function() {
        obj = new fetch.BchFetch();
        clock = sinon.useFakeTimers();

    });

    it('fetch object being instantiated', function() {
        expect(obj).to.be.ok();
        expect(obj).to.be.a(fetch.BchFetch);
    });

    it('fetch oject call fetchTrack() method', function() {
        let response = obj.fetchTrack('http://test.bandcamp.com/track/some-track');
        expect(obj).to.be.an('object');

        clock.tick(2000);
        expect(response).to.be.an('object');        
    });
})