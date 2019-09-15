const Mock=require("mockjs");

module.exports=Mock.mock({
    "list|10":[
        {
            title:"@ctitle",
            img:Mock.Random.image('200x100', Mock.Random.color(), '#FFF', 'png', '!'),
            "number|1-100": 100,
            'id|+1':1
        }
    ]
})