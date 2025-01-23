package com.odincode.TasksManagement.repository;
//Database

import com.odincode.TasksManagement.model.TaskModel;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class TaskRepository {
    private final List<TaskModel> taskModels = new ArrayList<>(); //It saves it in the memory
    private final AtomicLong idGenerator = new AtomicLong(1); // It makes every ID with a +1

    //Save a new task
    public TaskModel save(String name, LocalDate DueDate, Boolean flag, LocalDate DoneDate, String priority, LocalDate CreateDate){
        //Agregar que elementos valen 0 y asi segun los que ingreso.
        TaskModel newTaskModel = new TaskModel(idGenerator.getAndIncrement(), name, DueDate, flag, DoneDate, priority, CreateDate);
        taskModels.add(newTaskModel);
        return newTaskModel;
    }

    //Obtain all tasks
    public List<TaskModel> findAll(){
        return new ArrayList<>(taskModels);
    }



}
