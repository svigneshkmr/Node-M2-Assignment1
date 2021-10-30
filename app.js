//You need to write in file using fs module and for every write operation you need to create a new file
//2) You must take input from the user as filename and keep saving filenames in one array,
// in one separate text file
//3) Next time when user again executes the code ask user to provide filename. 
//Check if file already exists, if yes then ask user to give new filename. 
//Write simple text ‘You are awesome’ in every new file

const fs = require("fs");
const yargs= require("yargs");
//const farr=[];
var new_file=yargs.argv._[0]

fs.readFile('filename.txt',(err,result)=>{
    arr=(result.toString().split('\n'))
    console.log(arr)
    if(arr.indexOf(new_file)==-1){

        d=new_file+'\n';

        fs.appendFile('filename.txt',d,(err)=>{
            if(err) throw err;
            else{
                console.log(`the filename is ${yargs.argv._[0]}`);
            }
        })
        fs.writeFile(new_file,'You are awesome',(err)=>{
            if(err) throw err;
        })
    
    
    }
    else{
        console.log('Give a new file')
    }

})
