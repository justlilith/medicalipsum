import * as Constants from '$lib/constants'

const regex = new RegExp(/\w+/g)
const storage = window.localStorage


async function copyToClipboard (text:string) {
  console.log("MI [i]: Attempting to copy to clipboard . . .")
  navigator.permissions.query({name:'persistent-storage'})
  .then(function(result) {
    console.log(result)
    if (text.length > 0)
    navigator.clipboard.writeText(text)
    // Don't do anything if the permission was denied.
  });
}

async function generateIpsum(args:any) {
  console.log('invoking!!')
  let length:number = args.length
  const coeff:number = args.medAmount
  let outBlock:string = ""
  
  switch (args.scholarMode) {
    case 'enabled':
      outBlock = await (await fetch('https://google.com')).json()
    break
    case 'disabled':
    while (length > 0) {
      outBlock = outBlock.concat(generateSentence(coeff), " ")
      length -= 1
    }
    default:
    break
  }
  
  console.log(outBlock)
  return outBlock
  
}

// impure! generates random sentences -L6
function generateSentence(coeff:number) {
  // console.log(Constants.loremBOW)
  // Constants.medicalBOW
  // Constants.medicalPhraseBOW
  
  let length = Math.floor(Math.random() * 10)
  
  const structures = [
    `${Constants.loremBOW}`
    , `${Constants.loremBOW}`
    , `${Constants.loremBOW}`
  ]
  
  let sentence:string = ""
  while (length >= 0) {
    let odds = Math.floor(Math.random() * coeff) //e.g. 71.2 w/ coeff of 100
    /**
    * if coeff is 100, then def grab from medical
    * if it's 1, don't.
    * odds could be 63. Then what? What if 11?
    * coin flip! switch case!
    * 
    */
    
    switch (odds > 30) {
      case true:
      switch (odds > 60) {
        case true:
        const indexP = Math.floor(Math.random() * Constants.medicalPhraseBOW.length)
        sentence = sentence.concat(Constants.medicalPhraseBOW.slice(indexP)[0], " ")
        break
        case false:
        default:
        const index = Math.floor(Math.random() * Constants.medicalBOW.length)
        sentence = sentence.concat(Constants.medicalBOW.slice(index)[0], " ")
      }
      break
      case false:
      default:
      const index = Math.floor(Math.random() * Constants.loremBOW.length)
      sentence = sentence.concat(Constants.loremBOW.slice(index)[0], " ")
    }
    length--
  }
  sentence = (sentence.slice(0,1).toUpperCase())
  .concat(sentence.slice(1, sentence.length - 1))
  .concat(".")
  return `${sentence}`
}

function getStorage (key:string) {
  return storage.getItem(key) ?? ""
}

function setStorage (args:Record<string,any>) {
  try {
    storage.setItem(args.key,args.value)
    return "OK"
  } catch (err) {
    return err
  }
}



export {
  copyToClipboard
  , generateIpsum
  , generateSentence
  , getStorage
  , setStorage
}