class X{
  constructor({data}){
    this.data = data
    Object.defineProperty(this, 'name', {
      set(v) {
        this.data.name = v
        console.log('有人修改了 name')
      },
      get() {
        return this.data.name
      }
    })
  }
}
var view = new X({
  data: {
      name: 'zch'
  }
})
console.log(view.name === 'zch') // 输出 true
view.name = 'jack' // 输出「有人修改了 name」
