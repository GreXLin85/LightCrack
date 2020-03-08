const Hashes = require("jshashes")
const read = require("fs").readFileSync

module.exports = function (wordlist, hash) {
    console.log("[!]SHA512 MODULE STARTED - MADE BY GREXLIN85")
    let hashes = read(wordlist).toString().split("\n"), hashcracked = false, SHA512 = new Hashes.SHA512;
    for (let i = 0; i < hashes.length; i++) {
        if (hash == SHA512.hex(hashes[i])) {
            console.log("[*]Hash Cracked!\n" + hash + " --- " + hashes[i])
            hashcracked = true
            break;
        }
    }
    if (!hashcracked) {
        console.log("[*]Failed!")
    }
}
