<template>
  <div id="bestseller">
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
              <img src="../static/images/8.png" alt="" />
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
    <bestseller></bestseller>
    <div class="container" width="100%">
      <div class="d-flex flex-wrap news">
        <h3 class="news-title">
          {{ $t("news") }}
        </h3>
        <span style="margin-left: 12px; margin-top: 2px; opacity: 0.5">
          <p style="color: grey">{{ $t("miss") }}</p>
        </span>
        <v-spacer></v-spacer>
        <a class="a-hover" style="text-decoration: none; color: black" href=""
          >{{ $t("view") }} <i class="fas fa-arrow-right"></i
        ></a>
      </div>
      <div style="padding-top: 12px">
        <div class="evo-list-blog-page">
          <div class="row">
            <div class="col-md-6 col-lg-4 col-sm-12 evo-blog-item">
              <div class="evo-news-item">
                <div class="item-img">
                  <a
                    href="https://pizzainn.vn/pizza-margherita-va-mot-so-dieu-ban-co-the-chua-biet"
                    title="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
                  >
                    <img
                      width="480"
                      height="320"
                      src="https://bizweb.dktcdn.net/thumb/large/100/440/789/articles/img-6370-min.jpg?v=1636450978837"
                      alt="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
                      class="lazy img-responsive center-block loaded"
                  /></a>
                </div>
                <div class="item-img-content">
                  <a
                    href="https://pizzainn.vn/pizza-margherita-va-mot-so-dieu-ban-co-the-chua-biet"
                    title="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
                    style="color: black"
                    class="a-hover"
                    >Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết</a
                  >
                  <p>
                    Một đầu bếp người Pháp từng nói rằng, ẩm thực ngon nhất ra đời từ sự
                    đơn giản:” Nếu nguyên liệu t...
                  </p>
                  <div class="evo-author">
                    <span>
                      <img
                        width="16"
                        height="16"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1Miw0MGgtMjRWMGgtNDB2NDBIMTI0VjBIODR2NDBINjBDMjYuOTE2LDQwLDAsNjYuOTE2LDAsMTAwdjM1MmMwLDMzLjA4NCwyNi45MTYsNjAsNjAsNjBoMzkyICAgIGMzMy4wODQsMCw2MC0yNi45MTYsNjAtNjBWMTAwQzUxMiw2Ni45MTYsNDg1LjA4NCw0MCw0NTIsNDB6IE00NzIsNDUyYzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYxODggICAgaDQzMlY0NTJ6IE00NzIsMTQ4SDQwdi00OGMwLTExLjAyOCw4Ljk3Mi0yMCwyMC0yMGgyNHY0MGg0MFY4MGgyNjR2NDBoNDBWODBoMjRjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBWMTQ4eiIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzk2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIzMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjMxMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNzYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjE1NiIgeT0iMzkwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMjM2IiB5PSIzOTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIzMTYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjM5NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        alt="Pizza Family"
                      />
                      09/11/2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-12 evo-blog-item">
              <div class="evo-news-item">
                <div class="item-img">
                  <a
                    href="/doi-net-ve-mon-pizza-trong-van-hoa-am-thuc-cua-my"
                    title="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
                  >
                    <img
                      width="480"
                      height="320"
                      src="https://bizweb.dktcdn.net/thumb/large/100/440/789/articles/1di-san-vo-hinh-cua-nuoc-y-145711.jpg?v=1636450826980"
                      alt="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
                      class="lazy img-responsive center-block loaded"
                  /></a>
                </div>
                <div class="item-img-content">
                  <a
                    href="/doi-net-ve-mon-pizza-trong-van-hoa-am-thuc-cua-my"
                    title="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
                    style="color: black"
                    class="a-hover"
                    >Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ</a
                  >
                  <p>
                    Chuyên mục hôm nay, Pizza Inn xin được gửi đến các bạn đôi điều về món
                    Pizza trong ẩm thực...
                  </p>
                  <div class="evo-author">
                    <span>
                      <img
                        width="16"
                        height="16"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1Miw0MGgtMjRWMGgtNDB2NDBIMTI0VjBIODR2NDBINjBDMjYuOTE2LDQwLDAsNjYuOTE2LDAsMTAwdjM1MmMwLDMzLjA4NCwyNi45MTYsNjAsNjAsNjBoMzkyICAgIGMzMy4wODQsMCw2MC0yNi45MTYsNjAtNjBWMTAwQzUxMiw2Ni45MTYsNDg1LjA4NCw0MCw0NTIsNDB6IE00NzIsNDUyYzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYxODggICAgaDQzMlY0NTJ6IE00NzIsMTQ4SDQwdi00OGMwLTExLjAyOCw4Ljk3Mi0yMCwyMC0yMGgyNHY0MGg0MFY4MGgyNjR2NDBoNDBWODBoMjRjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBWMTQ4eiIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzk2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIzMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjMxMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNzYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjE1NiIgeT0iMzkwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMjM2IiB5PSIzOTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIzMTYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjM5NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        alt="Pizza Family"
                      />
                      09/11/2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-12 evo-blog-item">
              <div class="evo-news-item">
                <div class="item-img">
                  <a
                    href="/ly-do-khien-cong-viec-cua-nguoi-tho-lam-banh-pizza-luon-ben-vung"
                    title="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
                  >
                    <img
                      width="480"
                      height="320"
                      src="https://bizweb.dktcdn.net/thumb/large/100/440/789/articles/image-asset.jpeg?v=1636450682090"
                      alt="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
                      class="lazy img-responsive center-block loaded"
                  /></a>
                </div>
                <div class="item-img-content">
                  <a
                    href="/ly-do-khien-cong-viec-cua-nguoi-tho-lam-banh-pizza-luon-ben-vung"
                    title="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
                    style="color: black"
                    class="a-hover"
                    >Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững</a
                  >
                  <p>
                    Nước Ý được biết đến nhiều với phong cảnh nên thơ và nền văn hoá ẩm
                    thực tuyệt vời. Nhắc tới nước...
                  </p>
                  <div class="evo-author">
                    <span>
                      <img
                        width="16"
                        height="16"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQ1Miw0MGgtMjRWMGgtNDB2NDBIMTI0VjBIODR2NDBINjBDMjYuOTE2LDQwLDAsNjYuOTE2LDAsMTAwdjM1MmMwLDMzLjA4NCwyNi45MTYsNjAsNjAsNjBoMzkyICAgIGMzMy4wODQsMCw2MC0yNi45MTYsNjAtNjBWMTAwQzUxMiw2Ni45MTYsNDg1LjA4NCw0MCw0NTIsNDB6IE00NzIsNDUyYzAsMTEuMDI4LTguOTcyLDIwLTIwLDIwSDYwYy0xMS4wMjgsMC0yMC04Ljk3Mi0yMC0yMFYxODggICAgaDQzMlY0NTJ6IE00NzIsMTQ4SDQwdi00OGMwLTExLjAyOCw4Ljk3Mi0yMCwyMC0yMGgyNHY0MGg0MFY4MGgyNjR2NDBoNDBWODBoMjRjMTEuMDI4LDAsMjAsOC45NzIsMjAsMjBWMTQ4eiIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMzk2IiB5PSIyMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSI3NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMTU2IiB5PSIzMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIyMzYiIHk9IjMxMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjMxNiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iNzYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjE1NiIgeT0iMzkwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHJlY3QgeD0iMjM2IiB5PSIzOTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzZjNzU3ZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cmVjdCB4PSIzMTYiIHk9IjM5MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNmM3NTdkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3JlY3Q+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxyZWN0IHg9IjM5NiIgeT0iMzEwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2Yzc1N2QiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcmVjdD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        alt="Pizza Family"
                      />
                      09/11/2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bestseller from "../components/bestseller.vue";
export default {
  components: { bestseller },
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
  background-color: #1976d2;
}
.evo-list-blog-page .evo-blog-item .evo-news-item {
  border: 1px solid #e6e6e6;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img {
  padding-bottom: 75%;
  overflow: hidden;
  height: auto;
  display: block;
  position: relative;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img img {
  border-radius: 10px;
}
img {
  max-width: 100%;
  height: auto;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img-content a {
  font-weight: 700;
  font-size: 15px;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
}
a {
  color: #333f48;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img-content p {
  margin-top: 5px;
  color: #666;
  font-size: 13px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 10px;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img-content .evo-author span img {
  max-width: 16px;
  margin-right: 5px;
  max-height: 16px;
}
.news {
  padding-bottom: 1.125rem;
  border-bottom: 1px solid grey;
}
</style>
<i18n>
 { 
  "en":{
    "news": "Our latest news",
    "miss": "Don't miss this week's deals",
    "view": "View All"
  },
  "vn":{
    "news": "Tin tức mới nhất của chúng tôi",
    "miss": "Đừng bỏ lỡ ưu đãi tuần này",
    "view": "Xem tất cả"
  }
}
</i18n>
