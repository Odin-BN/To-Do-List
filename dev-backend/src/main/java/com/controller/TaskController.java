package com.odincode.TasksManagement.controller;

import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.model.TaskOUT;
import com.odincode.TasksManagement.model.TaskFlag;
import com.odincode.TasksManagement.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.CrossOrigin;


//Receives the operations from the client

import com.odincode.TasksManagement.model.TaskAdd;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/todos")
public class TaskController {
    @Autowired
    TaskServices taskServices;

    @GetMapping()
    //It obtains the list of tasks filter bye name, priority, and status
    public List<TaskOUT> obtainTasks(
            @RequestParam(required = false) String NameSearch,
            @RequestParam(required = false) String PrioritySearch,
            @RequestParam(required = false) String FlagSearch
    ){
        System.out.println("Received parameters - NameSearch: " + NameSearch + ", PrioritySearch: " + PrioritySearch + ", FlagSearch: " + FlagSearch);
        return taskServices.obtainTasks(NameSearch, PrioritySearch, FlagSearch);
    }

    @PostMapping()
    //Saves a task
    public TaskModel saveTask(@RequestBody TaskAdd task){
        return this.taskServices.saveTask(task);
    }

    @PutMapping("/{id}")
    //It updates the name, priority and due date of a task define on the edit modal
    public ResponseEntity<Void> updateTask(@PathVariable Long id, @RequestBody TaskAdd updatedTask) {
        if (updatedTask == null || updatedTask.getDeadline().isEmpty()) {
            updatedTask.setDeadline(null);
        }
        taskServices.updateTask(id, updatedTask);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    //It deletes a task through the id of the task related to the remove button click
    public ResponseEntity<Void> deleteTask(@PathVariable Long id) {
        taskServices.deleteTask(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/flag")
    //It changes the state of a task (Done/Undone) when the checkbox is click
    public ResponseEntity<Void> updateTaskFlag(@PathVariable("id") Long id, @RequestBody TaskFlag taskFlag) {
        taskServices.updateTaskFlag(id, taskFlag);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/averages")
    //Calculates the averages to display (total, low, medium and high)
    public ResponseEntity<Map<String, String>> getAverages() {
        return ResponseEntity.ok(taskServices.calculateAverages());
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