
<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

const products = ref([])

const form = ref({
  name: "",
  price: "",
  descricao: "",
  categoria: "",
  quantidade: ""
})

async function loadProducts() {
  const response = await axios.get("http://localhost:8080/products")
  products.value = response.data
}

async function submitForm() {
  if (!form.value.name || !form.value.price) {
    alert("Preencha todos os campos")
    return
  }

  await axios.post("http://localhost:8080/products", {
    id: Date.now(),
    name: form.value.name,
    price: Number(form.value.price),
    descricao: form.value.descricao,
    categoria: form.value.categoria,
    quantidade: Number(form.value.quantidade)

})

  form.value.name = ""
  form.value.price = ""
  form.value.descricao = ""
  form.value.categoria = ""
  form.value.quantidade = ""


  loadProducts()
}

onMounted(loadProducts)
</script>

<template>
    <form class="demo-form" action="#" @submit.prevent="submitForm">
        <h1 class="title">Cadastrar Produto</h1>

        <div class="field">
            <label>Name</label>
            <div class="box" ><input type="text" v-model="form.nome" placeholder="John Smith" /></div>
        </div>

        <div class="field">
            <label>Descrição</label>
            <div class="box" ><textarea rows="6"v-model="form.descricao" style="background-color: transparent; border: none;" type="text" placeholder="Descreva o que você precisa" /></div>
        </div>

        <div class="field">
            <label>Preço</label>
            <div class="box"><input type="number" v-model.number="form.preco" placeholder="Preço do produto" min="0"/></div>
        </div>

        <div class="field">
            <label>Categoria</label>
            <div class="box"><select v-model="form.categoria">
                <option>Eletrônicos</option>
                <option>Alimentos</option>
                <option>Roupas</option>
                <option>Outros</option>
            </select></div>
        </div>
        <div class="field">
            <label>Quantidade em Estoque</label>
            <div class="box"><input type="number" v-model.number="form.quantidade" placeholder="Quantidade em estoque" min="0"/></div>
        </div>

        <button class="submit" type="submit">Submit</button>
    </form>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.name }} - R$ {{ product.price }}
        </li>
    </ul>
</template>



<style scoped>

.demo-form{
    width: 35rem;
    padding: 36px 28px;
    margin: 2rem auto;
    background: #14213d;
    border-radius: 8px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #fca311;
    box-sizing: border-box;
    height: 40rem;
}
.title{
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 18px 0;
    color: #fca311;
}
.field{
    margin: 14px 0;
    display: flex;
    flex-direction: column;
}
.field label{
    font-weight: 700;
    margin-bottom: 8px;
}
.box{
    position: relative;
    border: 2px solid #fca311;
    border-radius: 3px;
    background: transparent;
    box-sizing: border-box;
    padding-left: 28px;
    overflow: visible;
    z-index: 0;
    box-shadow: inset 24px 0 0 var(--bg);
    background-image: linear-gradient(to right, var(--accent) 0 6px, transparent 6px);
    background-repeat: no-repeat;
}

.box input,
.box select{
    display: block;
    width: 100%;
    height: 44px;
    padding: 8px 12px;
    border: none;
    background: transparent;
    color: var(--text);
    outline: none;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
}
.box textarea{
    display: block;
    width: 100%;
    height: 60px;
    padding: 8px 12px;
    border: none;
    background: transparent;
    color: #fca311;
    outline: none;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    resize: none;
}
.field select{
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #fca311 50%),
                                        linear-gradient(135deg, #fca311 50%, transparent 50%);
    background-position: calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px);
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;
    padding-right: 36px;
}
.field input::placeholder{
    color: #6b6b6b;
}

.submit{
    width: 175px;
    height: 48px;
    background-color: transparent;
    border: 2px solid #fca311;
    color: #fca311;
    border-radius: 28px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    box-shadow: 0 6px 0 rgba(0,0,0,0.06);
    transition: all 0.2s ease;
}
.submit:hover{
    background-color: #fca311;
    color: #14213d;
    box-shadow: 0 2px 0 rgba(0,0,0,0.06);
}
</style>