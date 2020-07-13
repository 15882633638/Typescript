import newsObj from './newsObj';

export default class Information{
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