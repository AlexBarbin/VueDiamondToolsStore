<template>
        <section>
  <div class="row d-flex justify-content-center mt-5">
    <div class="col-md-10 col-xl-8 text-center">
      <h1 class="mb-4">Testimonials</h1>
      <p class="mb-4 pb-2 mb-md-5 pb-md-0">
        "Reviews from our customers: what do they say about our tool?"
      </p>
    </div>
  </div>

  <div class="row text-center d-flex align-items-stretch">
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style="background-color: #019267;"></div>
        <div class="avatar mx-auto bg-white">
          <img src="/public/img/Clients/builder2.jfif"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">Maria Smantha</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>We have been cooperating with this company for many years. Everything is always at a high level.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style="background-color: #00C897;"></div>
        <div class="avatar mx-auto bg-white">
          <img src="/public/img/Clients/buider1.png"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">Ivan Galushko</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>I am always confident in the quality of the purchased instrument in this store. Item always in stock, fast shipping.
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-0 d-flex align-items-stretch">
      <div class="card testimonial-card">
        <div class="card-up" style="background-color: #C1F4C5;"></div>
        <div class="avatar mx-auto bg-white">
          <img src="/public/img/Clients/builder2.jpg"
            class="rounded-circle img-fluid" />
        </div>
        <div class="card-body">
          <h4 class="mb-4">John Smith</h4>
          <hr />
          <p class="dark-grey-text mt-4">
            <i class="fas fa-quote-left pe-2"></i>I often buy tools in bulk for my construction company. I was pleasantly surprised by the prices for wholesale customers, as well as the availability of goods in stock.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
  
  
<script>
 export default {
    name: "ReviewsView"

}
</script>
  
  
<style scoped>
.testimonial-card .card-up {
  height: 120px;
  overflow: hidden;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.testimonial-card .avatar {
  width: 110px;
  margin-top: -60px;
  overflow: hidden;
  border: 3px solid #fff;
  border-radius: 50%;
}
</style>