const gg = document.querySelector('#gg')
const ap = document.querySelector('#ap')
const av = document.querySelector('#av')
const sh = document.querySelector('#sh')
const x = document.querySelector('#x')

x.addEventListener ('click', function(){
  document.querySelector('.all')
  .classList.add('close')
})

gg.addEventListener ('mouseover', function(){
  document.querySelector('#gg')
  .classList.add('fade')
})
gg.addEventListener ('mouseout', function(){
  document.querySelector('#gg')
  .classList.remove('fade')
})

ap.addEventListener ('mouseover', function(){
  document.querySelector('#ap')
  .classList.add('fade')
})
ap.addEventListener ('mouseout', function(){
  document.querySelector('#ap')
  .classList.remove('fade')
})

av.addEventListener ('mouseover', function(){
  document.querySelector('#av')
  .classList.add('fade')
})
av.addEventListener ('mouseout', function(){
  document.querySelector('#av')
  .classList.remove('fade')
})

sh.addEventListener ('mouseover', function(){
  document.querySelector('#sh')
  .classList.add('fade')
})
sh.addEventListener ('mouseout', function(){
  document.querySelector('#sh')
  .classList.remove('fade')
})
