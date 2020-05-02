function Hi(name = 'Tien', language){
  if(language === 'en')
    return `Hi, ${name}`
  return `chao ${name}`
}
console.log(Hi())
console.log(Hi('Alala'))
