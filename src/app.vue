<template>
  <div id="app">
    <gt-header></gt-header>
    <section class="index" ref="index" @touchstart="startMove" @touchmove="indexMove">
      <div>
        <h2>帮助您搭建可靠优雅的 <br>验证安全系统</h2>
        <p>覆盖全球各领域<span class="number">16万</span>家企业 <br>始终致力于用科技把验证码变得更美好</p>
      </div>
      <transition
        appear
        appear-class="computer-appear"
        appear-active-class="computer-appear-active"
      >
        <div class="computer"></div>
      </transition>
      <img src="./assets/imgs/home/arrow-down.png" alt="" class="arrow" @touchstart="scrollToTop">
    </section>
    <section class="evolution" @touchstart="startMove" @touchmove="evolutionMove">
      <ul>
        <li>
          <img src="./assets/imgs/home/safe.png" alt="极验">
          <div class="desc">
            <h3>安全极智进化</h3>
            <p>四年安全攻防实践经验</p>
            <p>日均积累4亿条验证数据</p>
            <p>验证安全进入人工智能时代</p>
          </div>
        </li>
        <li>
          <img src="./assets/imgs/home/experience.png" alt="极验">
          <div class="desc">
            <h3>体验极智进化</h3>
            <p>验证面板宛如艺术品</p>
            <p>轻点鼠标0.4秒通过验证</p>
            <p>验证体验从未如此优雅</p>
          </div>
        </li>
        <li>
          <img src="./assets/imgs/home/manage.png" alt="极验">
          <div class="desc">
            <h3>管理极智进化</h3>
            <p>38种功能选项</p>
            <p>清晰可视的数据验证报表</p>
            <p>验证管理更加轻松便捷</p>
          </div>
        </li>
      </ul>
      <a href="./exp.html">
        <gtButton text="在线体验产品" size="M" class="button"></gtButton>
      </a>
    </section>
    <section class="logos">
      <ul>
        <li><img src="./assets/imgs/home/kfc.png" alt="kfc"></li>
        <li><img src="./assets/imgs/home/union-pay.png" alt="union-pay"></li>
        <li><img src="./assets/imgs/home/airbnb.png" alt="airbnb"></li>
        <li><img src="./assets/imgs/home/dy.png" alt="dy"></li>
        <li><img src="./assets/imgs/home/36k.png" alt="36k"></li>
        <li><img src="./assets/imgs/home/bili.png" alt="bili"></li>
        <li><img src="./assets/imgs/home/zggjhk.png" alt="zggjhk"></li>
        <li><img src="./assets/imgs/home/hzjd.png" alt="hzjd"></li>
        <li><img src="./assets/imgs/home/xl.png" alt="xl"></li>
        <li><img src="./assets/imgs/home/zealer.png" alt="zealer"></li>
        <li><img src="./assets/imgs/home/mz.png" alt="mz"></li>
        <li><img src="./assets/imgs/home/jmyp.png" alt="jmyp"></li>
      </ul>
      <div class="mask">
        <p>我们向全球各领域最优秀的公司提供支持</p>
        <p>也对小型创业者开放免费服务</p>
        <a href="./case.html">
          <gtButton text="查看更多案例" size="M" class="button" color="white"></gtButton>
        </a>
      </div>
    </section>
    <section class="benefits">
      <ul>
        <li><img src="./assets/imgs/home/register.png" alt="注册">
          <h4>注册即送7天</h4>
        </li>
        <li><img src="./assets/imgs/home/7-24.png" alt="极验服务">
          <h4>7*24h售后服务</h4>
        </li>
        <li><img src="./assets/imgs/home/languages.png" alt="极验">
          <h4>多国语言</h4>
        </li>
        <li><img src="./assets/imgs/home/api.png" alt="定制">
          <h4>API定制接口</h4>
        </li>
        <li><img src="./assets/imgs/home/deploy.png" alt="部署">
          <h4>3分钟快速部署</h4>
        </li>
        <li><img src="./assets/imgs/home/counsel.png" alt="极验顾问">
          <h4>技术顾问</h4>
        </li>
        <li><img src="./assets/imgs/home/https.png" alt="极验https">
          <h4>支持https</h4>
        </li>
        <li><img src="./assets/imgs/home/accelerate.png" alt="极验海外加速">
          <h4>海外加速</h4>
        </li>
      </ul>
    </section>
    <gt-contact-us></gt-contact-us>
    <gt-footer></gt-footer>
  </div>
