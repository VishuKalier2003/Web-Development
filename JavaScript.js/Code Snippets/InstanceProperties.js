//! Specific Properties of the Browser which are entangled with JavaScript...

const { scheduler } = require("timers/promises");

// Checks if current window is closed or not...
window.closed();

// Creates a console object and sends it to the Console...
console.log();
console.warn();

// Return the CustomElementRegistry Object used to keep track of new Custom Elements added...
window.customElements();

// Gives ratio of size of 1 CSS pixel to 1 physical pixel of the device...
window.devicePixelRatio();

// Returns a reference to the Document container of the window (main container)...
window.document.textContent;
window.document.title;

// Returns the element in which the window is embedded...
window.frameElement();

// Helps in manipulating the Browser's Session history...
window.history();

// Returns the innerHeight of the current window...
window.innerHeight;

// Returns the innerWidth of the current window...
window.innerWidth;

// Returns the number of frames(both Image and Non-Image)...
window.length;

// Accessing the Storage object from the document, which has no expiration time
localStorage.setItem("One");
localStorage.getItem("Two");
localStorage.removeItem("One");
localStorage.clear();

// Gives information about current location of the document...
alert(location);
location.reload();
location.assign("link");

// Gets name of window's browsing content...
window.name = "name";

// Returns reference to a window which opened the window...
window.opener();

// Height of the entire browser window...
window.outerHeight;

// Width of the entire browser window...
window.innerWidth;

// Gives the parent of current window or sub-frame...
window.parent;

// Entry point for using Prioritized Task Scheduling API...
scheduler.wait();
scheduler.yield();

// Used for Inspecting properties of the Screen...
screen.colorDepth;
screen.width;
screen.orientation;

// Reffering to the Global Scope of the Window...
window.self;

// Returns a reference to the topmost window in Window Hierarchy...
window.top;

// Returning the window object...
window.window;