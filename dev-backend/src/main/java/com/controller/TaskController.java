package com.odincode.TasksManagement.controller;

import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;


//Receives the operations from the client

import com.odincode.TasksManagement.model.TaskAdd;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/todos")
public class TaskController {
    @Autowired
    TaskServices taskServices;

    /*@GetMapping()
    public ArrayList<TaskModel> obtainTasks(){
        return taskServices.obtainTasks();
    }*/

    @PostMapping()
    public TaskModel saveTask(@RequestBody TaskAdd task){

        /*System.out.println("Task received:");
        System.out.println("Name: " + task.getName());
        System.out.println("Priority: " + task.getPriority());
        System.out.println("Deadline: " + task.getDeadline());*/

        return this.taskServices.saveTask(task);
    }

}

/*
@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/todos")
public class TaskController {

    @PostMapping
    public ResponseEntity<String> createTask(@RequestBody TaskAdd task){

        TaskServices taskServices;

        System.out.println("Task received:");
        System.out.println("Name: " + task.getName());
        System.out.println("Priority: " + task.getPriority());
        System.out.println("Deadline: " + task.getDeadline());



        //System.out.println(taskModels);
        //return ResponseEntity.ok("Task received and printed in console!");
        return ResponseEntity.ok("Task received and printed in console!");
    }
}
*/