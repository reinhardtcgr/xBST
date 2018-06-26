$(document).ready(function() {
    // TODO: BST
    var jack = {
        name: "Jack",
        nodeLeft: null,
        nodeRight: null
    };
    var tom = {
        name: "Tom",
        nodeLeft: null,
        nodeRight: null
    };
    var kay = {
        name: "Kay",
        nodeLeft: null,
        nodeRight: null
    };
    var kevin = {
        name: "Kevin",
        nodeLeft: kay,
        nodeRight: tom
    };
    var jill = {
        name: "Jill",
        nodeLeft: jack,
        nodeRight: null
    };
    var joe = {
        name: "Joe",
        nodeLeft: jill,
        nodeRight: kevin
    };

    // TODO - can refactor this
    // can use this as a basic traversal method
    // then pass a callback to do functions to the inner part
    // don't optimize too early - build other functions then refactor
    // TODO - build BST from list - CREATE
    // TODO - insert new node into to BST - CREATE
    // TODO - Read - [x]-
    // TODO - Update
    // TODO - Deletion
    // TODO - Search
    // TODO - Rebalancing
    function logBSTContactsInOrder(binarySearchTree, sortedNames) {
        // var names = [];

        // this prints node by node - the shape of the BST
        // console.log('This current Node is >> ' + binarySearchTree.name);
        // names.push(binarySearchTree.name); // output all the names in tree order

        // if left node exists then recursively call this
        // else output this name
        if (binarySearchTree.nodeLeft !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeLeft, sortedNames)
            // names.push(logBSTContacts(binarySearchTree.nodeLeft, sortedNames));
        } else {
            // console.log('no left node found');
        }

        // this prints node by node - the BST in alphabetical order
        console.log(binarySearchTree.name);
        // console.log('This current Node is >> ' + binarySearchTree.name);
        sortedNames.push(binarySearchTree.name);

        // if right node exists then recursively call this
        // else return to go back up a level
        if (binarySearchTree.nodeRight !== null) {
            logBSTContactsInOrder(binarySearchTree.nodeRight, sortedNames)
            // names.push(logBSTContacts(binarySearchTree.nodeRight, sortedNames));
        } else {
            // console.log('no right node found');
        }

        return sortedNames;
    }

    // add click events for calling API here
    $('#printBST').on('click', function(e) {
        e.preventDefault();
        console.log('User Click Registered');
        // var contacts = logBSTContacts(topOfBST);

        // traverse the tree and print in order
        var results = logBSTContactsInOrder(joe, []); // logs the output to the server
        console.log('>>> results:', results);

        insertNewContact(joe, 'Jackie');

    });

    console.log('Page Loaded');
});
