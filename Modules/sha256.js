const Hashes = require("jshashes")
const read = require("fs").readFileSync

module.exports = function (wordlist, hash) {
    console.log("[!]SHA256 MODULE STARTED - MADE BY GREXLIN85")
    let hashes = read(wordlist).toString().split("\n"), hashcracked = false, SHA256 = new Hashes.SHA256;
    for (let i = 0; i < hashes.length; i++) {
        if (hash == SHA256.hex(hashes[i])) {
            console.log("[*]Hash Cracked!\n" + hash + " --- " + hashes[i])
            hashcracked = true
            break;
        }
    }
    if (!hashcracked) {
        console.log("[*]Failed!")
    }
}
