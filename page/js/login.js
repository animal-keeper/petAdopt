var login = new Vue({
    el: '#wrapper',
    data: {
        userName: '',
        password: '',
        isAdmin: false,
        requestUrl: ''
    },
    methods: {
        tip(msg, type) {
            this.$message({
                message: msg,
                type: type
            })
        },
        selectUser(people) {
            if (people === 'user') {
                this.isAdmin = false
            } else if (people === 'admin') {
                this.isAdmin = true
            }
        },
        login () {
            if (!this.userName) {
                this.tip('用户名不能为空', 'error')
                return
            } else {
                const reg = /^[0-9]*$/g
                if (!this.userName.match(reg)) {
                    this.tip('用户名格式不正确', 'error')
                    return
                }
            }
            if (!this.password) {
                this.tip('密码不能为空', 'error')
                return
            }
            const data = {
                user_name: this.userName,
                password: this.password
            }
            console.log(data)
            var that = this
            axios({
                url: that.isAdmin ? '/admin' : '/login',
                method: 'post',
                data: data
            }).then(res => {
                console.log(res)
                var data = res.data.data
                if (res.status !== 200) {
                    that.tip('出错了', 'error')
                } else {
                    if (res.data.msg === '登录成功') {
                        if (that.isAdmin) {
                            localStorage.adminId = 1
                            localStorage.userName = "可爱猿"
                            window.location.href = 'http://localhost:12306/index.html'
                        } else {
                            localStorage.adminId = 0
                            localStorage.userId = data.user_id
                            localStorage.userName = data.user_name
                            window.location.href = 'http://localhost:12306/index.html'
                        }
                    } else {
                        that.tip(res.data.msg, res.data.status)
                    }
                }
            }).catch(err => {
                console.log(err)
                that.tip('出错了', 'error')
            })
        },
        goRegister () {
            window.location.href = 'http://localhost:12306/register.html'
        }
    }
})