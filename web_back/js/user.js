// 把基础信息提炼出来，以全局变量的格式保存

const BASEURL = 'http://localhost:8000/'

// 模块
// 把所有的，有关于用户的操作全写在一起
let user = {
    logout: function(callback) {
        $.post(BASEURL + 'admin/logout', function(res) {
            callback(res)
        })
    },
    login: function(userName, mypassword, callback) {
        console.log(userName, mypassword)
        $.post(BASEURL + 'admin/login', {
                user_name: userName,
                password: mypassword
            },
            function(res) {
                callback(res)
            }
        )
    },
    getInfo: function(callback) {
        // $.get(地址，参数，回调)
        $.get(BASEURL + 'admin/getuser', function(res) {
            callback(res)
        })
    }
}