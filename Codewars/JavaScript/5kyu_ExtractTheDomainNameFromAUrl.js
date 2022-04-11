/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  if (url.includes('www.')) {
    return url.match(/(?<=www\.).+?(?=\.)/)[0]
  } else if (url.includes('https://')) {
    return url.match(/(?<=https:\/\/).+?(?=\.)/)[0]
  } else if (url.includes('http://')) {
    return url.match(/(?<=http:\/\/).+?(?=\.)/)[0]
  } else {
    return url.match(/.+?(?=\.)/)[0]
  }
}
