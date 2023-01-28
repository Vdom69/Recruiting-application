import {BasicRepository} from "./BasicRepository";

/**
 * Why was selected "IndexedDB (idb)":
 * 1. https://stackoverflow.com/questions/69846971/chrome-extension-development-chrome-storage-local-vs-indexeddb
 * 2. File System Access API was ignored, because it didn't save the session of the access to the files.
 *     So user need to confirm the access to the files everytime he opens the browser
 * Other info about it:
 * https://developer.chrome.com/articles/file-system-access/
 */
class CandidatesRepository extends BasicRepository {

    constructor() {
        super("candidates");
        this.tableName = "candidates"
    }

}

const candidatesRepository = new CandidatesRepository()

export default candidatesRepository