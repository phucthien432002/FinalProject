<template>
  <section>
    <div class="row">
      <div class="container text-center">
        <h3>Deck #{{ $route.params.id }}: Shopping</h3>
        <div class="tools">
          <button class="btn1">Start Now</button>
          <button class="btn1">Create a card</button>
        </div>
        <hr class="divide" />
        <div class="row">
          <div class="column_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-03/651bea9dc9649b0ef5ad913e.webp"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="column_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-03/651bea9dc9649b0ef5ad913e.webp"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="column_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-03/651bea9dc9649b0ef5ad913e.webp"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
          <div class="column_3">
            <div class="card">
              <div class="front-card">
                <img
                  src="https://spacet-release.s3.ap-southeast-1.amazonaws.com/img/blog/2023-10-03/651bea9dc9649b0ef5ad913e.webp"
                  alt="Thumbnail card"
                />
              </div>
              <div class="back-card">
                <h6>Shop</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
section {
  padding-top: 3rem;
}
.divide {
  margin: 2rem 0;
}
.card {
  border: 2px solid black;
  padding: 1rem;
}
.column_3 {
  flex: 0 0 20%;
  max-width: 25%;
}
.row {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-bottom: 20px;
}
</style>
