package bankroll.management.bankrollmanagement;

import bankroll.management.bankrollmanagement.service.AuthService;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class AuthorizationInterceptor implements HandlerInterceptor {
    private final AuthService authService;


    public AuthorizationInterceptor(AuthService authService) {
        this.authService = authService;
    }

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        String authorizationHeader = request.getHeader("Authorization");

        /*if(authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")){
            throw new NoBearerTokenError();
        }*/return true;
      //  request.setAttribute("user", authService.getUserFromToken());
    }
}
