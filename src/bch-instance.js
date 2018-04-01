const commander = require('commander');
const fetch     = require('./bch-fetch');

const VALID_ALBUM_URL_REGEX = /^(https:\/\/)?\w+\.bandcamp\.com\/album\/.+$/g; 
const VALID_TRACK_URL_REGEX = /^(https:\/\/)?\w+\.bandcamp\.com\/track\/.+$/g

class BchHack {
    constructor() {
        this.initialize();
    }

    /**
    * Main instance for BandCampHack. Initialize whe
    * whole process responsible to trigger the initial
    * state of the hacking.
    * @constructor 
    **/
    initialize () {
        commander
            .version('0.0.1')
            .option('-a, --album', 'set the artist\'s URL album')
            .option('-t, --track', 'set the track URL')
            .option('-s, --search', 'search for available album from specific artist')
            .parse(process.argv);

        let url = commander.args[0];

        if (commander.album) {
            console.log('Downloading the album...');
            
            if (! VALID_ALBUM_URL_REGEX.test(url)) {
                throw 'Error: URL does not match. See -h for help.';
            }

            let bchFetch = new fetch.BchFetch();
            bchFetch.fetchMultipleTracks(url);
        }

        if (commander.track) {
            console.log('Downloading the track...');

            if (! VALID_TRACK_URL_REGEX.test(url)) {
                throw 'Error: URL does not match. See -h for help.';
            }
          
            let bchFetch = new fetch.BchFetch();
            bchFetch.fetchTrack(url);
        }
    }
}

exports.BchHack = BchHack;