const crawler = require('./bch-crawler'); 
const cheerio = require('cheerio');
const request = require('request');
const fs      = require('fs');

/**
 * getAllUrlsFromArtistPage Get all links underneath the music names. 
 * @param  {[Object]} $ 
 * @return {[Array]}   
 */
let getAllUrlsFromArtistPage = $ => $('.title-col').find('a');

/**
 * getBaseURL Get the base URL with no params.
 * @param  {[String]} fullURL 
 * @return {[String]}
 */
let getBaseURL = fullURL => fullURL.split('/')[2];

/**
 * getFullURL Get the full URL
 * @param  {[String]} trackURL Track URL 
 * @param  {[String]} baseURL  Base URL
 * @return {[String]}
 */
let getFullURL = (trackURL, baseURL) => `https://${baseURL}${trackURL}`;

/**
 * [BchFetch description]
 */
class BchFetch {
    constructor() {
        this.crawler = null;
    }
    
    /**
     * fetchTrack Fetch a tracks based on the url track
     * @param  {[String]} url 
     * @return {[Promise]} 
     */
    fetchTrack (url) {
        return new Promise((resolve, reject) => {
            console.log(`from ${url}`)
            request(url, (err, res, body) => {
                if (err) reject(`Error: ${err}`);
                
                this.crawler = new crawler.BchCrawler(body);
                this.crawler.crawl()
                    .then(data => resolve(data));
            }); 
        });
    }
    
    /**
     * fetchMultipleTracks Fetch multiple tracks based on the url tracks
     * @param  {[String]} url
     */
    fetchMultipleTracks (url) {
        request(url, (err, res, body) => {
            if (err) throw `Error: ${err}`;

            let externalThis = this;
            let $ = cheerio.load(body);
            let urlTracks = getAllUrlsFromArtistPage($);
            let baseURL = getBaseURL(url);

            urlTracks.each(function () {
                externalThis.fetchTrack(
                  getFullURL($(this).attr('href').trim(), baseURL)
                );
            })
        });
    };
}

exports.BchFetch = BchFetch;