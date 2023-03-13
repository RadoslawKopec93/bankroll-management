package bankroll.management.bankrollmanagement.service;

import lombok.Getter;

public class Login {
    @Getter
    private final Token accessToken;
    @Getter
    private final Token refreshToken;

    public Login(Token accessToken, Token refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }

    public static Login of(int userId, String accessSecret, String refreshSecret){
        return new Login(
                Token.of(userId,1L,accessSecret),
                Token.of(userId,1440L, refreshSecret)
        );
    }
}
