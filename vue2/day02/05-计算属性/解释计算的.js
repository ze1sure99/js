class Test{
    /*getter方法必须有返回值*/ 
    get num(){
        return 10*1000;
    }
    set num(val){
     console.log(this.val)
    }
}
let t = new Test();
// console.log(t.num()); 错误写法,getter方法定义是一个方法,使用是一个值
console.log(t.num);


// getter和setter方法都是属性，不是方法
t.num = 100;
