package bankroll.management.bankrollmanagement.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Getter;

import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;

public class Token {
    @Getter
    private final String token;

    public Token(String token) {
        this.token = token;
    }

    public static Token of(int userId, Long validityInMinutes, String secretKey){
        var issueDate = Instant.now();
        return new Token(
                Jwts.builder()
                      .claim("user_id",userId)
                      .setIssuedAt(Date.from(issueDate.plus(validityInMinutes, ChronoUnit.MINUTES)))
                      .signWith(SignatureAlgorithm.HS256, Base64.getEncoder().encodeToString(secretKey.getBytes(StandardCharsets.UTF_8)))
                      .compact());
    }
}
