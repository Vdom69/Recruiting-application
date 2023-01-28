class Pagination {
    pageNumber = 0;
    pageSize;
    size; // count of all elements in this list
    data;

    hasNextPage() {
        return this.size > ((this.pageNumber + 1) * this.pageSize)
    }

    static firstPage(size, pageSize = 10) {
        const pagination = new Pagination()
        pagination.size = size
        pagination.pageNumber = 0
        pagination.pageSize = pageSize
        return pagination
    }
}

export default Pagination