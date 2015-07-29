(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"bbop-rest-response","id":"module:bbop-rest-response","children":[{"label":"<a href=\"module-bbop-rest-response.response.html\">response</a>","id":"module:bbop-rest-response.response","children":[]}]},{"label":"<a href=\"module-bbop-rest-response..html\">bbop-rest-response.</a>","id":"module:bbop-rest-response.","children":[]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
