riot.tag('todo', '<h1 class="ui center aligned orange header">{ opts.title }</h1> <todo-input></todo-input>', function(opts) {

});

riot.tag('todo-input', '<div class="ui text container"> <div class="ui segments"> <div class="ui compact segment"> <div class="ui action input"> <button class="ui icon button"> <i class="radio icon"></i> </button> <input type="text" placeholder="What needs to be done?"> </div> </div> <div class="ui segment"> <todo-item></todo-item> </div> <div class="ui center aligned segment"> <div class="ui internal left attached rail"> <label>1 item left</label> </div> <button class="ui button">All</button> <button class="ui button">Active</button> <button class="ui button">Completed</button> </div> </div> </div>', function(opts) {

});

riot.tag('todo-item', '<div class="ui checkbox"> <input type="checkbox" name="{ opts.id }"> <label>finish this shit</label> </div> <div class="ui right internal attached rail"> <button class="ui icon button"> <i class="remove icon"></i> </button> </div>', function(opts) {

});
