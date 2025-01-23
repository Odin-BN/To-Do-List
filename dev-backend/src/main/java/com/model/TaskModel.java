package com.odincode.TasksManagement.model;

import java.time.LocalDate;

public class TaskModel {

    private Long id;

    private String name;  //Limit to max 120 chars.
    private LocalDate DueDate; //Optional
    private Boolean flag; //Done/Undone flag
    private LocalDate DoneDate; //When the "to do" is marked as done this date is set.
    private String priority; //High, Medium and Low.
    private LocalDate CreateDate; //The date the task was created

    // Constructor
    public TaskModel(Long id, String name, LocalDate DueDate, Boolean flag, LocalDate DoneDate, String priority, LocalDate CreateDate){
        this.id = id;
        this.name = name;
        this.DueDate = DueDate;
        this.flag = flag;
        this.DoneDate = DoneDate;
        this.priority = priority;
        this.CreateDate = CreateDate;
    }


    // Getters & Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDueDate() {
        return DueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        DueDate = dueDate;
    }

    public Boolean getFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }

    public LocalDate getDoneDate() {
        return DoneDate;
    }

    public void setDoneDate(LocalDate doneDate) {
        DoneDate = doneDate;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public LocalDate getCreateDate() {
        return CreateDate;
    }

    public void setCreateDate(LocalDate createDate) {
        CreateDate = createDate;
    }
}

