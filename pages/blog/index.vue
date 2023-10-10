<template>
  <div class="container blog-padding">
    <nuxt-link to="/" style="color: black">Home</nuxt-link> /
    <nuxt-link to="/blog" style="color: #ff5c23; pointer-events: none">{{
      $t("blog")
    }}</nuxt-link>
    <div class="row d-flex flex-wrap" style="margin-right: -10px; margin-left: -10px">
      <div class="col-md-8 col-lg-9 col-sm-12 evo-list-blog-page">
        <h1 class="title-head">{{ $t("blog") }}</h1>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 evo-blog-item">
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
                  >Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết</a
                >
                <p>
                  Một đầu bếp người Pháp từng nói rằng, ẩm thực ngon nhất ra đời từ sự đơn
                  giản:” Nếu nguyên liệu t...
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
          <div class="col-lg-6 col-md-6 col-sm-12 evo-blog-item">
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
          <div class="col-lg-6 col-md-6 col-sm-12 evo-blog-item">
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
                  >Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững</a
                >
                <p>
                  Nước Ý được biết đến nhiều với phong cảnh nên thơ và nền văn hoá ẩm thực
                  tuyệt vời. Nhắc tới nước...
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
      <div class="col-md-4 col-lg-3 col-sm-12 blog-sidebar">
        <div class="aside-title margin-top-20">
          <a href="blog" title="Tin khuyến mãi" style="pointer-events: none"
            >Tin khuyến mãi</a
          >
        </div>
        <div class="evo-list-blogs clearfix" style="display: block">
          <article class="has-post-thumbnail clearfix">
            <div class="qodef-e-media-image">
              <a
                href="https://pizzainn.vn/pizza-margherita-va-mot-so-dieu-ban-co-the-chua-biet"
                class="thumb"
                title="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
              >
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/440/789/articles/img-6370-min.jpg?v=1636450978837"
                  alt="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
                  class="lazy img-responsive mx-auto d-block loaded"
              /></a>
            </div>
            <div class="qodef-e-content">
              <a
                href="https://pizzainn.vn/pizza-margherita-va-mot-so-dieu-ban-co-the-chua-biet"
                alt="Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết"
              >
                Pizza Margherita Và Một Số Điều Bạn Có Thể Chưa Biết</a
              >
            </div>
          </article>
        </div>
        <div class="evo-list-blogs clearfix" style="display: block">
          <article class="has-post-thumbnail clearfix">
            <div class="qodef-e-media-image">
              <a
                href="/doi-net-ve-mon-pizza-trong-van-hoa-am-thuc-cua-my"
                class="thumb"
                title="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
              >
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/440/789/articles/1di-san-vo-hinh-cua-nuoc-y-145711.jpg?v=1636450826980"
                  alt="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
                  class="lazy img-responsive mx-auto d-block loaded"
              /></a>
            </div>
            <div class="qodef-e-content">
              <a
                href="/doi-net-ve-mon-pizza-trong-van-hoa-am-thuc-cua-my"
                alt="Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ"
              >
                Đôi Nét Về Món Pizza Trong Văn Hoá Ẩm Thực Của Mỹ</a
              >
            </div>
          </article>
        </div>
        <div class="evo-list-blogs clearfix" style="display: block">
          <article class="has-post-thumbnail clearfix">
            <div class="qodef-e-media-image">
              <a
                href="/ly-do-khien-cong-viec-cua-nguoi-tho-lam-banh-pizza-luon-ben-vung"
                class="thumb"
                title="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
              >
                <img
                  src="https://bizweb.dktcdn.net/thumb/medium/100/440/789/articles/image-asset.jpeg?v=1636450682090"
                  alt="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
                  class="lazy img-responsive mx-auto d-block loaded"
              /></a>
            </div>
            <div class="qodef-e-content">
              <a
                href="/ly-do-khien-cong-viec-cua-nguoi-tho-lam-banh-pizza-luon-ben-vung"
                alt="Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững"
              >
                Lý Do Khiến Công Việc Của Người Thợ Làm Bánh Pizza Luôn Bền Vững</a
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.blog-padding {
  padding-top: 20px;
  padding-bottom: 20px;
}
.container {
  padding-left: 10px;
  padding-right: 10px;
}
.title-head {
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;
  font-weight: 700;
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
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img-content .evo-author {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  color: #6c757d;
  padding-top: 5px;
}
.evo-list-blog-page .evo-blog-item .evo-news-item .item-img-content .evo-author span img {
  max-width: 16px;
  margin-right: 5px;
  max-height: 16px;
}
.blog-sidebar .aside-title {
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-size: 16px;
  line-height: 1.5em;
  letter-spacing: 0.12em;
  background-color: #00974b;
  padding: 5px 10px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.margin-top-20 {
  margin-top: 20px !important;
}
.blog-sidebar .aside-title a {
  color: #fff;
}
.blog-sidebar .evo-list-blogs {
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.blog-sidebar .evo-list-blogs .has-post-thumbnail {
  margin: 0 0 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.blog-sidebar .evo-list-blogs .has-post-thumbnail .qodef-e-media-image {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 80px;
  margin: 0 10px 0 0;
}
.d-block {
  display: block !important;
}
.blog-sidebar .evo-list-blogs .has-post-thumbnail .qodef-e-content {
  line-height: 1.3;
}
.blog-sidebar .evo-list-blogs .has-post-thumbnail .qodef-e-content a {
  color: #333f48;
  font-size: 14px;
  font-weight: 700;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>
