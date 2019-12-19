package mk.finki.ukim.mk.lab.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST)
public class TooManySpicyException extends RuntimeException {
    public TooManySpicyException(){
        super("Cannot have more than 3 spicy ingredients!");
    }
}
