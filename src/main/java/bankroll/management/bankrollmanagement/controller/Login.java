package bankroll.management.bankrollmanagement.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
public class Login {

    @GetMapping("/login")
    private String test(){
        return "login";
    }
}
