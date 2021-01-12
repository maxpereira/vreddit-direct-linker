'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let linkUrl = tabs[0].url;
		fetch(linkUrl + '.json').then(resp =>
		resp.json().then(pageJson =>
			window.prompt("Here's your direct video URL",pageJson[0].data.children[0].data.secure_media.reddit_video.fallback_url)
		)
	  )
	})
});

