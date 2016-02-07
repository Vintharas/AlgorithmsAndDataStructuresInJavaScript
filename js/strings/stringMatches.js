/*
 *
 * Find string matches in a arbitrary string
 *
 *
 */


class StringMatcher {
    constructor(strategy){
        this.strategy = strategy
    }
    findMatches(text, term){
        if (term === '') return StringMatcher.NoMatches    
        if (term === null || term === undefined) throw new Error("Invalid term");

        return this.strategy.findMatches(text, term);
    }

}
StringMatcher.NoMatches = Object.freeze([]);


class FindMatchesNaively{
   findMatches(text, term){
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

class StringMatch{
    constructor(term, index){
        this.term = term;
        this.index = index;
    }
}

class FindMatchesWithBoyerMooreHoorst {

    findMatches(text, term) {
        l.log(`attempting to find ${term} inside ${text}`); 

        const matches = [];
        const jumpsTable = this.buildTermJumpingTable(term);
        for(let i = 0; i < text.length - term.length; i++) {
            // compare from the last term letter
            l.log(`searching at index ${i}`); 

            for(let j = i + term.length - 1; j >= i; j--) {
                l.log(`attempting match between term ${term[j-i]} and ${text[j]}`); 
                if (text[j] === term[j-i]){
                    l.log(`matched letter ${text[j]} with ${term[j-i]}`); 
                    // match!
                    if (j-i === 0) {
                        // we are matching the last letter
                        // so we've got a match
                        l.log(`FOUND MATCH!!`); 
                        matches.push(new StringMatch(term, i))
                        i = i + term.length - 1;
                    }
                } else {
                    // no match => jump!
                    l.log(`no match`); 
                    if (jumpsTable.has(text[j])){
                        let jumps = jumpsTable.get(text[j])
                        l.log(`Found ${text[j]} must jump ${jumps}`); 
                        i = i + jumps;
                    } else {
                        l.log(`Didn't find ${text[j]} must jump ${term.length}`); 
                        i = i + term.length - 1;
                    }
                    break;
                }
            }
        }

        return matches;
    }

    buildTermJumpingTable(term){                           
        // TRUTH
        // any word => 5
        //   store how many jumps you need to do when 
        //   failing a compare
        // T => 5 - 0 - 1 = 4
        // R => 5 - 1 - 1 = 3
        // U => 5 - 2 - 1 = 2
        // T => 5 - 3 - 1 = 1
        // H => 5
        const jumpsTable = new Map()
        for(let i = 0; i < term.lenght -1; i++){
            jumpsTable.set(letter, term.length - i - 1)
        }
        return jumpsTable;
    }
}





