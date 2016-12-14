// model-->业务逻辑和数据，校验
+function() {
    function Model(option) {
        this.listeners = []
        option = option || {}
        if (option.defaults && typeof option.defaults == 'function') {
            this.data = option.defaults()
            delete option.defaults
        }
        //获取其他业务逻辑方法
        for (var prop in option) {
            if (option.hasOwnProperty(prop)) {
                this[prop] = option[prop]
            }
        }

    }
    //set 方法只能更新 defaults 中的值，保证了数据操作的唯一性
    //set 方法  set(key,value) 或者 set({...})
    Model.prototype.set = function(key, value) {
        var flag = false;
        if (key instanceof Object) {
            for (var prop in key) {
                if (this.data.hasOwnProperty(prop) !== undefined && key.hasOwnProperty(prop)) {
                    this[prop] = option[prop]
                    flag = true
                }
            }
        } else {
            if (this.data.hasOwnProperty(key)) {
                this.data[arguments[0]] = value
                flag = true
            }
        }

        if (flag) {
            this.listeners.forEach(function(that) {
                that.change()
            })
        }
    }

    //get 方法  get() 或 get(key)
    Model.prototype.get = function(key) {
        if (arguments.length === 0) {
            return this.data
        }
        return this.data[key]
    }

    //通知改变


    window.Model = Model
}(window)


//view --> UI 和 UI logic
//view通过数据绑定，命令和更改通知事件与vm交互
+function() {
    function View(option) {
        option = option || {}
        this.vm = option.vm
        this.render = option.render || function() {}
        this.vm.listeners.push(this)
				this.render()
    }
    View.prototype.change = function() {
        this.render()
    }

    window.View = View
}(window)


//view model -->视图逻辑和状态
//查询，观察，配合model的更新，转换，校验，计算用于view显示的数据
+function() {
    function ViewModel(option) {
        this.listeners = []
        option = option || {}
        this.model = option.model
        this.model.listeners.push(this)

        delete option.model
            //获取其他方法
        for (var prop in option) {
            if (option.hasOwnProperty(prop)) {
                this[prop] = option[prop]
            }
        }
    }

    ViewModel.prototype.change = function() {

        this.listeners.forEach(function(that) {
            that.change()
        })
    }

    window.ViewModel = ViewModel
}(window)
