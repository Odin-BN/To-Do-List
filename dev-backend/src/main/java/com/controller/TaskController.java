package com.odincode.TasksManagement.controller;
//Receives the operations from the client

import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;

@RestController
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

}
