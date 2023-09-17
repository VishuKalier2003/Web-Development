//! Instance Methods of JavaScript which are used during the Browser Events and are used to target Browser or Local Machine
//! related actions (Instances)...

// Used with <dialog> to provide alert messages in the browser...
alert(message);

// Shifts focus away from the Window (minimizes the current or new window)...
window.blur();

// Cancels a Request of the Animation Frame previously provided in the Job Queue by window.requestAnimationFrame()...
cancelAnimationFrame(requestID);

// Cancels a Callback previously scheduled by the window.requestCallback()...
window.cancelIdleCallback(callbackID);

// Removes the action specified by the window.setImmediate()...
clearImmediate();

// Closes the current window, can only be called on scripts opened by window.open()...
window.close();

// Displays a dialog with message and to wait until user either confirms or cancels the dialog...
window.confirm(message);

// Brings the current window to the front...
window.focus();

// Returns an object which contains the CSS properties of an element...
window.getComputedStyle(id);

// Creates an object representing a range of text...
window.getSelection();

// Checks if document matches the media query String...
window.matchMedia(queryString);

// Moves the current window by a specified amount...
window.moveBy(x, y);

// Moves the current window to the specified Coordinates...
window.moveTo(coorX, coorY);

// Opens the window of the current url or file (can be another html file)...
window.open(url);

// Enables cross origin communication between window objects which even have different port numbers...
window.postMessage(message, origin, target);

// Opens the Print Dialog...
window.print();

// Accepting User prompt...
window.prompt(message);

// Requests the animationFrame, when we want to update then animation onscreen...
window.requestAnimationFrame(animation);

// Queues a method to be called during a browser's idle period...
window.requestIdleCallback(callback);

// Resizes the current window...
window.resizeBy(x, y);

// Resizes the current window to given coordinates...
window.resizeTo(coorX, coorY);

// Scrolls the window to a current position in the document...
window.scrollBy(x, y);

// Scrolls the window by the given Amount...
window.scrollTo(coorX, coorY);

// Breaks up running Operations and run a Callback function Immediately after Browser has completed certain operations...
window.setImmediate(func, param0, param1,... paramN);

// Stops further Resource loading...
window.stop();