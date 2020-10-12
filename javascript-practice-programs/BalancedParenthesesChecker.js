let parenMatcher = (str) =>{
	let brackets = [], bracketsMap = {'[':']', '(':')', '{':'}'};
	for(let i=0; i<str.length; i++){
		if(['[', '(', '{'].includes(str[i])){
			brackets.push(str[i])
		}
		if([']', ')', '}'].includes(str[i])){
			let last = brackets.pop();
			if(bracketsMap[last] !== str[i])
				return false
		}
	}
    if(brackets.length)
    return false;
	return true;
}
console.log(parenMatcher('[{{{{[[[]]'));
console.log(parenMatcher('[[()]]'))
