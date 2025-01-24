package com.odincode.TasksManagement.model;

import java.time.LocalDate;

public class TaskM {
    private String name;
    private String priority;
    private LocalDate deadline;


    public TaskM(String name, String priority, LocalDate deadline){

        this.name = name;
        this.priority = priority;
        this.deadline = deadline;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public LocalDate getDeadline() {
        return deadline;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }






}
