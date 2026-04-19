# hide-collection-name
Hide collection name and overlay buttons

<h2>Before:</h2>

<img width="1222" height="502" alt="Screenshot 2026-04-20 alle 01 26 31" src="https://github.com/user-attachments/assets/5ad8207c-317e-42b6-806d-238e7ad435c4" />

<h2>After:</h2>

<img width="1177" height="460" alt="Screenshot 2026-04-20 alle 01 26 15" src="https://github.com/user-attachments/assets/de079ce6-847b-4b3e-a2c2-6118fd93ed89" />

1. Install the JS Injector plugin - https://github.com/n00bcodr/Jellyfin-JavaScript-Injector

2. Within Plugins > JS Injector, add a script, name it "Hide-collection-name" or similar for reference, then paste the raw code of the jellyfin-hide-collection-name.js file in this project, then save.

You will find 2 js files:
1. "jellyfin-hide-collection-name.js" hides names and also overlay buttons
2. "jellyfin-hide-collection-name-over.js" hides names and keeps buttons overlayed

Both scripts remove the names under the collections, the difference is in hiding the buttons

5. Hard refresh your browser (ctrl + f5, shift + refresh, or clear site data) and test!
