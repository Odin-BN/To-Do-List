package com.odincode.TasksManagement.controller;

import org.springframework.web.bind.annotation.CrossOrigin;


//Receives the operations from the client

import com.odincode.TasksManagement.model.TaskM;
import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;

/*@RestController
@RequestMapping("/name")
public class TaskController {
    @Autowired
    TaskServices taskServices;

    @GetMapping()
    public ArrayList<TaskModel> obtainTasks(){
        return taskServices.obtainTasks();
    }

    @PostMapping()
    public TaskModel saveTask(String name, LocalDate DueDate, Boolean flag, LocalDate DoneDate, String priority, LocalDate CreateDate){
        return this.taskServices.saveTask(name, DueDate, flag, DoneDate, priority, CreateDate);
    }

}*/

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/tasks")
public class TaskController {

    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody TaskM task){

        System.out.println("Task received:");
        System.out.println("Name: " + task.getName());
        System.out.println("Priority: " + task.getPriority());
        System.out.println("Deadline: " + task.getDeadline());

        return ResponseEntity.ok("Task received and printed in console!");
    }
}
