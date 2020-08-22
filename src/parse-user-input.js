
function isList(rawType) {
  const type = rawType.toLowerCase();
  return (type === 'list' || type === 'sequence' || type === 'random');
}

const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

function isUrl(url) {
  return URL_REGEX.test(url);
}

function partsOfLineInReverse(line) {
  const parts = line.split(' ')
    .map(str => str.trim())
    .filter(str => str !== '' && str !== '->')
    .reverse();
  return parts;
}

function parse(text) {
  const result = {};
  let shortcut = '';
  let type = '';
  let urls = [];
  const lines = text.split('\n');

  lines.forEach(line => {
    const action = line[0];

    if (action === '-' || action === '#' || line.trim().length === 0) {
      // comment - contine
      return;
    }

    if (action === '*' && isList(type)) {
      // add list item
      const parts = partsOfLineInReverse(line.substr(1));
      const link = parts.shift();
      if (parts.length === 0) {
        urls.push({ link });
      } else {
        const name = parts.reverse().join(' ');
        urls.push({ name, link });
      }
      return;
    }

    // last list
    saveAndResetURLArray();

    const parts = partsOfLineInReverse(line);
    const typeOrUrl = parts.shift();
    shortcut = parts.reverse().join('-').toLowerCase();

    if (isUrl(typeOrUrl)) {
      type = 'shortcut';
      urls.push({ link: typeOrUrl });
    } else {
      type = typeOrUrl;
    }
  })

  saveAndResetURLArray();
  return result;

  function saveAndResetURLArray() {
    if (shortcut.length === 0 || urls.length === 0) {
      return;
    }

    const shortcutData = JSON.stringify({
      type,
      urls
    });
    result[shortcut] = shortcutData;
    urls = [];
    type = '';
  }
}

export function parseAndSave(text) {
  const data = parse(text);
  const shortcuts = Object.keys(data) || [];
  shortcuts.forEach(key => {
    localStorage.setItem(key, data[key]);
  });
  return shortcuts.length;
}

/*
const text = `
- My work links
standup -> https://meet.google.com/abc-abc-abc
heroku -> https://dashboard.heroku.com/teams/my-org/apps
jupyter -> https://console.google.com/some-very-long-link

- A 5 minute meditation
meditate -> https://https://www.youtube.com/watch?v=inpok4MKVLM

- Browser tools
notes -> http://textpad.surge.sh/

- More in Help (below)
- Make playlists
- Quickly add new links without copy-paste

name -> list
* link1 https://meet.google.com/abc-abc-abc
* link2 https://meet.google.com/abc-abc-abc
* https://meet.google.com/abc-abc-abc
`;

const urls = parseAndSync(text);
console.log(urls);
*/