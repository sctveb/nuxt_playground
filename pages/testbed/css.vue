<template>
<div>
    <a herf="#" class="foo">Transition Me</a>
    <div class="test1">
    <ul id="nav">
        <li><a href="#">News</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">News</a></li>
    </ul>
    </div>
    <div class="test2">
        <a href="#"><img src="/images/favicon/android-icon-192x192.png"></a>
    </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>

.test2 a img {
    opacity: 0.25;
    /* IE 8 hack */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=25)";
    /* IE 5-7 hack */
    filter: alpha(opacity = 25);
    transition: all 0.2s ease-in-out;
}
.test2 a:hover img,
.test2 a:focus img {
    opacity: 0.7;
    /* IE 8 hack */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
    /* IE 5-7 hack */
    filter: alpha(opacity = 70);
}
a.foo {
        padding: 5px 10px;
        background: #9c3;
        -webkit-transition: background 0.3s ease 0.5s, color 0.2s linear;
        -moz-transition: background 0.3s ease 0.5s, color 0.2s linear;
        -o-transition: background 0.3s ease 0.5s, color 0.2s linear;
        transition: background 0.3s ease 0.5s, color 0.2s linear;

        /* -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease; */

        /* -webkit-transition-property: background;
        -webkit-transition-duration: 0.3s;
        -webkit-transition-timing-function: ease;
        -webkit-transition-delay: 0.5s; */
    }

a.foo:hover,
a.foo:focus {
    color: rgb(219, 213, 213);
    background: #690;
}

#nav {
    
    float: right;
    padding: 42px 0 0 30px;
}
#nav li {
    background:#9250d3;
    float: left;
    margin: 0 0 0 5px;
}
#nav li a {
    padding: 5px 15px;
    font-weight: bold;
    color: #ccc;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    border-radius: 14px;
    transition: all 0.3s ease-in-out;
}

#nav li a:hover,
#nav li a:focus {
    color: #fff;
    background: rgba(255,255,255, 0.15);
}
</style>
