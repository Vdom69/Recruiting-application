class Pagination {
    currentPage = 0;
    pageSize;
    totalCount; // count of all elements in this list
    data;

    hasNextPage() {
        return this.totalCount > ((this.currentPage + 1) * this.pageSize)
    }

    static firstPage(pageSize = 10) {
        const pagination = new Pagination()
        pagination.currentPage = 0
        pagination.pageSize = pageSize
        return pagination
    }

    static page(page, totalCount, pageSize = 10) {
        const pagination = new Pagination()
        pagination.totalCount = totalCount
        pagination.currentPage = 0
        pagination.pageSize = pageSize
        return pagination
    }
}

export default Pagination