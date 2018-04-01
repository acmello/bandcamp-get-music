A CLI tool that enables you to download single tracks or entire albums from [bandcamp](https://bandcamp.com).

## Installation
  ```bash
  $ npm install -g bandcamp-get-music
  ```
And you should be good to go.

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

It should be pretty straight forward you're looking for a quick help to make it easier for you to remember
all the options. By passing `-h` you should be able to see a very simple menu with all the information that
you need.

## Creator

**Antonio Mello**

- <https://twitter.com/acmello666>
- <https://github.com/acmello> 

## LICENSE

MIT

