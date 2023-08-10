//! Instances that can be invoked when a certain event is fired...

// When printer has started printing or the print preview has been closed...
window.onafterprint = () => {
    console.log("When Print Preview is closed !!");
};

// Event fired before printing...
window.onbeforeprint = () => {
    console.log("Before Printing !!");
};

// When the document elements are unloaded...
window.onunload = () => {
    console.log("During Unloading Elements !!");
};

// When Clicked on an Element...
window.addEventListener("blur", () => {
    console.log("When clicked the element loses focus !!");
});

// When clicked outside the element...
window.addEventListener("focus", () => {
    console.log("When clicked the element gets focus !!");
});

// When a Copy action is initiated from the browser's interface...
window.addEventListener("copy", () => {
    console.log("Copied !!");
});

// When a Cut action is initiated from the browser's interface...
window.addEventListener("cut", () => {
    console.log("Cut !!");
});

// When a Paste action is initiated from the browser's interface...
window.addEventListener("paste", () => {
    console.log("Pasted !!");
});

// When device is displaced physically, checked at regular intervals...
ondevicemotion = () => {console.log("Device Displaced !!")};

// When device orientation is changed, checked at regular intervals...
ondeviceorientation = () => {console.log("Device Orientation Changed !!")};

// When window has been resized...
onresize = () => {console.log("Resized !!")};

// When gamepad connected...
ongamepadconnected = () => {console.log("Game pad connected !!")};

// When resource loading is failed...
onerror = () => {console.log("Error Recieved !!")};

// When the gamepad is disconnected...
ongamepaddisconnected = () => (console.log("Gamepad Disconnected !!"));

// When entire page has loaded...
onload = () => {console.log("Page Completely Loaded !!")};

// When message to the page is received from the other browser...
onmessage = () => {console.log("Message Received !!")};

// When an Error Message is recieved...
onmessageerror = () => {console.log("Error Received !!")};

// No Network access...
onoffline = () => {console.log("Offline")};

// Network access...
ononline = () => {console.log("Online")};

// When a page is hidden...
onpagehide = () => {console.log("Page Hide !!")};

// When a page is shown...
onpageshow = () => {console.log("Page Show !!")};