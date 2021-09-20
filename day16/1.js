// Using the countries array create the following array of arrays. 
// The country name, the first three letters of the country name and the length of the country name.

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  function createArrayOfArrays(countries){
      let arrayOfArray = []
     
      for(let i = 0; i < countries.length; i++){
        let countryName = countries[i].charAt(0) + countries[i].slice(1).toLowerCase()
          let arr = new Array(countryName, countries[i].slice(0,3), countries[i].length )
          arrayOfArray.push(arr)
      }

      return arrayOfArray
  }

  console.log(createArrayOfArrays(countries))