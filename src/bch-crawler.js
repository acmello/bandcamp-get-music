const cheerio = require('cheerio');
const fs      = require('fs');
const request = require('request');
const ProgressBar = require('progress')

const MP3_REGEX = /\{\"mp3-128\"\:\"(\S+)\"\}/mi;

class BchCrawler {
    constructor (content) {
        this.content = content;
    }

    crawl () {
        return new Promise((resolve, reject) => {
            if (MP3_REGEX.test(this.content)) {
                
                let selector      = cheerio.load(this.content);
                let artist        = this.getArtistName(selector);
                let track         = this.getTrackName(selector);
                let song          = `${artist} - ${track}.mp3`;
                let extractMP3Url = MP3_REGEX.exec(this.content)[1];
                let url           = `${extractMP3Url}`;
                let stream        = fs.createWriteStream(song);
          
                request
                    .get(url)
                    .on('response', (response) => {
                        this.startProgressBar(song);
                    })
                    .on('error', (err) => console.log(`Err: ${err}`))
                    .pipe(fs.createWriteStream(song))
                    .on('close', (err) => {
                        if (err) {
                            reject(err);
                            console.log(`Err: ${err}`);
                        }

                        resolve({
                            success: true,
                            url: extractMP3Url,
                            artist: artist,
                            song: track
                        });   
                    })
                }
            });
    }
    
    startProgressBar(song) {
        // setting up the progress bar
        let bar = new ProgressBar(':token1 :percent ', {
          total: 100,
          width: 100
        })
        let timer = setInterval(() => {
          bar.tick({
            token1: `Downloading ${song}`,
          });
          if (bar.complete) {
            console.log(`${song} was downloaded successfully.`)
            clearInterval(timer)
          }
        }, 100)
    }

    getTrackName (selector) {
        return selector('#name-section')
            .find('.trackTitle')
        .text().trim();
    }

    getArtistName (selector) {
       return selector('#name-section')
            .find('.albumTitle')
            .find('span[itemprop=\'byArtist\']')
        .text().trim();
    }
}

exports.BchCrawler = BchCrawler;