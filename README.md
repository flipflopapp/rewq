# Brief

Keyword shortcuts for long urls from browser bar.

This is a fun half day experiment and hosted on https://rewq.app/

# Ideas for improvements

## Improve workflow

### Tools for links (esp. content)
☆☆☆☆

Command:
```
rewq<T>*[name|url]
```

Finds the name or url in settings page and scrolls to it (and highlights it).


### Do more with URLs
☆☆☆☆

Command on chrome-ext:
```
rewq<T>+
```

Exquivalent command on browser bar:
```
rewq<T>+URL
```

Opens an /link?[URL]. In chrome-ext, it picks up the current window URL.

This screen has following options,

* Make a shortcut or a list
* Open with readablity library


### Perform regex on page
☆☆☆☆☆

Enabled as soon as user enters,

```
REWQ<Tab>s/REGEX
```

We went for `s/` because we want to use `/` for misc. commands.


### Save links on server
☆☆☆

Save links on server


## Pack more power tools


### More stretch ideas for links

_And some stretch ideas..._ it would make sense to use external services, because REWQ is supposed to be a shortcut tool as much as possible.

-> send to kindle _or_
-> make notes
-> spaced repetaion service
-> brain store
-> twitter


## Have commands on REWQ with `/`

### Share links across devices
☆☆☆

- Like pushbullet, but no need for installation

```
REWQ<t>/push
```

### A FIFO bookmarker
☆☆☆

- Save top 10 links in a short term bookmark memory

```
REWQ<t>/fifo
```

### Ask Alexa rankings on web
☆☆

Alexa rankings for a webpage.

```
REWQ<Tab>/webrank
```

Okay, so / becomes a command and we can now have commands like slack on /rewq.

In that case, how can we allow people to build their plugins so we don't have to create all commands. Just a thought...


### Make a call
☆☆☆☆

```
REWQ<TAB>/call NUMBER
```

### Send a command to alexa

```
REWQ<TAB>/alexa COMMAND
```

