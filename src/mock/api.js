import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@cname",
        "password|1-10":"0"
    }

});