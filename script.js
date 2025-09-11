import { copyFile, unlink, writeFile } from 'fs';
import { appendFile } from 'fs';
import { rename } from 'fs';

unlink("newHey.txt", function(err){
    if(err){console.log(err);}
        else {console.log("Done");}
 })