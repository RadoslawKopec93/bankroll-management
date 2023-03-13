package bankroll.management.bankrollmanagement;

import bankroll.management.bankrollmanagement.data.User;
import bankroll.management.bankrollmanagement.service.AuthService;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Objects;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    record RegisterRequest(
            @JsonProperty("first_name")String firstName,
            @JsonProperty("last_name") String lastName,
            String email, String password,
            @JsonProperty("password_confirm") String passwordConfirm) {

    }
    record RegisterResponse(
            @JsonProperty("first_name")String firstName,
            @JsonProperty("last_name") String lastName,
            String email) { }


    @PostMapping("/register")
    public RegisterResponse register(@RequestBody RegisterRequest registerRequest) {
        var user = authService.register(
                registerRequest.firstName(),
                registerRequest.lastName(),
                registerRequest.email(),
                registerRequest.password(),
                registerRequest.passwordConfirm()
        );
        return new RegisterResponse(user.getFirstName(), user.getLastName(), user.getEmail());
    }

    record LoginRequest(String email, String password){}
    record LoginResponse(String token){}

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest, HttpServletResponse response){
          var login = authService.login(loginRequest.email(), loginRequest.password());

        Cookie cookie = new Cookie("resfresh_token", login.getRefreshToken().getToken());
        cookie.setMaxAge(3600);
        cookie.setHttpOnly(true);
        cookie.setPath("/api");
        response.addCookie(cookie);

          return new LoginResponse(login.getAccessToken().getToken());
    }

    record UserResponse(
            @JsonProperty("first_name")String firstName,
            @JsonProperty("last_name") String lastName,
            String email) { }

    @GetMapping("/user")
    public UserResponse user(HttpServletRequest request){
        var user = (User) request.getAttribute("user");

        return new UserResponse(user.getFirstName(), user.getLastName(),user.getEmail());
    }
}
