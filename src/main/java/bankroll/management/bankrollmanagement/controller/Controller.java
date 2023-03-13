package bankroll.management.bankrollmanagement.controller;

import bankroll.management.bankrollmanagement.data.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping("/test")
    private String test(){
        return "asdsadsadsadas";
    }

    @PostMapping("/test1")
    private User test1(@RequestBody User user){
        System.out.println("test");
        return user;
    }
}
