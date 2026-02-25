<template>
    <section>
        
        <input type="search" placeholder="Buscar" />
        <div style="display: flex; gap: 3rem;">
        <p style="color:white">Filtros:</p>
        <ul id="filtro" >
            <li><select name="categoria" id="categoria">
                <option value="">Todas as categorias</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="alimentos">Alimentos</option>
                <option value="roupas">Roupas</option>
                <option value="outros">Outros</option>
            </select></li>
            <li><button>Preço Máximo</button></li>
            <li><button>Preço Mínimo</button></li>
        </ul>
        </div>
    </section>
</template>
<script setup></script>
<style scoped>
    section{
        background-color: #001b54;
        padding: 1rem;
        border-radius: 10px;
        margin: 1rem;
    }
    input{
        width: 20rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: white;
        border-radius: 20px;
    }
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
    }
    li button{
        background-color: transparent;
        border-radius: 5px;
        padding: 0.5rem;
        border: 1px solid white;
        color: white;
        transition: all 0.2s ease   ;
    }
    li button:hover{
        background-color: white;
        color: #001233;
        border: 1px solid transparent;
    }
    select{
        background-color: transparent;
        border-radius: 5px;
        padding: 0.4rem;
        border: 1px solid white;
        color: white;
        transition: all 0.2s ease   ;
    }
</style>