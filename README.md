## V.Redd.it Video Linker</h2>
Chrome extension that adds a toolbar button to directly link to a video hosted by reddit at v.redd.it. To use it, click on the full link to a post (from the main page, this is the link saying "54 comments", or whatever number), and click the extension icon in the toolbar next to the settings triple dot menu. The link will be automatically copied to your clipboard.

*Adapted from [this repo](https://github.com/amity/reddit-video-extractor) by Amity.*

#### FAQ
- *Can't I just right-click and do "Copy video address?"*

For many GIFs, yes. If they're hosted by imgur or giphy, you can do so. However, Reddit specifically blocks people from copying links to reddit-hosted files in that way.

- *Does this work with videos with sound?*

Unfortunately not. Only the visuals are accessible in this way; it is possible to also fetch the audio files, but as I'm not hosting these files externally, it is not possible to merge them via the Chrome extension at this time. 

- *Will **X** feature be supported?*

Improvements for this extension will be managed and planned via this repo. If you have any ideas about improvements or want to contribute, please [submit an issue!](https://github.com/maxpereira/reddit-video-extractor/issues/new)

#### What were those steps again?
1. Click the link into the post comments *post* (not the video)
2. Click the extension icon
3. Direct video link (minus sound) is copied to your clipboard automatically
