import {Connection, DATA_TYPE} from 'jsstore';

const getWorkerPath = () => {
    if (process.env.NODE_ENV === 'development') {
        /* eslint import/no-webpack-loader-syntax: off */
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js");
    } else {
        /* eslint import/no-webpack-loader-syntax: off */
        return require("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

const workerPath = getWorkerPath().default;
export const dbConnection = new Connection(new Worker(workerPath));
export const dbname = 'recruiting-app';

const getDatabase = () => {
    const tableCandidates = {
        name: 'candidates',
        columns: {
            // todo need fill it with all fields that will be used
            id: {
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                dataType: DATA_TYPE.String
            },
            number: {
                dataType: DATA_TYPE.String
            },
            name: {
                dataType: DATA_TYPE.String
            },
            gender: {
                dataType: DATA_TYPE.String,
            },
            country: {
                dataType: DATA_TYPE.String
            },
            city: {
                dataType: DATA_TYPE.String,
            }
        }
    };
    return {
        name: dbname,
        tables: [tableCandidates]
    };
};

export const initJsStore = () => {
    try {
        const dataBase = getDatabase();
        dbConnection.initDb(dataBase);
    } catch (ex) {
        console.error(ex);
    }
};