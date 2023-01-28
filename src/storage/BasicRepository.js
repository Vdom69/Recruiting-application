import {dbConnection, initJsStore} from "./IndexedDataBase";
import Pagination from "../model/Pagination";

export class BasicRepository {

    constructor(tableName) {
        this.tableName = tableName
        initJsStore();
    }

    get connection() {
        return dbConnection;
    }

    count(where?) {
        return this.connection.count({
            from: this.tableName,
            where: where
        })
    }

    /**
     * @param {Number} id
     * @returns {Promise<unknown[]>}
     */
    findById(id) {
        return this.connection.select({
            from: this.tableName,
            where: {
                id: id
            }
        })
    }

    /**
     * @param {Object} where
     * @returns {Promise<Pagination>}
     */
    async findAllByFirstPage(where?) {
        const count = (await this.count(where))
        const pagination = Pagination.firstPage(count)
        const {pageNumber = 0, pageSize = 10} = pagination;
        return this.connection.select({
            from: this.tableName,
            limit: pageSize,
            skip: (pageNumber + 1) * pageSize,
            where: where
        }).then(data => {
            const result = Object.assign(new Pagination(), pagination)
            result.data = data
            return result
        })
    }

    /**
     * @param {Pagination} pagination
     * @param {Object} where
     * @returns {Promise<Pagination>}
     */
    findAllBy(pagination, where?) {
        const {pageNumber = 0, pageSize = 10} = pagination;
        return this.connection.select({
            from: this.tableName,
            limit: pageSize,
            skip: (pageNumber + 1) * pageSize,
            where: where
        }).then(data => {
            const result = Object.assign(new Pagination(), pagination)
            result.data = data
            return result
        })
    }

    save(data) {
        return this.connection.insert({
            into: this.tableName,
            values: [data],
            return: true
        })
    }

    saveAll(data) {
        return this.connection.insert({
            into: this.tableName,
            values: [...data],
            return: true
        })
    }

}