'use strict';

var pageJson = ""

document.addEventListener('copy', function(e) {
  var textToPutOnClipboard = "test";
  e.clipboardData.setData('text/plain', textToPutOnClipboard);
  e.preventDefault();
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let linkUrl = tabs[0].url;
		fetch(linkUrl + '.json').then(resp =>
		pageJson=resp.json().then(pageJson =>
			window.prompt("Here's your direct video URL",pageJson[0].data.children[0].data.secure_media.reddit_video.fallback_url)
		)
	  )
	})
	document.execCommand('copy');
	console.log(pageJson);
});

