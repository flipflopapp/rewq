
export function parseAndSync(text) {
  let shortcut = '';
  let type = '';
  let urls = [];
  const lines = text.split('\n');

  lines.forEach(line => {
    const action = line[0];
    switch(action) {
      case undefined:
      case '-':
      case '#': {
        return;
      }
      case '+': {
        saveAndReset();
        const title = line.substr(1).split(' ').filter(str => str.trim() !== '');
        shortcut = title[0].toLowerCase();
        type = title[1].toLowerCase();
        return;
      }
      default: {
        const url_arr = line.split(' ').filter(str => str.trim() !== '');
        if (url_arr.length === 1) {
          urls.push({ link: url_arr[0] });
        } else {
          urls.push({ link: url_arr[1], name: url_arr[0] });
        }
        return;
      } 
    }
  })

  saveAndReset();
  return;

  function saveAndReset() {
    if (shortcut.length === 0 || urls.length === 0) {
      return;
    }

    const shortcutData = JSON.stringify({
      type,
      urls
    });
    localStorage.setItem(shortcut, shortcutData);

    urls = [];
  }
}

/*
const text = "\n\
# Syntax,\n\
# \n\
# + [NAME] [list | shortcut | random | sequence]\n\
# Name URL\n\
# Name URL\n\
# ...\n\
#\n\
# use +++ for new lists, shortcuts or other accessing ways\n\
# use - or # for comments\n\
#\n\
\n\
+ standup shortcut\n\
url-here\n\
- [commented-url]     \n\
\n\
+ workout  list \n\
Kettlebells url-here\n\
Exercises url-here\n\
";

parse();
*/