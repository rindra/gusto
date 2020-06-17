import gsap from 'gsap'

require('./reset.less')
require('./index.less')

const template = require("./section.hbs"),
  logo = require('./logo.hbs')

function populate() {
  return new Promise((resolve,reject)=>{
    document.querySelector('section').innerHTML = template({
      title:"We're here to support you.",
      description:"We know this isn't  easy time for small businesses or their teams. Sign in for more information and guidance related to COVID-19."
    })
    document.querySelector('.logo').innerHTML = logo({})
    resolve()
  })
}

function animate(){
  return new Promise((resolve,reject)=>{
    gsap.set('aside',{x:"100%"})
    gsap.set('aside .box',{x:"100%"})
    gsap.to('aside', 1, {delay:1, startAt:{x:"100%"},x:0,ease:'power4.out'})
    gsap.to('aside .box', 1, {delay:1.2, startAt:{x:"100%"},x:0,ease:'power4.out'})
    resolve('ready!')
  })
}

function init(){
  populate()
    .then(data=>animate())
}

init()

