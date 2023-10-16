let inputOne = prompt ('What year were you born in?')

const year = parseFloat(inputOne)

let age = (2023-year)

if (age>18) 
  alert ('You are an adult, you can pass by!')
else
  alert ('You are a minor, get out!')