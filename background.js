chrome.webRequest.onBeforeRequest.addListener(
    function(){ return {cancel: true}; },
        {
            urls: ["http://game.granbluefantasy.jp/gacha/legend/*", "https://game.granbluefantasy.jp/gacha/legend/*"],
            types: ["xmlhttprequest"]
        },
    ["blocking"]
);