</template>

<script>
  //导入公用组件
  import gtHeader from '@/components/gt-header.vue'
  import gtFooter from '@/components/gt-footer.vue'
  import gtButton from '@/components/gt-button.vue'
  import gtContactUs from '@/components/gt-contact-us.vue'
  import smoothScroll from "smooth-scroll"

  //导入资源
  export default {
    name: 'App',
    data() {
      return {
        startY: 0,
      }
    },
    methods: {
      scrollTo(dis) {
        smoothScroll.animateScroll(dis)
      },
      scrollToTop() {
        this.scrollTo(this.$refs.index.offsetHeight - 100)
      },
      startMove(e) {
        this.startY = e.changedTouches[0].pageY
      },
      indexMove(e) {
        let endY = e.changedTouches[0].pageY
        let Y = endY - this.startY
        if (Y < 0) {
          // e.preventDefault()
          console.log("index up")
          this.scrollTo(this.$refs.index.offsetHeight - 100)
        }
      },
      evolutionMove(e) {
        let endY = e.changedTouches[0].pageY
        let Y = endY - this.startY
        if (Y > 0) {
          // e.preventDefault()
          this.scrollTo(0)
          return false
        }
      }
    },
    components: {
      gtHeader, gtFooter, gtButton, gtContactUs
    },
    created() {

    }
  }
</script>

<style scoped lang=less rel="stylesheet/less">
  @import './assets/public.less';

  #app {
    width: 100%;
    color: @gt-normal-font-color;
    section {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .index {
      align-items: flex-start;
      justify-content: space-between;
      background: @gt-bg-color url("./assets/imgs/home/index-bg.png") no-repeat bottom center;
      background-size: 100%;
      padding-top: @gt-header-height;
      height: 100vh;
      .indexSwipe {

      }
      h2 {
        margin-top: .8rem;
        font-size: 0.56rem;
        /*font-size: 42px;*/
        line-height: 0.6rem;
        padding-left: 0.45rem;
      }
      p {
        padding-left: 0.45rem;
        font-size: 0.3rem;
        line-height: 0.32rem;
        margin-top: 0.5rem;
      }
      .number {
        font-size: 0.5rem;
        color: @gt-blue-font-color;
      }
      .computer {
        background: url("./assets/imgs/home/computer.png") no-repeat;
        background-size: 100%;
        align-self: flex-end;
        width: 66%;
        height: 50%;
        /*适配屏幕上下比较低的，图片高度变小*/
        /*width: 5.13rem;
        height: 5.48rem;*/
      }
      .computer-appear {
        transform: translateX(4.5rem);
      }
      .computer-appear-active {
        transition: all 1s ease-in-out;
      }
      img.arrow {
        align-self: center;
        width: 0.72rem;
        height: 0.17rem;
        margin-top: 0.47rem;
        margin-bottom: 0.23rem;
      }
    }
    .evolution {
      align-items: center;
      ul {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        li {
          display: flex;
          /*不设置li的百分比定宽就无法两个一起居中，但是百分比会导致小屏字放不下，也不行*/
          width: 5.3rem;
          align-items: center;
          margin-top: 1.07rem;
          img {
            width: 1.46rem;
            height: 1.3rem;
          }
          div.desc {
            margin-left: 0.68rem;
            h3 {
              font-size: 0.32rem;
              margin-bottom: 0.25rem;
            }
            p {
              font-size: 0.26rem;
              line-height: 0.3rem;
            }
          }
        }
      }
      .button {
        margin: 0.9rem 0;
      }
    }
    .logos {
      position: relative;
      ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        li {
          /*加上下面这句，消除html之间的空隙*/
          font-size: 0;
          img {
            width: 25vw;
          }
        }
      }
      div.mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        p {
          font-size: 0.32rem;
          line-height: 0.38rem;
          color: #fff;
        }
        .button {
          margin-top: 0.63rem;
        }
      }
    }
    .benefits {
      ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0.4rem 0 0.9rem;
        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 25%;
          margin-top: 0.5rem;
          img {
            width: 0.64rem;
            height: 0.64rem;
          }
          h4 {
            font-size: 0.22rem;
            margin-top: 0.22rem;
          }
        }
      }
    }
  }
</style>
