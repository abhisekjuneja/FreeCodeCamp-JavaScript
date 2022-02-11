function titleCase(str) {
  let strTokens = str.split(' ');
  
  for (let i = 0; i < strTokens.length; i++) {
    let token = strTokens[i];
    strTokens[i] = token[0].toUpperCase() + token.substr(1, token.length).toLowerCase();
  }

  return strTokens.join(' ');
}

titleCase("I'm a little tea pot");