const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('Fr', "FRANCE")

for (const key in map) {
    // console.log(key);
}