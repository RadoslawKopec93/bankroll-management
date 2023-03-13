package bankroll.management.bankrollmanagement.data;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
//import org.springframework.data.annotation.Id;

import javax.persistence.*;

@Getter
@Setter
@ToString
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
   // @JsonProperty("first_name")
    private String firstName;
    //@JsonProperty("last_name")
    private String lastName;
    private String email;
    private String password;

    public User() {

    }

    public User(String firstName, String lastName, String email, String password) {
       // this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public static User of(String firstName, String lastName, String email,String password){
        return new User(firstName,lastName,email,password);
    }

    public User(User user) {
      //  this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
    }
}
