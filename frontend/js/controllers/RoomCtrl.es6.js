'use strict';

class RoomCtrl {

    constructor(Notification, TasksService, SocketsService, $scope) {
        // Dependencies
        this.Notification = Notification;
        this.TasksService = TasksService;
        this.SocketsService = SocketsService;
        this.$scope = $scope;

        // initial variables
        this.roomName = '';

        this.username = '';

        this.tasks = [];

        this.newTask = {
            status: 'Todo'
        };

        // read tasks from server, and also get username
        // and room name. Set initial to true (last arg);
        this.TasksService.read(undefined, undefined, undefined, 'Todo', true).then(
            result => {
                this.tasks = result.data.tasks;
                this.username = result.data.username;
                this.roomName = result.data.roomName;

                // connect to socket by room name
                this.initSockets();
            },
            error => {
                console.error(error);
                this.Nofity('Error getting todos', 'Error');
            }
        );

    }

    // have to create temporary room var,
    // as socket functions have to be called
    // with this as socket.
    initSockets() {
        this.SocketsService.emit('room', this.roomName);

        // Socket events config
        this.SocketsService.on('UserConnected', (function(data) {
            this.Notify(data, 'Success');
        }).bind(this));

        this.SocketsService.on('NewTask', (function(data) {
            this.addTaskLocally(data.task, data.username);
            // force view to update;
            this.$scope.$apply();
        }).bind(this));

        this.SocketsService.on('UpdatedTask', (function(data) {
            this.updateTaskLocally(data.task);
            // force view to update;
            this.$scope.$apply();
        }).bind(this));

    }

    // create task on server
    createTask() {
        this.TasksService.create(this.newTask).then(
            result => {
                this.newTask = {
                    status: 'Todo'
                };
                this.addTaskLocally(result.data);
            },
            error => {
                console.error(error);
                this.Notify('Error saving todos', 'Error');
            }
        );

    }

    // add task locally within js array.
    addTaskLocally(newTask, username) {
        let alreadyAdded = this.tasks.find(task => task.id === newTask.id);
        if (!alreadyAdded) {
            this.tasks.push(newTask);
        }
    }

    updateTask(task) {
        if (!task) {
            return;
        }
        this.TasksService.update(task.id, task).then(
            result => this.updateTaskLocally(result.data),
            error => {
                console.error(error);
                this.Notify('Error updating todo', 'Error');
            }
        );
    }

    deleteTask(task) {
        if (!task) {
            return;
        }
        this.TasksService.destroy(task.id).then(
            result => this.updateTaskLocally(task, true),
            error => {
                console.error(error);
                this.Notify('Error removing todo', 'Error');
            }
        );
    }

    updateTaskLocally(reqTask, remove) {
        this.tasks.forEach(function(task, i) {
            if (task.id === reqTask.id) {
                if (reqTask.status !== 'Todo' || remove) {
                    this.tasks.splice(i, 1);
                    return;
                }
                this.tasks[i] = reqTask;
                return;
            }
        }, this);
    }

    Notify(text, type) {
        if (this.doNotNotify) {
            return false;
        }
        switch (type) {
            case 'Success':
                this.Notification.success(text);
                break;
            case 'Error':
                this.Notification.error(text);
                break;
            default:
                this.Notification.info(text);
        }


    }

}

RoomCtrl.$inject = ['Notification', 'TasksService', 'SocketsService', '$scope'];

export default RoomCtrl;
