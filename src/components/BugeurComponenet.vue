<template>
    <nav class="navbar">
        <p class="logo">Guillaume</p>
        <div class="nav-links">
            <ul>
                <li class="active"><a href="">link 1</a></li>
                <li><a href="">link 2</a></li>
                <li><a href="">link 3</a></li>
                <li><a href="">link 4</a></li>
            </ul>
        </div>
        <div class="burgeur"  @click="toggleMenu">
            <span class="line line1" :class="{ 'active': isOpen }"></span>
            <span class="line line2" :class="{ 'active': isOpen }"></span>
        </div>
    </nav>
    <header></header>

</template>

<script>
export default {
    mounted() {
        const menuberguer = document.querySelector('.burgeur');
        const navLinks = document.querySelector('.nav-links');

        menuberguer.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
};

</script>

<style>

.burgeur{
    position: absolute;
    top: 50px;
    right: 50px;
    cursor: pointer;
    display: none;
}

.line {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    margin-bottom: 5px;
    transition: transform 0.3s, opacity 0.3s;
}


.line1.active {
    transform: translateY(0px) rotate(45deg);
}

.line2.active {
    transform: translateY(-9px) rotate(-45deg);
}



header {
    height: 100vh;
    width: 100vw;
    background: url("../../Img.jpg");
    background-size: cover;
    background-position: center;

}
.navbar{
    position: fixed;
    padding: 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
}

.navbar a{
    color: white;
    text-decoration: none;
}
.logo{
    color: white;
    font-size: 2em;
    font-weight: bold;
}

.nav-links ul{
    display: flex;
    list-style: none;

}
.nav-links ul li{
    margin: 0 30px;
}

.navbar .nav-links ul li.active a{
    color: orange;
    font-weight:600 ;
}



@media screen and (max-width: 900px) {


    .logo{
       position: absolute;
        top: 45px;
        left: 50px;

    }

    .navbar{
        padding: 0;
    }
    .nav-links{
        top: 0;
        left: 0;
        position: absolute;
        backdrop-filter: blur(7px);
        background: rgba(255, 255, 255, 0.50);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -100%;
        transition: margin-left 0.5s ease-in;
    }


    .nav-links.open{
        margin-left: 0;

    }

    .nav-links ul{

        flex-direction: column;
        display: flex;
        align-items: center;

    }
    .burgeur{
        display: block;
    }


    .nav-links ul li{
        margin: 24px 0px;
        font-size: 1.2em;
    }


}
</style>
