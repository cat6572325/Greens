function formatTostr(format,callback)
{
  var total = '';
  for(var i = 0; i < format.length; i++)
  {//将索引转成字母
    switch(format.substring(i,i+1))
    {
      case '0':
      total += 'a'
      break
      case '1':
      total += 'b'
      break
      case '2':
      total += 'c'
      break
      case '3':
      total += 'd'
      break
      case '4':
      total += 'e'
      break
      case '5':
      total += 'f'
      break
      case '6':
      total += 'g'
      break
      case '7':
      total += 'h'
      break
      case '8':
      total += 'i'
      break
      case '9':
      total += 'j'
      break
    }
  }
  typeof callback == "function" && callback(total)
return total
}
module.exports = {
  formatTostr: formatTostr,
}
