/*
 *
 * Find string matches in a arbitrary string
 *
 *
 */


class StringMatcher{
   findMatches(text, term){
       if (term === '') return StringMatcher.NoMatches
       if (term === null || term === undefined) throw new Error("Invalid term")

       const matches = [];
       for(let i = 0; i <= text.length - term.length; i++)
           if (this.findMatchAtIndex(i, text, term)) matches.push(new StringMatch(term, i));
       return matches;
   }

   findMatchAtIndex(index, text, term){
       let subtext = text.substr(index, term.length);
       let foundMatch = subtext === term;

       l.log(`Comparing [${subtext}] and [${term}]`);
       if (foundMatch) l.log(`Found Match!!`);

       return foundMatch
   }
}

StringMatcher.NoMatches = Object.freeze([]);


class StringMatch{
    constructor(term, index){
        this.term = term;
        this.index = index;
    }
}
