var register = new Vue({
    el: '#register',
    data: {
        username: '',
        password: '',
        isAccept: false,
        telNumber: ''
    },
    methods: {
        tip(msg, type) {
            this.$message({
                message: msg,
                type: type
            })
        },
        submit() {
            if (this.isAccept) {
                if (!this.username) {
                    this.tip('用户名不能为空', 'error')
                    return
                }
                if (!this.telNumber) {
                    this.tip('手机号不能为空', 'error')
                    return
                } else {
                    const reg = /^[0-9]*$/g
                    // 判断的格式为：只要不是数字类型，格式就是不正确的，长度限制为11
                    if (!this.telNumber.match(reg)) {
                        this.tip('手机号格式不正确', 'error')
                        return
                    } else {
                        if (this.telNumber.length > 11) {
                            this.tip('手机号格式不正确', 'error')
                            return
                        }
                    }
                }
                if (!this.password) {
                    this.tip('密码不能为空', 'error')
                    return
                } else {
                    if (this.password.length < 6) {
                        this.tip('密码不能小于6位', 'error')
                        return
                    }
                }
                // 向后台发送请求
                const data = {
                    username: this.username,
                    password: this.password,
                    tel_number: this.telNumber
                }
                console.log(this.username)
                console.log(this.password)
                console.log(this.telNumber)
            }
        }
    },
    created() {
        console.log(1)
    }
})