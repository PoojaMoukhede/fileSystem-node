const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		const data = await fs.readFile('file.txt', { encoding: 'utf8' });
		console.log(data);
	  } catch (err) {
		console.log(err);
	  }
	}



const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
    fs.unlink(fileName)
}

myFileWriter('file.txt','hello')
myFileReader('file.txt')
myFileUpdater('file.txt',' world')
//myFileDeleter('file.txt')

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }