<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <!-- <a href="javascript:;">注册</a> -->
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110"
                      alt=""
                    />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-1.jpg" alt="" />
                  </div>
                  <div class="pro-name">小米壁画电视 65英寸</div>
                  <div class="pro-price">6999元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-2.jpg" alt="" />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-3.png" alt="" />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-4.jpg" alt="" />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-5.jpg" alt="" />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
                <li class="product">
                  <a href="" target="_blank"></a>
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-6.png" alt="" />
                  </div>
                  <div class="pro-name">小米cc9</div>
                  <div class="pro-price">1799元</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    //服务于当前组件
    return {
      username: "",
      photoList: [],
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axio
        .get("/products", {
          params: {
            categoryId: "100012",
          },
        })
        .then((res) => {
          if (res.list > 6) {
            this.photoList = res.list.slice(0, 6);
          }
        });
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        margin-right: 0;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before {
            //定义伪类
            content: ""; //必须要加来占位
            display: inline-block;
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s; //css过渡
          }
          &::after {
            content: "";
            display: inline-block;
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            overflow: hidden;
            transition: height 1s;
            background-color: white;
            // background-color: #ffffff;
            height: 0px;
            opacity: 0;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;

              a {
                display: inline-block;
              }
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &::before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
              }
              &:last-child::before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            display: inline-block;
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>