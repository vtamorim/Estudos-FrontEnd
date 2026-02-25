<template>
    <form class="demo-form" action="#" @submit.prevent>
        <h1 class="title">Schedule a demo for our product.</h1>

        <div class="field">
            <label>Name</label>
            <div class="box"><input type="text" placeholder="John Smith" /></div>
        </div>

        <div class="field">
            <label>Descrição</label>
            <div class="box"><textarea rows="6" style="background-color: transparent; border: none;" type="text" placeholder="Descreva o que você precisa" /></div>
        </div>

        <div class="field">
            <label>Phone</label>
            <div class="box"><input type="tel" placeholder="xxx-xxx-xxxx" /></div>
        </div>

        <div class="field">
            <label>Day</label>
            <div class="box"><select>
                <option>Which day works best..</option>
                <option>Monday</option>
                <option>Tuesday</option>
            </select></div>
        </div>

        <button class="submit" type="submit">Submit</button>
    </form>
</template>

<script setup>

</script>

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
    top: 2.5rem;
    box-shadow: 0 6px 0 rgba(0,0,0,0.06);
    transition: all 0.2s ease;
}
.submit:hover{
    background-color: #fca311;
    color: #14213d;
    box-shadow: 0 2px 0 rgba(0,0,0,0.06);
}
</style>