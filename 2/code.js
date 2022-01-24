function convertToRoman(num) {

  function unities(n){
    switch(n){
      case '1':
        return 'I'
        break

      case '2':
        return 'II'
        break

      case '3':
        return 'III'
        break

      case '4':
        return 'IV'
        break

      case '5':
        return 'V'
        break

      case '6':
        return 'VI'
        break

      case '7':
        return 'VII'
        break

      case '8':
        return 'VIII'
        break

      case '9':
        return 'IX'
        break 
    }
  }

  function dozens(n){
    switch(n){
      case '1':
      return 'X'
      break

    case '2':
      return 'XX'
      break

    case '3':
      return 'XXX'
      break

    case '4':
      return 'XL'
      break

    case '5':
      return 'L'
      break

    case '6':
      return 'LX'
      break

    case '7':
      return 'LXX'
      break

    case '8':
      return 'LXXX'
      break

    case '9':
      return 'XC'
      break 
  
    }    
  }

  function hundreds(n){
    switch(n){
    case '1':
        return 'I'
        break

      case '2':
        return 'II'
        break

      case '3':
        return 'III'
        break

      case '4':
        return 'IV'
        break

      case '5':
        return 'V'
        break

      case '6':
        return 'VI'
        break

      case '7':
        return 'VII'
        break

      case '8':
        return 'VIII'
        break

      case '9':
        return 'IX'
        break 
    }
  }

  function hundreds(n){
    switch(n){
      case '1':
      return 'C'
      break

    case '2':
      return 'CC'
      break

    case '3':
      return 'CCC'
      break

    case '4':
      return 'CD'
      break

    case '5':
      return 'D'
      break

    case '6':
      return 'DC'
      break

    case '7':
      return 'DCC'
      break

    case '8':
      return 'DCCC'
      break

    case '9':
      return 'CM'
      break 

    }
  }


  function thousands(n){
    switch(n){
      case '1':
      return 'M'
      break

    case '2':
      return 'MM'
      break

    case '3':
      return 'MMM'
      break

    case '4':
      return 'CD'
      break

    case '5':
      return 'MV'
      break

    case '6':
      return 'DC'
      break

    case '7':
      return 'DCC'
      break

    case '8':
      return 'DCCC'
      break

    case '9':
      return 'CM'
      break 

    }
  }


num = num.toString()
let arrayAux = []
let contadorAux = 1

  for(let i = num.length-1; i>=0; i--){
    switch(contadorAux){
      case 1:
        console.log("unidade")
        arrayAux.unshift(unities(num[i]))
        break

      case 2:
        console.log("dezena")
        arrayAux.unshift(dozens(num[i]))
        break

      case 3:
        console.log("centena")
        arrayAux.unshift(hundreds(num[i]))
        break

      case 4:
        console.log("unidade de milhar")
        arrayAux.unshift(thousands(num[i]))
        break
    }
    contadorAux++

    console.log(arrayAux)
  }
  return arrayAux.join('')
}

console.log(convertToRoman(2014));
