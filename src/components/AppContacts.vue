<template>
    <section class="ftco-section">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h1 class="heading-section">Contact us</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="wrapper">
            <div class="row no-gutters mb-5">
              <div class="col-md-7">
                <div class="contact-wrap w-100 p-md-5 p-4">
                  <h3 class="mb-4">Please, leave your message</h3>
                  <div id="form-message-warning" class="mb-4"></div>

                  <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="name">Full Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="label" for="email">Email Address</label>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="subject">Subject</label>
                          <input
                            type="text"
                            class="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="label" for="#">Message</label>
                          <textarea
                            name="message"
                            class="form-control"
                            id="message"
                            cols="30"
                            rows="4"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input type="submit" value="Send Message" class="btn btn-primary" />
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 d-flex align-items-stretch">
                <div id="map">
					<img class="img-fluid" src="/public/img/Other/Google_Maps.jpg" alt="">

				</div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                
                  <div class="text">
                    <p><span>Address:</span> 10-56-02, "Barabashovo" trade center, Kharkov, Ukraine</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="text">
                    <p><span>Phone:</span> <a href="tel://+14312935502">+ 1 431 293 5502</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  
                  <div class="text">
                    <p>
                      <span>Email:</span> <a href="mailto:toolsplanetua@gmail.com">toolsplanetua@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="text">
                    <p><span>Website</span> <a href="https://tools-planet.com.ua">tools-planet.com.ua</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


export default {
    name: 'AppContacts'
}
</script>

<style scoped>
</style>
