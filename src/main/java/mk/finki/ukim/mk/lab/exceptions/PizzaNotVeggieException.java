package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST)
public class PizzaNotVeggieException extends RuntimeException {
    public PizzaNotVeggieException(){
        super("Not all ingredients in this pizza are vegetables!");
    }
}
