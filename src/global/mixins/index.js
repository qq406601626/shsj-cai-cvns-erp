export default {
    data() {
        return {
            pageData: {
                loading: false,
                searchData: {
                    searchButtonLoading: false,
                    searchModel: {}
                },
                tableData: {
                    loading: false,
                    list: []
                },
                paginationData: {
                    currentPage: 0,
                    pageSize: 100,
                    total: 0,
                    pageCount: 0, // 最大页码按钮数
                    pageSizes: [100, 200],
                    layout: 'total, sizes, prev, pager, next, jumper'
                }
            }

        }
    },
    computed: {
        _fetchTableData() {
            return {
                url: this.$options.fetchTableUrl || '',
                params: {
                    ...this.pageData.searchData.searchModel,
                    current: this.pageData.paginationData.currentPage,
                    size: this.pageData.paginationData.pageSize
                }
            }
        }
    },
    methods: {
        handlerCurrentChange(currentPage) {
            this.pageData.paginationData.currentPage = currentPage
            this.fetchTableData()
        },
        handlerSizeChange(pageSize) {
            this.pageData.paginationData.pageSize = pageSize
            this.fetchTableData()
        },
        async handlerSearch() {
            this.pageData.searchData.searchButtonLoading = true
            this.pageData.paginationData.currentPage = 1
            await this.fetchTableData()
            this.pageData.searchData.searchButtonLoading = false
        },
        async fetchTableData() {
            try {
                this.pageData.tableData.loading = true
                const {url, params, config} = this._fetchTableData
                const {current, records, size, total} = await this.$axios.get(url, {
                    params,
                    ...config
                })
                this.pageData.tableData.list = records
                Object.assign(this.pageData.paginationData, {
                    currentPage: current,
                    total: total,
                    pageSize: size
                })
                this.pageData.tableData.loading = false
            } catch (e) {
                this.pageData.tableData.loading = false
            }
        },
    }
}
