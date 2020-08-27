# Brief

Keyword shortcuts for long urls from browser bar.

This is a fun half day experiment and hosted on https://rewq.app/.

Below are the ideas for improving the app. All ideas are for chrome-extension, unless the `place` says, `web` explicitly.


# Ideas for improvements

## Improve workflow

### Fuzzy search in link opening

- Perform a fuzzy search of all shortcuts
- 1. Open an exact match
- 2. Open a close match
- 3. Show all possible matching options in /unsure


### Open all links in a list (& other improvements)

Priority: ★★★ [p1]

Place: web

- Add an open all button to a list page.

Other possible improvements to the page,
- Remove a link from list
- Add a link to the list

### Perform regex on page

Priority: ★★★ [p1]

Place: chrome-extension

Enabled as soon as user enters,

```
REWQ<Tab>s/REGEX
```

We went for `s/` because we want to use `/` for misc. commands.


### Tools for links (esp. content)

Priority: ★★


Command:
```
rewq<T>*[name|url]
```

Finds the name or url in settings page and scrolls to it (and highlights it).


### Do more with URLs
Priority: ★★

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


### Show all shortcuts and links

```
rewq<T>list
```


### Save links on server

Priority: ★

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

### Help

Priority: ★★

```
REWQ<TAB>/help NUMBER
```

A better help


### Make a call

Priority: ★★

```
REWQ<TAB>/call NUMBER
```

### Share links across devices

Priority: ★★

- Like pushbullet, but no need for installation

```
REWQ<t>/push
```

### A FIFO bookmarker

Priority: ★★

- Save top 10 links in a short term bookmark memory

```
REWQ<t>/fifo
```

### Ask Alexa rankings on web

Alexa rankings for a webpage.

```
REWQ<Tab>/webrank
```

Okay, so / becomes a command and we can now have commands like slack on /rewq.

In that case, how can we allow people to build their plugins so we don't have to create all commands. Just a thought...



### Send a command to alexa

```
REWQ<TAB>/alexa COMMAND
```

