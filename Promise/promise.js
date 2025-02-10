const { resolve } = require("path");

let myPromise = new Promise((success, reject) => {
let work = true;
if (work) {
    success("it worked")
}else{
    reject("An error occured")
}
});

myPromise
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


try {
    myPromise()
} catch (error) {
    console.log(error)
}