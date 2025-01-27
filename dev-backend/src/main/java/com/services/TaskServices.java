package com.odincode.TasksManagement.services;
//Insert logic of the process of the app

import com.odincode.TasksManagement.model.TaskAdd;
import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.model.TaskOUT;
import com.odincode.TasksManagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class TaskServices {
    @Autowired
    private final TaskRepository taskRepository = new TaskRepository();

    //Despliega todos los tasks
    public ArrayList<TaskOUT> obtainTasks(){
        return (ArrayList<TaskOUT>) taskRepository.findAll();
    }

    //Guarda un task
    public TaskModel saveTask(TaskAdd taskAdd){
        //TaskModel newTask = new TaskModel(null, name, DueDate, flag, DoneDate, priority, CreateDate);
        return taskRepository.save(taskAdd); //Guarda una nueva task
    }
}
