
import Information from './Information';
import Person from './Person';
//创建今日头条的新闻平台
let Daliynews = new Information('今日头条');
let Red = new Information('红星新闻');
//创建观察者
let Wuyanbing = new Person('吴颜冰',true);
let Wuyanzu  = new Person('吴彦祖',true);
Red.addPerson(Wuyanbing);
//添加观察者
Daliynews.addPerson(Wuyanbing).addPerson(Wuyanzu);
//发布新闻
Daliynews.dispathInformation({
    newsName:'天气',
    newsInfo:'今天的天气真好',
    time:new Date(),
    author:'呵呵',
    specise:'娱乐'
});
Daliynews.dispathInformation({
    newsName:'新闻',
    newsInfo:'今天没有新闻',
    time:new Date(),
    author:'哈哈',
    specise:'娱乐'
});
Red.dispathInformation({
    newsName:'红星新闻',
    newsInfo:'今天没有红星新闻',
    time:new Date(),
    author:'哈哈1',
    specise:'娱乐1'
});
console.log(Wuyanbing.getMyOrdered());
