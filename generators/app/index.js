
//此文件作为generator 的核心入口
// 需要导出一个继承自 Yeoman genrator 的类型
//Yeoman Genrator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing(){

        //yeoman 自动生成生成文件时会调用此方法
        this.fs.write(
            this.destinationPath('temp.text'),
            Math.random().toString()
        )
    }
}
