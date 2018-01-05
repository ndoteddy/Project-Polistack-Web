'use strict';
module.exports=function(app)
{
    var todoListControl = require('../controllers/todoListController');
    var signaturesControl = require('../controllers/signaturesController');

    //toDolist Routes
    app.route('/tasks')
        .get(todoListControl.list_all_tasks)
        .post(todoListControl.create_a_task);

    app.route('/tasks/:taskid')
        .get(todoListControl.read_a_task)
        .put(todoListControl.update_a_task)
        .delete(todoListControl.delete_a_task);

    //signaturesRoutes
    app.route('/api/signatures')
        .get(signaturesControl.list_all_signatures)
        .post(signaturesControl.create_signatures);

};