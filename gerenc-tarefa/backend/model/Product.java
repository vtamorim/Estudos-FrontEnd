package backend.model;

public class Product {
    private Long id;
    private String name;
    private String descricao;
    private String categoria;
    private Double price;
    private Integer quantidade;


    public Product(Long id, String name, String descricao, String categoria, Double price, Integer quantidade) {
        this.id = id;
        this.name = name;
        this.descricao = descricao;
        this.categoria = categoria;
        this.price = price;
        this.quantidade = quantidade;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Integer getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }


}
