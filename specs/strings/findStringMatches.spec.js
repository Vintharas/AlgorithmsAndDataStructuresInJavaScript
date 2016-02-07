/*
 *
 * Find string matches in a arbitrary string
 *
 *
 */

describe("StringMatcher", () => {

    describe("Naive string matching", () => {
        describe("Given an arbitrary text", () => {
            const text = "Once upon a time there was a princess";
            let matcher;

            beforeEach(() => matcher = new StringMatcher(new FindMatchesNaively));
        
            describe("And an empty term to match", () => {
                it("Should return no matches", () => {
                    // Arrange, Act
                    const matches = matcher.findMatches(text, '');
                    // Assert
                    expect(matches.length).toBe(0);
                });
            });

            describe("And a null term to match", () => {
                it("Should throw an error", () => {
                    // Arrange, Act, Assert
                    expect(() => matcher.findMatches(text, null)).toThrowError();
                });
            });

            describe("And an undefined term to match", () => {
                it("Should throw an error", () => {
                    // Arrange, Act, Assert
                    expect(() => matcher.findMatches(text)).toThrowError();
                });
            });

            describe("And a matching term", () => {
                it("Should return a match", () => {
                    // Arrange, Act
                    const matches = matcher.findMatches(text, 'time');
                    // Assert
                    expect(matches.length).toBe(1);
                    const match = matches[0];
                    expect(match.term).toBe('time');
                    expect(match.index).toBe(12);
                });
            });
        });
    });

    describe("BoyerMooreHoorst string matching", () => {

        describe("Given an arbitrary text", () => {
            const text = "Once upon a time there was a princess";
            let matcher;

            beforeEach(() => matcher = new StringMatcher(new FindMatchesWithBoyerMooreHoorst()));
        
            describe("And an empty term to match", () => {
                it("Should return no matches", () => {
                    // Arrange, Act
                    const matches = matcher.findMatches(text, '');
                    // Assert
                    expect(matches.length).toBe(0);
                });
            });

            describe("And a null term to match", () => {
                it("Should throw an error", () => {
                    // Arrange, Act, Assert
                    expect(() => matcher.findMatches(text, null)).toThrowError();
                });
            });

            describe("And an undefined term to match", () => {
                it("Should throw an error", () => {
                    // Arrange, Act, Assert
                    expect(() => matcher.findMatches(text)).toThrowError();
                });
            });

            describe("And a matching term", () => {
                beforeEach(() => l.isEnabled = true);
                it("Should return a match", () => {
                    // Arrange, Act
                    const matches = matcher.findMatches(text, 'time');
                    // Assert
                    expect(matches.length).toBe(1);
                    const match = matches[0];
                    expect(match.term).toBe('time');
                    expect(match.index).toBe(12);
                });
                afterEach(() => l.isEnabled = false);
            });
        });
    
    });
});
