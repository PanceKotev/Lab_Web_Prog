package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST)
public class InvalidPageSizeException extends RuntimeException {
    public InvalidPageSizeException(){
        super("Page size cannot be more than 10!");
    }
}
