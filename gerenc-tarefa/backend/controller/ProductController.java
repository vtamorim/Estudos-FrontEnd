package backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import backend.model.Product;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private List<Product> products = new ArrayList<>();

    @GetMapping
    public List<Product> list() {
        return products;
    }

    @PostMapping
    public Product add(@RequestBody Product product) {
        products.add(product);
        return product;
    }
}