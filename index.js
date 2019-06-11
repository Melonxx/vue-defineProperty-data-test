class X{
  constructor({data}){
    this.data = data
    for (let key in data) {
       Object.defineProperty(this, data[key], {
        set(v) {
          this.data[key] = v
          console.log('有人修改了 name')
        },
        get() {
          return this.data[key]
        }
      })
    }
  }
}
var view = new X({
  data: {
      name: 'zch'
  }
})
console.log(view.name === 'zch') // 输出 true
view.name = 'jack' // 输出「有人修改了 name」
