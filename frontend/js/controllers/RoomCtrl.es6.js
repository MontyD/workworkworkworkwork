'use strict';

class RoomCtrl {

    constructor(Notification, TasksService) {

        this.Notification = Notification;
        this.TasksService = TasksService;

        this.responsibleTasks = [];

        this.reportedTasks = [];

        this.newTask = {
            status: 'open'
        };

        this.TasksService.read().then(
            result => {
                this.responsibleTasks = result.data;
            },
            error => {
                console.log(error);
                this.Notification.error('Error getting tasks');
            }
        );

        this.TasksService.read(true).then(
            result => {
                this.reportedTasks = result.data;
            },
            error => {
                console.log(error);
                this.Notification.error('Error getting tasks');
            }
        );

    }

    getTasks(start, limit, asAdmin) {
        this.TasksService.read(false, start, limit, asAdmin).then(
            result => {
                this.responsibleTasks = result.data;
            },
            error => {
                this.Notification.error('Error getting tasks');
            }
        );

        this.TasksService.read(true, start, limit, asAdmin).then(
            result => {
                this.reportedTasks = result.data;
            },
            error => {
                this.Notification.error('Error getting tasks');
            }
        );
    }

    createTask() {
        this.TasksService.create(this.newTask).then(
            result => {
                this.newTask = {
                    status: 'open'
                };
                this.reportedTasks.unshift(result.data);
            },
            error => {
                console.log(error);
                this.Notification.error('Error saving tasks');
            }
        );

    }

}

RoomCtrl.$inject = ['Notification', 'TasksService'];

export default RoomCtrl;