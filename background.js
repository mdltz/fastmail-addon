browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({ url: 'https://app.fastmail.com' });
});
