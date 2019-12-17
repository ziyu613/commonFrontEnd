<template>
  <div>
    <div class="panel">
      <div class="panel-heading" @click="moreTool('executeEngin','enginIcon')">
        <h3 class="panel-title">昆明供电局</h3>
        <span class="panel-icon el-icon-arrow-up" id="enginIcon">处理中</span>
      </div>
      <div class="panel-body" id="executeEngin" style="display:block">
        <div style="margin: 15px 0;">
          <el-form :model="temp" label-width="110px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="排查人：" prop="title">
                  <el-input v-model="temp.title"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="排查时间：" prop="public_time">
                  <el-date-picker v-model="temp.public_time" type="datetime" placeholder="请选择时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item>
                  <el-button type="primary" @click.native="setupAdd">添加资产</el-button>
                  <el-transfer
                    v-model="setupValue"
                    :titles="['已排查资产', '待整改资产：']"
                    :data="setupData">
                  </el-transfer>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="排查说明：" prop="vulnerability_description">
                  <el-input type="textarea" v-model="temp.vulnerability_description"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="附件：" prop="vulnerability_description">
                  <el-upload
                    class="avatar-uploader"
                    action="/FILE/upload/autoops?module=photo"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading" @click="moreTool('paramter','parameterIcon')">
        <h3 class="panel-title">大理局</h3>
        <span class="panel-icon el-icon-arrow-down" id="parameterIcon">处理中</span>
      </div>
      <div class="panel-body" id="paramter" style="display:none">
        <div style="margin: 15px 0;">
          <el-form :model="temp" label-width="110px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="排查人：" prop="title">
                  <el-input v-model="temp.title"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="排查时间：" prop="public_time">
                  <el-date-picker v-model="temp.public_time" type="datetime" placeholder="请选择时间">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item>
                  <el-button type="primary" @click.native="setupAdd">添加资产</el-button>
                  <el-transfer
                    v-model="setupValue"
                    :titles="['已排查资产', '待整改资产：']"
                    :data="setupData">
                  </el-transfer>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="排查说明：" prop="vulnerability_description">
                  <el-input type="textarea" v-model="temp.vulnerability_description"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="附件：" prop="vulnerability_description">
                  <el-upload
                    class="avatar-uploader"
                    action="/FILE/upload/autoops?module=photo"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

  export default {
    components: {},
    props: {},
    data() {
      return {
        imageUrl: '',
        setupData: [
          {
            key: '01',
            label: '营销系统web服务器'
          }, {
            key: '02',
            label: '营销系统中间件'
          }
        ],
        setupValue: [],
        temp: {
          id: undefined,
          title: '',
          source: '',
          CVE: '',
          CWE: '',
          Bugtraq: '',
          CNVD: '',
          type: '',
          grade: '',
          update_time: null,
          public_time: null,
          attack_vector: '',
          attack_complexity: '',
          authentication: '',
          confidentiality: '',
          integrality: '',
          availability: '',
          CVSS: '',
          impact_product: '',
          vulnerability_description: '',
          reference_linking: '',
          vulnerability_solution: '',
          manufacturers_patch: '',
        },
      }
    },
    methods: {
      /**
       * 初始化数据方法
       * @author 李元坝
       * @date 20180129
       *
       */
      loadData() {
      },
      handleAvatarSuccess(res, file) {
        var f = eval('(' + res + ')');

      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      //  下拉箭头
      moreTool(id, iconId) {
        var ids = document.getElementById(id);
        var icon = document.getElementById(iconId);
        var res = ids.style.display;
        if (res == 'none') {
          ids.style.display = "block";
          icon.setAttribute("class", "panel-icon el-icon-arrow-up");
        } else {
          ids.style.display = "none";
          icon.setAttribute("class", "panel-icon el-icon-arrow-down");
        }
      },
      setupAdd() {
        alert(1)
      },
    },
    watch: {},
    created() {//在未渲染页面之前赋值

    },
    mounted() {


    },

    beforeDestroy() {

    }
  }
</script>
<style lang="scss" scoped>
  .textarea-sm {
    height: 70px;
    width: 99.1%;
  }

  .panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #d1dbe5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .panel > .panel-heading {
    /*color: #8391a5;*/
    color: #ffffff;
    font-size: 14px;
    /*background-color: #eef1f6;*/
    background-color: #40a0e2;
    position: relative;
    cursor: pointer;
  }

  .panel > .panel-heading > .panel-title {
    margin-top: 0;
    margin-left: 10px;
    height: 40px;
    line-height: 40px;
    text-align: left;
  }

  .panel > .panel-body {
    padding: 0 20px;
  }

  .panel-icon {
    float: right;
    position: absolute;
    top: 8px;
    right: 30px;
    /*color: #8391a5;*/
    color: #ffffff;
    font-size: 24px;
  }
</style>
