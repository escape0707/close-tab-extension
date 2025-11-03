browser.action.onClicked.addListener(async (tab) => {
    await browser.tabs.remove(tab.id);
});
export {};
