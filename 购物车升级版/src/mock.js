import Mock from 'mockjs';

export default Mock.mock({
    'list|10-20':[
        {
            'title':'@ctitle(2,3)',
            'content':'@ctitle(10,20)',
            'time':"@date('yyyy-MM-dd')",
            'type|1-4':1
        }
    ]
});