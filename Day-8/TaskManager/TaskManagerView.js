define(['jquery','TaskView'],function($,TaskView){

	return function TaskManagerView(model){
		this.$root = $("<div>");
		var _templateId = "#TaskManagerTemplate",
			_model = model,
			that = this;

		this.init = function(){
			//Model Events
			_model.addOnChange("add",function(task){
				var newTaskView = new TaskView(task);
				newTaskView.init();
				newTaskView.render().$root.appendTo(that.$root.find("#ulTaskList"));
			});

			//View Events
			this.$root.on("click","#btnAddTask", function(){
				_model.addTask($("#txtTask",that.$root).val())
			});

			this.$root.on("click","#btnRemoveCompleted", function(){
				_model.removeCompleted();
			});
		};

		this.render = function(){
			this.$root.append($(_templateId).html());
			return this;
		}

	}
});