package com.odincode.TasksManagement.repository;
//Database

import com.odincode.TasksManagement.model.TaskAdd;
import com.odincode.TasksManagement.model.TaskModel;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class TaskRepository {
    private final List<TaskModel> taskModels = new ArrayList<>(); //It saves it in the memory
    private final AtomicLong idGenerator = new AtomicLong(1); // It makes every ID with a +1
    //private final LocalDateTime CreateTime;


    //Save a new task
    public TaskModel save(TaskAdd taskAdd){
        //Agregar que elementos valen 0 y asi segun los que ingreso.
        //Descomponerlo aqui al final, buscar como usar el json de input
        //this.CreateTime = LocalDateTime.new();
        final long ID = idGenerator.getAndIncrement();
        TaskModel newTaskModel = new TaskModel(ID, taskAdd.getName(), taskAdd.getDeadline(), false, null, taskAdd.getPriority(), LocalDateTime.now());
        taskModels.add(newTaskModel);

        //Prueba
        /*System.out.println("Task received:");
        System.out.println("ID: " + ID);
        System.out.println("Name: " + taskAdd.getName());
        System.out.println("Deadline: " + taskAdd.getDeadline());
        System.out.println("Priority: " + taskAdd.getPriority());
        System.out.println("Create Time: " + LocalDateTime.now());*/

        //System.out.print(taskModels);

        return newTaskModel;
    }

    //Obtain all tasks
    public List<TaskModel> findAll(){
        //Tengo que regresar ID, Nombre, Prioridad, fecha limite, flag of Done/undone y color de la casilla.
        return new ArrayList<>(taskModels);
    }



}


