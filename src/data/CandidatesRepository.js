const candidatesKey = "candidates";

// todo read this https://developer.chrome.com/blog/deprecating-web-sql/
//  and this https://developer.chrome.com/blog/sqlite-wasm-in-the-browser-backed-by-the-origin-private-file-system/
//  investigate how sqlite will work with "Origin Private File System", and can we use it in the extension
class CandidatesRepository {

    findCandidate(id) {

        return chrome.storage.local.get(candidatesKey)
            .then(candidates => candidates);
    }

    findAllCandidates() {

        return chrome.storage.local.get(candidatesKey);
    }

    saveCandidate(candidate) {

    }

}

export default CandidatesRepository