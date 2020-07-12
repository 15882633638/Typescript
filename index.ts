// 新闻的数据格式
interface newsObj{
    newsName:string,
    newsInfo:string,
    time:any,
    author:string,
    specise:string
}
//订阅者
class Information{
    //新闻平台的名称
    newsName:string;
    //观察者的数组
    watcher:any[];
    //新闻对象
    news:newsObj;
    //新闻数组
    newsArray:newsObj[];
    constructor(newsName:string,...arg: any){
        //传递进来的新闻名字
        this.newsName = newsName;
        //初始化观察者数组
        this.watcher = [];
        //初始化新闻
        this.news= null;
        //新闻数组
        this.newsArray = [];
    }
    //分发新闻
    dispathInformation(newsAlter:newsObj){
        //更新的新闻
        this.news = newsAlter;
        this.watcher.forEach((item,index)=>{
            item.getInformation(this.newsName,newsAlter)
        })
        this.newsArray.push(newsAlter)
        return this;
    }
    //增加订阅者
    addPerson(person){
        this.watcher.push(person);
        person.addMyOrdered(this);
        //返回当前的对象，进行链式操作
        return this;
    }
    //返回当前的新闻
    News(){
        return this.news;
    }
    //返回当前的观察者
    getWatcher(){
        return this.watcher
    }
    getName(){
        return this.newsName
    }

}

//观察者
class Person{
    name:string;
    sex:boolean;
    MyNews:any[];
    MyOrdered:any[];
    constructor(name:string,sex:boolean){
        this.name = name;
        this.sex = sex;
        this.MyNews = [];
        this.MyOrdered = [];
    }
    getName():string{
        return this.name;
    }
    getSex():boolean{
        return this.sex;
    }
    addNews(news){
        this.MyNews.push(news);
    }
    getMyNews(){
        return this.MyNews;
    }
    addMyOrdered(OrderTerrace){
        this.MyOrdered.push(OrderTerrace);
        return this;
    }
    getMyOrdered(){
        return this.MyOrdered.map((item,index)=>{
            return item.newsName
        })
        
    }
    getInformation(newsName,news){
        console.log(`${this.getName()}得到了${newsName}的新信息：${news.newsInfo},时间：${news.time}`)
        this.addNews(news);
    }
}
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
console.log(Wuyanbing.getMyOrdered())
