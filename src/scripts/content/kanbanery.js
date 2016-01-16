/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/

'use strict';

togglbutton.render('section.task-actions:not(.toggl)', {observe: true}, function (elem) {
    var link,
        taskTitle = $("p.task-title"),
        firstAction = $('.task-actions ul li:first-child', elem),
        actionList = firstAction.parentNode;

    link = togglbutton.createTimerLink({
        className: 'kanbanery',
        description: taskTitle.innerText
    });

    var linkAction = document.createElement("LI");
    linkAction.appendChild(link);

    actionList.insertBefore(linkAction, firstAction);
});