// const REWQ = /^rewq/i;
const HOST = 'https://rewq.app/';

function openLink(shortcut) {
  // location.replace(HOST + shortcut);
  chrome.tabs.create({url: HOST + shortcut});
}

chrome.omnibox.onInputEntered.addListener(
  openLink
);
