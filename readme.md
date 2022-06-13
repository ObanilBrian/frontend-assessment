## Exercise 1 and 2 information

##### Prerequisite

1. VS Code - https://code.visualstudio.com/download
2. Live Server VS Code Extension - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

##### Instructions

1. Open an exercise.
2. Right click `index.html` and click "Open with Live Server".
3. To close the server, click the button `Port:<port number>` on the bottom right portion of VS Code.

## Why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana?

In javascript, the letters enclosed in a single quote(') are considered a string. When the plus(+) sign is used on a string, the expression will be concatenated and will result in a new string. Meanwhile, the empty space between the plus(+) sign will be considered as NaN because by default, the plus(+) sign is used for arithmetic expressions. Lastly, the `.toLowerCase()` transforms the whole string into small letters which makes the result 'banana'.
