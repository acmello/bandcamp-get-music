let expect  = require('expect.js');
let crawler = require('../bch-crawler');
let sinon   = require('sinon');
let should  = require('should');

describe('Crawler suite', function() {
    before(function () {
        content = `
            <html>
            <body>
                <div id='name-section'>
                    <div class='trackTitle'>
                    My horrible music
                    </div>
                    <div class='albumTitle'>
                    <span itemprop='byArtist'>Me</span>
                    </div>
                </div>
            </body>
            </html>
        `;  
        obj     = new crawler.BchCrawler(content);
        clock   = sinon.useFakeTimers(); 
    })

    it('crawler object being instantiated', function() {
        expect(obj).to.be.ok();
        expect(obj).to.be.a(crawler.BchCrawler);
    });

    it('crawl the page ', function() {
        let expectedReturn = { success: true, artist: 'Me', track: 'My horrible music' };
        response = obj.crawl();
        
        clock.tick(2000);
        expect(response).to.be.an('object');
        expect(response.then).to.be.an('function');
        response.should.be.a.Promise();
    
        response.should.be.finally.equal(1);
    });
});