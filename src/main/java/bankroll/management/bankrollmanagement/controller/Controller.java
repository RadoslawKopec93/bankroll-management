package bankroll.management.bankrollmanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class Controller {

    @GetMapping("/test")
    private String test(){
        return "asdsadsadsadas";
    }
}
