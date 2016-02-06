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
        const nodeFrom = state.nodes.get(from);
        const nodeTo = state.nodes.get(to);

        l.log(`starting search from ${from} to ${to}`);
        let visitors = spawnInitialVisitors(nodeFrom, nodeTo);
        l.log(`spawned initial ${visitors.length} visitors`);
        let count = 0;
        while(visitors.some(v => v.isActive)){
            visitors
                .filter(v => v.isActive)
                .forEach(v => v.moveNext());
            spawnVisitors(visitors);
            l.log(`spawned visitors, now we have ${visitors.filter(v => v.isActive).length} active visitors`);
            l.log(`spawned visitors, now we have ${visitors.length} visitors`);
            count++;
            if (count > 3) break;
        }

        return visitors
            .map(v => v.length)
            .reduce((agg, length) => Math.min(agg, length), 9999);
    }

    function spawnInitialVisitors(from, to){
        return Array
           .from(from.nodes)
           .map(n => Visitor({from: from, to: to, next: n}));
    }

    function spawnVisitors(visitors){
        const activeVisitors = visitors.filter(v => v.isActive);
        l.log(`Active visitors ${activeVisitors.length}`);
        for(let v of activeVisitors){
            for(let n of v.unvisitedNodes){
                l.log(`Next unvisited node is ${n.value}`);
                l.log(`Destination is ${v.to.value}`);
                let newVisitor = Visitor({visited: [...v.visited], to: v.to, next: n})
                visitors.push(newVisitor);
            }
            visitors.shift(v) 
        }
    };
}

function Visitor({from, to, next, visited = []}){ // TODO: test all this!!
    if (visited.length === 0 && !from) throw Error("from and visited can't be both empty");
    if (visited.length === 0) visited.push(from);
    let currentNode = from || visited[visited.length-1];

    l.log(`Create visitor with ${visited.map(v => v.value).join(',')} visited nodes. Moves next to ${next.value}`);

    return {
        visited,
        to,
        moveNext,
        get length() { return visited.length - 1;},
        get isActive() { return !hasArrived() && hasUnvisitedNodes();},
        get unvisitedNodes() { return getUnvisitedNodes();},
        toString(){
            return `currentNode: ${currentNode.value}, to: ${to.value}, next: ${next.value}`;
        }
    };

    function moveNext(){
        l.log(`Current node is ${currentNode.value}`);
        l.log(`Moving next to ${next.value}. Visited ${visited.map(v => v.value).join(',')}`);
        visited.push(next);
        currentNode = next;
        if (hasArrived()){l.log(`Arrived!!`);}
    }

    function hasArrived(){
        return visited.map(v => v.value).includes(to.value);
    }

    function hasUnvisitedNodes(){
        const adjacentNodes = Array.from(currentNode.nodes);
        return adjacentNodes
            .some(n => !visited.map(v => v.value).includes(n.value));
    }
    
    function getUnvisitedNodes(){
        const adjacentNodes = Array.from(currentNode.nodes);
        const unvisitedNodes = adjacentNodes
            .filter(n => !visited.map(v => v.value).includes(n.value));
        l.log(`Have unvisited nodes ${unvisitedNodes.map(v => v.value).join(',')}`);
        return unvisitedNodes;
    }
}


function UndirectedGraphNode(value){
    const state = {
        nodes: new Set()
    };

    return Object.assign(state, {
        value,
        addEdge
    });

    function addEdge(name, otherNode){
        state.nodes.add(otherNode);
        otherNode.nodes.add(this);
    }
}





