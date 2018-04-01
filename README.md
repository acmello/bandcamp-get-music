A CLI tool that enables you to download single tracks or entire albums from [bandcamp](https://bandcamp.com).

## Installation
  ```bash
  $ npm install -g bandcamp-get-music
  ```

Or you can directly clone this repo. Both ways should set you up for using this.

## Options

Options must be defined every time you run bandcamp-get-music. The example below parses args depending on what
you're trying to achieve, for instance:
  
  ```bash
  $ bandcamp-get-music -V 
  ```

By running this with the `-V` you should be able to grab the version. Make sure you always use
the latest one to avoid unexpected errors.

## Getting a single track

  ```bash
  $ bandcamp-get-music -t https://someband.bandcamp.com/track/some-music
  ```

By passing `-t` followed by the track url, you should be able to download the song. If you run
into any errors, check if the URL corresponds to the exact same pattern as shown above.

## Getting an entire album

  ```bash
  $ bandcamp-get-music -a https://someband.bandcamp.com/album/some-album-name
  ```

By passing `-a` followed by the album url, you should be able to grab the whole thing. as mentioned
above, if you run into any errors, check if the URL corresponds to the exact same pattern as shown previously.

## Display help

It should be pretty straight forward if you're looking for a quick help. By passing `-h` you should be able to see:

```bash
  Usage: bandcamp-get-music [options]

  Options:

    -V, --version  output the version number
    -a, --album    set the artist\'s URL album
    -t, --track    set the track URL
    -s, --search   search for available album from specific artist
    -h, --help     output usage information
```

Nice to point out `-s` (search option) was not yet implemented.   

## Creator

**Antonio Mello**

- <https://twitter.com/acmello666>
- <https://github.com/acmello> 

## LICENSE

MIT

