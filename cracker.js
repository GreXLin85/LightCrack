const md5 = require("md5")
const argv = require("yargs").argv
const read = require("fs").readFileSync

const wordlist = argv.wordlist
const hash = argv.hash

if (wordlist == undefined || hash == undefined || wordlist == "" || hash == "") {
    console.log("You need to fill --wordlist and --hash paramaters")
} else {
    console.log("Started!")
    let hashes = read(wordlist).toString().split("\n"), hashcracked = false
    for (let i = 0; i < hashes.length; i++) {
        if (hash == md5(hashes[i])) {
            console.log("[*]Hash Cracked!\n"+hash+" --- "+hashes[i])
            hashcracked = true
            break;
        }
    }
    if (!hashcracked) {
        console.log("[*]Failed!")
    }
}