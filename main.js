const fs = require('fs'); 

// прочитати 
fs.readFile("./text.txt", "utf-8", (err, data) => {
    console.log(data) 
})

// записати 
fs.writeFile("./text1.txt", 'Слава Україні', () => {})

//додати зміст до створеного файла
fs.readFile("./text1.txt", "utf-8", (err, data) => { 
    fs.writeFile("./text1.txt", `${data} Героям Слава!`,()=>{}) 
})

// видалення файла
fs.writeFile("./text2.txt", '', () => {})
setTimeout(()=>{
    fs.unlink("./text2.txt", () =>{})
}, 5000)

//видадення файла з провіркою наявності
fs.writeFile("./text2.txt", '', () => {}) // для провірки , створити папку

try{
     if(fs.existsSync("./text2.txt") == false ){
        throw new Error("Файл не знайдено :(")
    } 
    fs.unlink("./text2.txt", () =>{}) 
}
catch(Error){
    console.log(Error.message)
 }
    
//Перенос файла з папки в папку

    // створює папку та файл ( батьків)
fs.mkdir("./until", ()=>{})
fs.writeFile("./until/until.txt", 'Перенос файла', () => {})

    //створює папку куда переноситься
fs.mkdir("./after", ()=>{})

    // читає та переносить
setTimeout(() => { 
    fs.readFile("./until/until.txt", "utf-8", (err, data) =>{})
    fs.copyFile("./until/until.txt", "./after/until.txt", (err, data) => {})
}, 2000);
    // видаляє старий файл 
setTimeout(() => {
    fs.unlink("./until/until.txt", () => {}) 
}, 4000)
    //видаляє папку ( стару)
setTimeout(() => {
    fs.rmdir("./until", () =>{})
},6000);

