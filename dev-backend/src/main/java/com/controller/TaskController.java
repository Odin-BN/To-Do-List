package com.odincode.TasksManagement.controller;

import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.model.TaskOUT;
import com.odincode.TasksManagement.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;


//Receives the operations from the client

import com.odincode.TasksManagement.model.TaskAdd;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/todos")
public class TaskController {
    @Autowired
    TaskServices taskServices;

    @GetMapping()
    public List<TaskOUT> obtainTasks(
            @RequestParam(required = false) String NameSearch,
            @RequestParam(required = false) String PrioritySearch,
            @RequestParam(required = false) String FlagSearch
    ){
        System.out.println("Received parameters - NameSearch: " + NameSearch + ", PrioritySearch: " + PrioritySearch + ", FlagSearch: " + FlagSearch);
        return taskServices.obtainTasks(NameSearch, PrioritySearch, FlagSearch);
    }

    @PostMapping()
    public TaskModel saveTask(@RequestBody TaskAdd task){
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