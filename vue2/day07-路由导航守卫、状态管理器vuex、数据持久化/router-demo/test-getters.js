class Test{
    value = 10;
     get myValue(){
        return this.value;
    }
    set myValue(value){
        this.value = value;
    }
}
const test = new Test();
// getter方法 定义的时候是方法 访问的时候是值
console.log(test.myValue);
test.myValue = 20;
console.log(test.myValue);
