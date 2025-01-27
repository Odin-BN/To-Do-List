package com.odincode.TasksManagement;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusServer {

    @RequestMapping("/")
    public String status(){
        return "Server working";
    }
}