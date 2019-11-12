<template>
  <div
    class="menu-bar-container"
    :class="this.$store.state.app.collapse?'menu-bar-collapse-width':'menu-bar-width'"
  >
    <!-- logo -->
    <div class="logo">
      <img :src="this.logo" />
      <div>{{this.$store.state.app.collapse?'':sysName}}</div>
    </div>
    <!-- 导航菜单 -->
    <el-menu
      default-active="1-1"
      @open="handleopen"
      @close="handleclose"
      @select="handleselect"
      :collapse="this.$store.state.app.collapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{$t("sys.sysMng")}}</span>
        </template>
        <el-menu-item index="1-1" @click="$router.push('user')">{{$t("sys.userMng")}}</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('org')">{{$t("sys.orgMng")}}</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('role')">{{$t("sys.roleMng")}}</el-menu-item>
        <el-menu-item index="1-4" @click="$router.push('menu')">{{$t("sys.menuMng")}}</el-menu-item>
        <el-menu-item index="1-5" @click="$router.push('log')">{{$t("sys.logMng")}}</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{$t("sys.sysMonitor")}}</span>
        </template>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">{{$t("sys.nav3")}}</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">{{$t("sys.nv4")}}</span>
      </el-menu-item>

      <!-- 导航菜单树组件，动态加载菜单 -->
      <!-- <menu-tree v-for="item in menuTree" :key="item.menuId" :menu="item"></menu-tree> -->
    </el-menu>
  </div>
</template>

<script>
import mock from "@/mock/index.js";
import MenuTree from "@/components/MenuTree";
import {mapState,mapMutations,mapAction } from 'vuex';

export default {
  components:{
    MenuTree
  },
  data() {
    return {
      isCollapse: false,
      sysName: "",
      logo: ""
    };
  },
  methods: {
    handleopen() {
      console.log("handleopen");
    },
    handleclose() {
      console.log("handleclose");
    },
    handleselect(a, b) {
      console.log("handleselect");
    },
    //加载导航菜单
    findMenuTree() {
      console.log("findMenuTree");
      this.$api.menu.findMenuTree()
        .then(res => {
          this.$store.commit("setMenuTree", res, data);
        })
        .catch(function(res) {
          alert(res);
        });
    }
  },
  computed:{
    ...mapState({
      appName: state=>state.app.appName,
      thmemColor: state=>state.app.thmemColor,
      collapse: state=>state.app.collapse,
      menuTree: state=>state.menu.menuTree
    })
  },
  mounted() {
    this.sysName = "cloud-auth-ui";
    this.logo = require("@/assets/logo.png");
    // this.findMenuTree();
  }
};
</script>

<style scoped lang="scss">
.menu-bar-container {
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background: #4b5f6e;
    img {
      width: 40px;
      height: 40px;
      border-radius: 0px;
      margin: 10px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 22px;
      color: white;
      text-align: left;
    }
  }
  .menu-bar-width {
    left: 200px;
  }
  .menu-bar-collapse-width {
    left: 65px;
  }
}
</style>