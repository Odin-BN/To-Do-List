package com.odincode.TasksManagement.services;
//Insert logic of the process of the app

import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
public class TaskServices {
    @Autowired
    private final TaskRepository taskRepository = new TaskRepository();

    //Despliega todos los tasks
    public ArrayList<TaskModel> obtainTasks(){
        return (ArrayList<TaskModel>) taskRepository.findAll();
    }

    //Guarda un task
    public TaskModel saveTask(String name, LocalDate DueDate, Boolean flag, LocalDate DoneDate, String priority, LocalDate CreateDate){
        //TaskModel newTask = new TaskModel(null, name, DueDate, flag, DoneDate, priority, CreateDate);
        return taskRepository.save(name, DueDate, flag, DoneDate, priority, CreateDate); //Guarda una nueva task
    }
}
