package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND)
public class InvalidPizzaIDException extends RuntimeException {
    public InvalidPizzaIDException(){
        super("A pizza with that ID does not exist.");
    }
}
