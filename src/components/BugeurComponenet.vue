<template>
    <nav class="navbar">
        <router-link to="/">
            <svg class="logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.3258 9.95348C32.2968 10.2355 30.8002 10.7997 29.9896 11.1444C28.3995 11.8652 25.5622 13.7143 25.7492 13.9337C25.9675 14.1217 29.5531 12.8995 31.5797 11.9279C34.2611 10.6116 36.506 10.2042 39.7175 10.3609C44.4879 10.643 47.7617 12.5547 49.5077 16.1275C51.129 19.4496 50.3496 23.3671 47.1381 28.0995C46.4522 29.071 46.078 29.69 46.078 29.69C46.7795 29.8075 46.6236 31.0768 46.7795 30.9828C46.9354 30.8887 47.9176 29.4784 48.853 28.0681C51.6591 23.8059 52.345 19.3555 50.7549 16.1275C49.2583 13.1502 46.7328 11.0817 43.116 9.95348C40.6528 9.16998 35.9448 9.16998 33.3258 9.95348Z" fill="#FF9900"/>
                <path d="M18.4845 20.7215C20.8214 16.4096 26.2013 14.1766 29.709 13.6464C31.6476 13.5998 32.5151 13.6464 34.6041 14.4848C35.3212 14.7982 36.5372 15.5503 37.3479 16.1771C38.9068 17.3994 39.242 16.864 39.6473 15.2343H40.8165L41.027 19.6872V24.545H39.6473C39.6317 24.5189 39.6473 21.9333 39.6473 21.9333C39.6473 21.9333 40.6996 19.2302 40.2319 18.8776C39.7642 18.525 39.2966 18.8776 38.9458 19.1127C38.595 19.3477 37.8935 20.523 37.8935 20.523L36.8178 18.4336C35.0718 16.5219 33.2946 15.7697 30.582 15.7697C27.8382 15.7697 26.3416 16.5532 24.8762 18.7157C23.2861 21.1289 22.7872 23.1973 22.7872 27.679C22.7872 33.1949 23.629 35.9215 26.0298 38.1153C27.1211 39.1182 28.8983 39.9017 30.0519 39.9017C30.3326 39.9017 30.3949 40.121 30.2702 40.5911C29.896 41.8448 29.6154 41.9388 27.5576 41.5C18.5468 39.6196 13.9323 29.1206 18.4845 20.7215Z" fill="#D9D9D9"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3323 21.9254C35.6798 24.558 35.4927 24.746 34.9938 24.3073C34.7132 24.0252 34.0896 23.6805 33.622 23.4924C30.9717 22.4895 27.4173 26.2504 26.0454 31.5782C25.5154 33.7093 25.5777 34.3675 26.5131 35.2136C27.6356 36.2165 28.4774 35.6211 31.7824 31.4842C33.4972 29.353 34.8068 27.504 34.7132 27.4413C34.7132 27.4413 35.672 25.9996 36.8334 24.3386L37.9558 23.1477L36.8334 25.9996C36.2098 27.5353 35.3212 29.5724 35.3212 29.5724H36.1397C36.1397 29.5724 36.6151 29.4157 37.6441 26.5951C38.2365 24.9654 38.8289 23.179 38.9536 22.6776C39.0783 22.1448 39.4213 21.2986 39.7019 20.7345C40.3878 19.4495 40.3566 19.0734 39.7019 19.0734C39.3589 19.1048 38.4547 20.1704 37.3323 21.9254ZM34.6197 25.1848C34.6197 24.9341 34.3391 24.5893 34.0273 24.4013C33.1231 23.9312 31.8369 24.7539 30.9951 25.6941C29.1555 27.6998 28.3605 28.8594 27.9551 31.3353C27.7992 32.1815 27.9162 33.772 29.9428 31.6095C32.3124 29.071 34.6197 25.9056 34.6197 25.1848Z" fill="#FF9900"/>
                <path d="M33.5674 31.1238V29.8075H39.7642H45.8442C46.4288 29.925 46.5457 30.9827 46.5457 30.9827C45.5791 30.9827 43.1316 31.5155 42.508 32.111C41.3856 33.2392 38.7042 35.339 37.7376 35.8405L36.8958 36.2792L37.075 34.0854C37.1997 32.6124 35.0874 31.4528 33.5674 31.1238Z" fill="#D9D9D9"/>
                <path d="M33.1309 32.8005C32.8815 33.5213 32.1332 35.6524 31.5408 37.5642C29.1088 45.0858 27.3004 48.7526 24.8996 51.1345C22.2494 53.7357 19.8798 54.6759 17.5413 54.0178C15.3588 53.4223 12.9892 50.8211 12.9892 49.0347C12.9892 48.1258 14.4546 46.6529 16.263 45.744C17.136 45.3052 19.8798 44.271 22.4053 43.4562C26.8015 42.0145 27.8616 41.4817 26.3338 41.4817C25.3673 41.4817 17.7596 44.083 15.6394 45.1172C14.6729 45.6186 13.4569 46.4962 12.9268 47.0916C12.085 48.0632 11.9914 48.3139 12.1785 49.5675C12.428 51.3852 13.5504 52.8582 15.577 54.0178C17.0113 54.8326 17.479 54.958 19.7551 54.958C21.7817 54.958 22.6859 54.8013 23.9642 54.2372C25.9597 53.3597 28.6411 50.5077 30.0753 47.8124C31.2601 45.5873 32.6632 41.7638 32.4138 41.419C32.3514 41.2623 32.445 40.6982 32.632 40.1968C32.9438 39.476 33.4817 39.2331 35.3212 38.3869C36.6307 37.7914 38.7042 36.577 39.7642 35.9188C40.7932 35.2294 41.7519 34.5869 42.4534 35.057C44.0417 34.1084 46.5457 31.8916 46.5457 31.4529H45.1426C45.1426 31.4529 42.4939 32.803 41.3934 33.7407C38.8679 35.7151 34.3781 38.3477 34.0663 38.003C33.9727 37.9089 34.3157 36.5927 34.8146 35.057C35.3446 33.5213 35.6564 32.1737 35.5317 32.0483C35.3758 31.9543 34.9081 31.7663 34.4404 31.6409C33.6921 31.4842 33.5674 31.5782 33.1309 32.8005Z" fill="#FF9900"/>
                <path d="M24.3306 35.0257C24.3306 35.3704 24.4553 35.7151 24.6112 35.8092C24.9541 36.0285 25.3283 35.1197 25.0789 34.7123C24.7983 34.2108 24.3306 34.3989 24.3306 35.0257Z" fill="#D9D9D9"/>
                <path d="M41.0504 35.4487L40.2319 36.0364L39.4135 36.5065L38.4781 37.0941L36.9581 37.9168L35.4382 38.7394L34.3859 39.3271L33.2166 39.9147C33.2166 39.9147 33.253 40.2758 33.2166 40.5023L32.8659 41.325L36.0228 40.5415L40.0137 39.57L41.7909 39.3506V37.2194C41.7909 37.2194 42.165 34.9786 42.1027 34.9786C42.0091 34.9786 41.0504 35.4487 41.0504 35.4487Z" fill="#D9D9D9"/>
            </svg>
        </router-link>

        <div class="nav-links">
            <h2 class="second-titel">welcome</h2>
            <ul>
                <li><router-link class="link" to="/projet">My projet</router-link></li>
                <li><router-link class="link" to="">About Me</router-link></li>
                <li><router-link class="link" to="">Contact</router-link></li>
                <li><router-link class="link" to="">My Skills</router-link></li>
            </ul>
        </div>
        <div class="burgeur"  @click="toggleMenu">
            <span class="line line1" :class="{ 'active': isOpen }"></span>
            <span class="line line2" :class="{ 'active': isOpen }"></span>
        </div>
    </nav>


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





.navbar{
    position: fixed;
    top: 0;
    padding: 50px;
    display: flex;
    justify-content: end;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    backdrop-filter: blur(2px);
}

.link{
    color: white;
    text-decoration: none;
}

.link::after{
    position: relative;
    content: "";
    left: 50%;
    display: block;
    width:0;
    bottom: -4px;
    height: 2px;
    background: #FF9900;
    transition: 0.4s ease-out;
}
.link:hover::after{
    width: 100%;
    left: 0;
}


.logo{
    position: absolute;
    top: 32px;
    left: 32px;
    color: white;
    font-weight: bold;
}

.nav-links ul{
    display: flex;
    list-style: none;

}
.nav-links ul li{
    margin: 0 30px;
}

.second-titel{
    display: none;
}





@media screen and (max-width: 900px) {


    .logo{
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
        font-weight: bold;
    }

    .navbar{
        padding: 0;
    }
    .nav-links{
        top: 0;
        left: 0;
        flex-direction: column;
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

    .second-titel{
        display: block;
    }


}
</style>
