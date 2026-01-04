package com.bliu.demo.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import com.bliu.demo.exception.EmailAlreadyExistsException;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<Map<String, String>> handleEmailDuplicate(
            EmailAlreadyExistsException ex) {

        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(Map.of("message", ex.getMessage()));
    }
}
