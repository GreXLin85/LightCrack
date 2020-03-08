/*
* HASH TYPES
* MD5
* RIPEMD-160
*****************
* SHA1
* SHA256
* SHA512
******************
* BLAKE2 - Soon
* BLAKE3 - Soon
*/
const argv = require("yargs").argv

const wordlist = argv.wordlist
const hash = argv.hash
const hashType = argv.hashType.toString().toLocaleUpperCase()

if (wordlist == undefined || hash == undefined || hashType == undefined || wordlist == "" || hash == "" || hashType == "") {
    console.log("You need to fill --wordlist, --hash and --hashType paramaters")
} else {
    console.log(
        "[*]Hash : " + hash +
        "\n[*]Hash Type : " + hashType +
        "\n[*]Cracking...")
    switch (hashType) {
        case "MD5":
            require("./Modules/md5")(wordlist,hash)
            break;
        case "RIPEMD-160":
            require("./Modules/ripemd160")(wordlist,hash)
            break;
        case "SHA1":
            require("./Modules/sha1")(wordlist,hash)
            break;
        case "SHA256":
            require("./Modules/sha256")(wordlist,hash)
            break;
        case "SHA512":
            require("./Modules/sha512")(wordlist,hash)
            break;
        case "BLAKE2":
            console.log("Will be added in later versions...")
            break;
        case "BLAKE3":
            console.log("Will be added in later versions...")
            break;
        default:
            console.log("There is no such option! If you are want to see supported hash types, click to this link https://github.com/GreXLin85/LightCrack/blob/master/README.md")
            break;
    }
}