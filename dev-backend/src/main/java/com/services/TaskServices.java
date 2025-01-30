package com.odincode.TasksManagement.services;
//Insert logic of the process of the app

import com.odincode.TasksManagement.model.TaskAdd;
import com.odincode.TasksManagement.model.TaskFlag;
import com.odincode.TasksManagement.model.TaskModel;
import com.odincode.TasksManagement.model.TaskOUT;
import com.odincode.TasksManagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class TaskServices {
    @Autowired
    private final TaskRepository taskRepository = new TaskRepository();

    //Despliega todos los tasks
    public List<TaskOUT> obtainTasks(String NameSearch, String PrioritySearch, String FlagSearch){
        List<TaskOUT> tasks = taskRepository.findAll();

        //It filters by name
        if (NameSearch != null && !NameSearch.isEmpty()){
            tasks = tasks.stream()
                    .filter(task -> task.getName().toLowerCase().contains(NameSearch.toLowerCase()))
                    .toList();
        }

        //It filters by priority
        if (PrioritySearch != null && !PrioritySearch.equalsIgnoreCase("All")) {
            tasks = tasks.stream()
                    .filter(task -> task.getPriority().equalsIgnoreCase(PrioritySearch))
                    .toList();
        }

        //It filters by flag of done/undone
        if (FlagSearch != null && !FlagSearch.equalsIgnoreCase("All")) {
            boolean isDone = FlagSearch.equalsIgnoreCase("Done"); //revisar esta linea para revisar el status
            tasks = tasks.stream()
                    .filter(task -> task.isFlag() == isDone)
                    .toList();
        }

        return tasks;
    }

    //Guarda un task
    public TaskModel saveTask(TaskAdd taskAdd){
        //TaskModel newTask = new TaskModel(null, name, DueDate, flag, DoneDate, priority, CreateDate);
        return taskRepository.save(taskAdd); //Guarda una nueva task
    }

    public void updateTask(Long id, TaskAdd updatedTask) {
        TaskModel task = taskRepository.findById(id);

        if (task != null) {
            if (updatedTask.getName() != null) {
                task.setName(updatedTask.getName());
            }
            if (updatedTask.getPriority() != null) {
                task.setPriority(updatedTask.getPriority());
            }
            task.setDueDate(updatedTask.getDeadline());

        }
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public void updateTaskFlag(Long id, TaskFlag taskFlag) {
        TaskModel task = taskRepository.findById(id);
        task.setFlag(taskFlag.isFlag());

        if (taskFlag.isFlag()) {
            task.setDoneDate(LocalDateTime.now());
        } else {
            task.setDoneDate(null);
        }
    }

    public Map<String, String> calculateAverages() {
        List<TaskModel> completedTasks = taskRepository.findByFlag();

        if (completedTasks.isEmpty()) {
            return Map.of(
                    "total", "N/A",
                    "low", "N/A",
                    "medium", "N/A",
                    "high", "N/A"
            );
        }

        return Map.of(
                "total", formatDuration(getAverageCompletionTime(completedTasks)),
                "low", formatDuration(getAverageCompletionTime(filterByPriority(completedTasks, "Low"))),
                "medium", formatDuration(getAverageCompletionTime(filterByPriority(completedTasks, "Medium"))),
                "high", formatDuration(getAverageCompletionTime(filterByPriority(completedTasks, "High")))

        );
    }

    private List<TaskModel> filterByPriority(List<TaskModel> tasks, String priority) {
        return tasks.stream()
                .filter(task -> priority.equals(task.getPriority()))
                .collect(Collectors.toList());
    }

    private Duration getAverageCompletionTime (List<TaskModel> tasks) {
        if (tasks.isEmpty()) {
            return Duration.ZERO;
        }
        long totalSeconds = tasks.stream()
                .mapToLong(task -> Duration.between(task.getCreateDate(), task.getDoneDate()).getSeconds())
                .sum();
        return Duration.ofSeconds(totalSeconds / tasks.size());
    }

    private String formatDuration(Duration duration) {
        long days = duration.toDays();
        long hours = duration.toHours() % 24;
        long minutes = duration.toMinutes() % 60;
        return String.format("%d days, %d hours, %d minutes", days, hours, minutes);
    }

}
