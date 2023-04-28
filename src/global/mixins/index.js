export default {
    data(){
        return{
            pageData:{
                loading:false,
                searchData:{
                    searchButtonLoading:false,
                },
                tableData:{
                    loading:false,
                    list:[]
                },
                paginationData:{
                    currentPage:0,
                    pageSize:0,
                    total:0,
                    pageCount:0, // 最大页码按钮数
                    pageSizes:[100, 200, 300, 400],
                    layout:'total, sizes, prev, pager, next, jumper'
                }
            }

        }
    },
    methods:{
        handlerCurrentChange(){},
        handlerSizeChange(){},
        async handlerSearch(){},
        async fetchTableData(){},
    }
}
