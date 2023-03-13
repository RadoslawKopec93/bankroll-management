package bankroll.management.bankrollmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;

@SpringBootApplication
@EnableJdbcRepositories
public class BankrollManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankrollManagementApplication.class, args);
	}

}
