function UndirectedGraph(){
    /* private stuff */
    const state = {
        nodes: new Map()
    };

    return Object.assign({}, 
        state, {
        /* public API */
        count,
        addNode,
        find,
        addEdge,
        findLengthOfShortestPathBetween
    });

    function count(){
        return state.nodes.size;
    }

    function addNode(value){
        state.nodes.set(value, UndirectedGraphNode(value));
    }

    function find(value){
        if (!state.nodes.has(value)) throw Error(`Node {$value} not found`);
        return state.nodes.get(value);
    }

    function addEdge(name, from, to){
        const fromNode = find(from);
        const toNode = find(to);
        fromNode.addEdge(name, toNode);
    }

    function findLengthOfShortestPathBetween(from, to){
        // do next
        if (from === to) return 0;
    }
}

function Paths() {
    const state = {
        paths: new Map()
    }
    return Object.assign(state, {});
}

function UndirectedGraphNode(value){
    const state = {
        nodes: []
    };

    return Object.assign(state, {
        value,
        addEdge
    });

    function addEdge(name, otherNode){
        state.nodes.push(otherNode);
        otherNode.nodes.push(this);
    }
}





