/* eslint-disable no-await-in-loop */
import { ClientFunction, Selector } from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

export const baseUrl = 'http://localhost:3030';

// Selector name found using Chrome React dev tools on prod mode of website
export const Search = 'Search__StyledTextInput';
export const SearchInput = 'SearchInput__StyledTextInput';

export const getLocation = ClientFunction(() => document.location.href);

export const getActiveElement = Selector(() => document.activeElement);

export const formatForTyping = ClientFunction(text => text.split('').join(' '));

export const getSuggestion = page =>
  ReactSelector(`${Search} StyledDrop Button`).withText(page);

export const repeatKeyPress = ClientFunction((key, number) =>
  // Array.join puts the argument between the array elements,
  // so we need to add 1 to get the correct output
  Array(number + 1).join(`${key} `),
);

export const tabToHref = async (t, path, maxClicks = 100) => {
  let count = 0;
  let activeElement;
  let href;

  do {
    await t.pressKey('tab');
    activeElement = await getActiveElement();
    count += 1;
    href = activeElement.getAttribute('href');
  } while (href !== path && count < maxClicks);
};

export const tabToSearch = ClientFunction(() => {
  const tabbableElements = document.querySelectorAll(`
  button[tabindex]:not([tabindex="-1"]), button[id="search-button"], 
    input[tabindex]:not([tabindex="-1"]), body [href], 
    input[tabindex]:not([tabindex="-1"]), 
    select[tabindex]:not([tabindex="-1"]), 
    textarea[tabindex]:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])`);

  let tabCount;
  for (let i = 0; i < tabbableElements.length; i += 1) {
    if (tabbableElements[i].getAttribute('id') === 'search-button') {
      tabCount = i;
    }
  }
  // Need to add one for correct tab count because array indexes start at 0.
  // If item we are aiming to tab to is at index = 3, that means we have to tab
  // 4 times to get there.
  return tabCount + 1;
});

export const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 720;
export const MOBILE_WIDTH = 375;
const MOBILE_HEIGHT = 667;

export const startResponsiveSnapshots = async (title, viewport, eyes, t) => {
  let browser;
  let width;
  let height;

  if (viewport === 'desktop') {
    browser = [
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'chrome' },
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'edgelegacy' },
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'firefox' },
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'ie11' },
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'safari' },
    ];
    width = DESKTOP_WIDTH;
    height = DESKTOP_HEIGHT;
  } else if (viewport === 'mobile') {
    browser = [
      { width: MOBILE_WIDTH, height: MOBILE_HEIGHT, name: 'chrome' },
      { width: MOBILE_WIDTH, height: MOBILE_HEIGHT, name: 'edgelegacy' },
      { width: MOBILE_WIDTH, height: MOBILE_HEIGHT, name: 'firefox' },
      { width: MOBILE_WIDTH, height: MOBILE_HEIGHT, name: 'ie11' },
      { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, name: 'safari' },
    ];
    width = MOBILE_WIDTH;
    height = MOBILE_HEIGHT;
  }

  await t.resizeWindow(width, height); // resize for viewport
  await eyes.open({
    testName: `${title} — ${viewport}`,
    browser,
    t,
  });
};
