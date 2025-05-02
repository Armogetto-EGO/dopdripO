import nightmare.js
import ('node/fs')
import $_ as lodash
import axios
//Azure  Refactor TODO:
const { app } = require('@azure/functions');

app.http('helloWorld1', {
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        return { body: 'Hello, world!' };
    }
  
});


const blobInput = input.storageBlob({
    connection: 'storage_APPSETTING',
    path: 'helloworld/{queueTrigger}',
});

const blobOutput = output.storageBlob({
    connection: 'storage_APPSETTING',
    path: 'helloworld/{queueTrigger}-copy',
});

app.storageQueue('copyBlob1', {
    queueName: 'copyblobqueue',
    connection: 'storage_APPSETTING',
    extraInputs: [blobInput],
    extraOutputs: [blobOutput],
    handler: (queueItem, context) => {
        const blobInputValue = context.extraInputs.get(blobInput);
        context.extraOutputs.set(blobOutput, blobInputValue);
    }
});

//end Azure Codes
//code
.js
// To Run: node name.js
const Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true});

const SEARCH_TEXT = process.argv[2] || 'Illinois Tech';

nightmare
	.goto('http://broken-flask.glitch.me/')
	.type('textarea', SEARCH_TEXT)
	.evaluate(function(){
		//throw new Error('No search results');
		var titles = [];
		var results = document.querySelector('textarea').value;
		return results;
	})

	.end()
		.then(function (result) {
			console.log(result)
		})
		.catch(function (error) {
			console.error('Error:', error);
		});

let $_d= 'download.'
let $_O= filesystem.read(inputStream)
let $_oA= Array inputStream
dataList= puppetteer.goto(google.com/?query
a href= 
