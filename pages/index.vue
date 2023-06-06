<template>
  <v-row justify="center" align="center">
    <div class="main1">
      <div id="slider">
        <div class="list">
          <div class="item active">
            <div class="img-placeholder" style="position: relative">
              <img src="../static/images/1.jpg" alt="" />
            </div>
          </div>
          <a class="item" href="" target="_blank">
            <img src="../static/images/2.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/3.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/4.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/5.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/6.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/7.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/8.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/9.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/10.jpg" alt="" />
          </a>
          <a class="item" href="" target="_blank">
            <img src="../static/images/11.jpg" alt="" />
          </a>
        </div>
        <div class="button-placeholder">
          <button id="prev">&lt;</button>
          <button id="next">></button>
        </div>
        <ul class="dots">
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="product"></div>
    </div>
  </v-row>
</template>
<script>
export default {
  name: "DefaultLayout",
  mounted() {
    const list = this.$el.querySelector("#slider .list");
    const items = this.$el.querySelectorAll("#slider .list .item");
    const dots = this.$el.querySelectorAll("#slider .dots li");
    const prev = this.$el.querySelector("#prev");
    const next = this.$el.querySelector("#next");
    let active = 0;
    const countItem = items.length;
    // const autoRef = setInterval(() => {
    //   next.click();
    // }, 5000);

    next.onclick = function nextItem() {
      if (active + 1 >= countItem) {
        active = 0;
      } else {
        active = active + 1;
      }
      reloadSlide();
    };

    prev.onclick = function prevItem() {
      if (active - 1 < 0) {
        active = countItem - 1;
      } else {
        active = active - 1;
      }
      reloadSlide();
    };

    dots.forEach((li, key) => {
      li.addEventListener("click", function () {
        active = key;
        reloadSlide();
      });
    });

    function reloadSlide() {
      items.forEach((item, index) => {
        if (index === active) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      const activeDot = document.querySelector("#slider .dots li.active");
      activeDot.classList.remove("active");
      dots[active].classList.add("active");
    }

    dots.forEach((li, key) => {
      li.addEventListener(
        "click",
        function () {
          active = key;
          reloadSlide.call(this);
        }.bind(this)
      );
    });
  },
};
</script>
<style>
#slider {
  overflow-x: hidden;
  height: 90vh;
  width: 100vw;
  position: relative;
  overflow-y: hidden;
}

.list {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  transition: opacity 1.5s;
}

.list .item {
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s;
}

.list .item.active {
  display: block;
  opacity: 1;
}

.list img {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  object-fit: cover;
}

.img-placeholder {
  position: relative;
}

.button-placeholder {
  position: absolute;
  top: 45%;
  margin: 0% 2%;
  width: 96%;
  display: flex;
  justify-content: space-between;
}

.button-placeholder button {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  font-family: monospace;
  font-weight: bold;
  font-size: 30px;
  transition: 0.3s;
  z-index: 2;
  background-color: rgba(143, 143, 143, 0.568);
}

.button-placeholder button:hover {
  background-color: rgba(143, 143, 143, 0.568);
  color: white;
}

.dots {
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
}

.dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: rgba(143, 143, 143, 0.568);
  border-radius: 20px;
  margin: 10px;
  transition: 1s;
}

.dots li.active {
  width: 30px;
  background-color: #ff5c23;
}
</style>