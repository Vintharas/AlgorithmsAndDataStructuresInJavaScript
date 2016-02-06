/*
 *
 * Undirected graph: A data structure consituted by nodes
 * connected by edges with no specific direction (they can
 * be traversed from one node to the other and vice versa)
 *
 *
 */

describe("Undirected Graph", () => {
    describe("Given that I have no graph", () => {
        it("I Should be able to create an empty one", () => {
            // Arrange, Assert
            const graph = UndirectedGraph();
            // Act
            expect(graph).toBeDefined();
            expect(graph.count()).toBe(0);
        });
    });

    describe("Given that I have an empty graph", () => {
        it("I Should be able to add a new node to the graph", () => {
            // Arrange
            const graph = UndirectedGraph();
            // Act
            graph.addNode("Kevin Bacon");
            // Assert
            expect(graph).toBeDefined();
            expect(graph.count()).toBe(1);
        });
    });

    describe("Given that I have a graph with a node", () => {
        let graph;

        beforeEach(() => {
            graph = UndirectedGraph();
            graph.addNode("Kevin Bacon");
        });

        it("I should be able to add another node", () => {
            // Arrange, Act
            graph.addNode("Tom Hanks");
            // Assert
            expect(graph.count()).toBe(2);
        });

        it("I should be able to find a node", () => {
            // Arrange, Act
            const node = graph.find("Kevin Bacon");
            // Assert
            expect(node.value).toBe("Kevin Bacon");
        });

        describe("When I try to access an item that doesn't exist", () => {
            it("It should throw an error", () => {
                // Arrange, Act, Assert
                expect(() => graph.find("Yo")).toThrowError();
            });
        });
    });

    describe("Given that I have a graph with two nodes", () => {
        let graph;

        beforeEach(() => {
            graph = UndirectedGraph();
            graph.addNode("Kevin Bacon");
            graph.addNode("Tom Hanks");
        });

        it("I should be able to add an edge between the nodes", () => {
            // Arrange, Act
            graph.addEdge("Apollo 13", "Kevin Bacon", "Tom Hanks");
            // Assert
            // Edge connects from kevin bacon to tom hanks
            const kevinBacon = graph.find("Kevin Bacon");
            const node = kevinBacon
                .nodes
                .find(n => n.value === "Tom Hanks");
            expect(node).toBeDefined();
            // And vice versa
            const tomHanks = graph.find("Tom Hanks");
            const nodeOtherSide = tomHanks
                .nodes
                .find(e => e.value === "Kevin Bacon");
            expect(nodeOtherSide).toBeDefined();
        });
    });

    describe("Given that I have a graph with three nodes", () => {
        let graph;
        beforeEach(() => {
            graph = UndirectedGraph();
            graph.addNode("Kevin Bacon");
            graph.addNode("Tom Hanks");
            graph.addEdge("Apollo 13", "Kevin Bacon", "Tom Hanks");
            graph.addNode("Catherine Z Jones");
            graph.addEdge("The terminal", "Catherine Z Jones", "Tom Hanks");
        });

        describe("When I want to calculate the length of shortest path from and to the same node", () => {
            it("Should be length 0 and empty path", () => {
                // Arrange, Act
                const length = graph.findLengthOfShortestPathBetween("Kevin Bacon", "Kevin Bacon");
                // Assert 
                expect(length).toBe(0);
            });
        });
    });

});
