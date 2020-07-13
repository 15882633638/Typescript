export default class Person{
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