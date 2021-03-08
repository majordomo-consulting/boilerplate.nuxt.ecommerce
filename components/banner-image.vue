<template>
  <div>
    <div class="hero">
      <div class="_1200 top">
        <img src="../assets/images/beer.png" alt="" class="main-img" />
        <h1 class="heading">Tastes better after a Pint</h1>
      </div>
    </div>
    <div class="items-sec">
      <div class="_1200 items">

      </div>
    </div>
  </div>
</template>

<style scoped>

.body {
  font-family: Montserrat, sans-serif;
  color: #000;
}
.header {
  height: 100px;
}
.hero {
  background-image: none;
  background-position: 0px 0px;
  background-size: auto;
}

._1200 {
  position: relative;
  width: 90%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

._1200.top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 500px) {

.heading {
  font-size: 38px;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
}
}

@media screen and (min-width: 501px) {

.heading {
  font-size: 100px;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
}
}


.heading.smaller.center {
  text-align: center;
}

.smaller {
  font-size: 70px;
}

.main-img {
  position: relative;
  width: 320px;
  margin-right: -70px;
  margin-left: 69px;
}

.navbar {
  background-color: transparent;
}

.logo {
  width: 140px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.logo-wrap {
  padding: 14px;
  float: left;
}

.top-bar {
  position: relative;
}

.tab-link {
  cursor: pointer;
  display: block;
  padding: 14px;
  border-radius: 6px;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  color: black;
}

</style>