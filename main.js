'use strict';

var vidLink = ""

document.addEventListener('copy', function(e) {
  var txt = vidLink;
  e.clipboardData.setData('text/plain', txt);
  e.preventDefault();
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let linkUrl = tabs[0].url;
		fetch(linkUrl + '.json').then(resp =>
		resp.json().then(pageJson => {
			vidLink = pageJson[0].data.children[0].data.secure_media.reddit_video.fallback_url;
			document.execCommand('copy');
		})
	  )
	})
});

