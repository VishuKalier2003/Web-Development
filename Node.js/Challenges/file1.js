//* FileSystem Module Asynchronous Methods...
import fs from 'fs';

//! Creating a folder...
fs.mkdir('folder', (error) => {       // parameters are folder name and callback...
      if(error)   console.log(error);     //? Callback compulsory...
      else  console.log("Folder created successfully !!");
});

//! Creating or Writing a File...
fs.writeFile('folder/example.txt', 'This is a text file.', () => {
      console.log("File Created with some data !!");     //? Callback compulsory...
}); 
// parameters are file directory including file name and file contents...

//! Appending the File...
fs.appendFile('folder/example.txt', 'More data is added to the file !!', () => {
      console.log("More data is added to the file !!");    //? Callback Compulsory...
});
// parameters are file directory including file name and file updated contents...

//! Reading the File...
const data = fs.readFile('folder/example.txt', 'utf8', (error, file) => {   //? Callback compulsory...
      if(error)   console.log(error);    // utf8 encoding format...
      else  console.log(file);
});
// parameters are file directory with file name, charset encoding, and callback...
console.log(data);

//! Renaming a File...
fs.rename('folder/example.txt', 'folder/example1.txt', () => {
      console.log("File renamed Successfully !!");    //? Callback compulsory...
});
// parameters are file directory with original name and file directory with new name...

//! Removing the File...
fs.unlink('folder/example1.txt', () => {
      console.log("File Removed Asynchoronously !!"); //? Callback Compulsory...
});
// parameter is file directory with file name...

//! Removing the Folder...
fs.rmdir('folder', (error) => {    //? Callback compulsory...
      if(error)   console.log(error);
});
// parameters are folder name and callback...