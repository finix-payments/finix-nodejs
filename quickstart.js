
const {Client, Environment, Models} = require ('./src/api');
const fs = require('fs');

async function quickstart(){
    try {
        const userName = 'USsRhsHYZGBPnQw8CByJyEQW';
        const password = '8a14c2f9-d94b-4c72-8f5c-a62908e5b30e';

        client = new Client(userName, password, Environment.Test);

        const fileName = __dirname.concat("/test/test.png");
        console.log(fileName);
        const fileStream = fs.createReadStream(fileName);
        // fileStream.on('error', function (error) {
        //     console.log(`error: ${error.message}`);
        // })
        console.log(fileStream);

        const uploadedFile = await client.Files.uploadFile(fileId, {
            file: fileStream
        });

       
    }catch(error){

        console.log(error);
    }

}

quickstart();