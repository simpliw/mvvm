// model-->业务逻辑和数据
var book = new Model({
    defaults: function() {
        //默认数据
        return {
            title: "三国演义",
            page: 1000,
            read: 0
        };
    },
    //业务逻辑
    readPlus: function() {
        var read = this.get("read")
        read = ++read === this.page ? this.page : read
        this.set("read", read)
    }
})
