<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">


      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item"
                :placeholder="$t('MyNotificationObj.title')" v-model="listQuery.title">
      </el-input>
      <el-select clearable style="width: 250px" class="filter-item" v-model="listQuery.source"
                 :placeholder="$t('MyNotificationObj.type')">
        <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                   :value="item.key">
        </el-option>
      </el-select>

      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">
        {{$t('table.search')}}
      </el-button>

      <div class="filter-item-right">
        <el-button style="margin-left: 10px;" @click="handleCreate" type="primary"
                   icon="el-icon-upload">{{$t('table.skip')}}
        </el-button>
        <el-button style="margin-left: 10px;" @click="handleCreate" type="primary"
                   icon="el-icon-edit">{{$t('table.add')}}
        </el-button>
      </div>

    </div>
    <el-row>
      <el-col :span="8">
        <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit
                  highlight-current-row :show-header="false"
                  style="width: 100%">
          <el-table-column>
            <template slot-scope="scope">
              <div slot="reference" @click="openWarningProcess">
                <table class="task-table" >
                  <tbody>
                  <tr>
                    <td rowspan="4" style="width: 30px;height: 49px;" align="center">
                      <i><img :src="icons[scope.row.type]" style="width: 30px;height: 45px;"></i>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style=" height: 10px;background-color: #5ba8d8;padding-bottom: 0;padding-top: 0;border-bottom-width: 0;color: white;">
                      <span>{{ '【' + scope.row.grade + '】' + scope.row.title}}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#d8e9f3;padding-bottom: 0;padding-top: 0;border-bottom-width: 0;">
                      <i class="el-icon-caret-right"></i><span>处理中：</span>
                      <span>0个</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="el-icon-caret-right"></i> <span>已完成：</span>
                      <span>0个</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i class="el-icon-caret-right"></i><span>通报日期：</span>
                      <span>2018-03-20</span>

                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </template>
          </el-table-column>

        </el-table>

        <div>
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                         layout="total, prev, pager, next" :total="total">
          </el-pagination>
        </div>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col>
            <fieldset>
              <el-form :rules="rules" ref="dataForm" :model="temp" label-width="110px">
                <el-row>
                  <el-col :span="24">
                    <el-form-item>
                      <h2>关于WebLogic 反序列化漏洞和 WebLogic WLS 组件漏洞反序列化漏洞安全预警通告</h2>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="漏洞名称" prop="title">
                      <el-tag>密钥交换协议缓冲区溢出漏洞</el-tag>
                    </el-form-item>
                  </el-col>


                </el-row>
              </el-form>
            </fieldset>
            <br/>
            <el-row>
              <el-col :span="24" >
                      <el-button style="width: 100%;text-align: left;margin-left: 1px;margin-top: 10px;margin-bottom: 10px" @click="skipWarningProcess">WebLogic WLS 组件漏洞反序列化漏洞</el-button>
                      <el-button style="width: 100%;text-align: left;margin-left: 1px;margin-top: 10px;margin-bottom: 10px" @click="skipWarningProcess">WebLogic WLS 组件漏洞反序列化漏洞</el-button>
                      <el-button style="width: 100%;text-align: left;margin-left: 1px;margin-top: 10px;margin-bottom: 10px" @click="skipWarningProcess">WebLogic WLS 组件漏洞反序列化漏洞</el-button>
                      <el-button style="width: 100%;text-align: left;margin-left: 1px;margin-top: 10px;margin-bottom: 10px" @click="skipWarningProcess">WebLogic WLS 组件漏洞反序列化漏洞</el-button>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-tabs type="border-card">
        <el-tab-pane label="漏洞信息">
          <el-form :rules="rules" ref="dataForm" :model="temp" label-width="110px">
            <el-row>
              <el-col :span="spans.title">
                <el-form-item :label="$t('VulnerabilityManagementObj.title')" prop="title">
                  <el-input v-model="temp.title"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.CNVD">
                <el-form-item :label="$t('VulnerabilityManagementObj.CNVD')">
                  <el-input v-model="temp.CNVD"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.public_time">
                <el-form-item :label="$t('VulnerabilityManagementObj.public_time')">
                  <el-date-picker v-model="temp.public_time" type="datetime" placeholder="Please pick a date">
                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="spans.CVE">
                <el-form-item :label="$t('VulnerabilityManagementObj.CVE')">
                  <el-input v-model="temp.CVE"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.Bugtraq">
                <el-form-item :label="$t('VulnerabilityManagementObj.Bugtraq')">
                  <el-input v-model="temp.Bugtraq"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="spans.source">
                <el-form-item :label="$t('VulnerabilityManagementObj.source')">
                  <el-select class="filter-item" v-model="temp.source" placeholder="Please select">
                    <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                               :value="item.key">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spans.type">
                <el-form-item :label="$t('VulnerabilityManagementObj.type')">
                  <el-select class="filter-item" v-model="temp.type" placeholder="Please select">
                    <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                               :value="item.key">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spans.grade">
                <el-form-item :label="$t('VulnerabilityManagementObj.grade')">
                  <el-select class="filter-item" v-model="temp.grade" placeholder="Please select">
                    <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                               :value="item.key">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="spans.Bugtraq">
                <el-form-item :label="$t('VulnerabilityManagementObj.CWE')">
                  <el-input v-model="temp.CWE"></el-input>
                </el-form-item>
              </el-col>
              <fieldset>
                <legend>CVSS</legend>

                <el-col :span="spans.attack_vector">
                  <el-form-item :label="$t('VulnerabilityManagementObj.attack_vector')">
                    <el-select class="filter-item" v-model="temp.attack_vector" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.attack_complexity">
                  <el-form-item :label="$t('VulnerabilityManagementObj.attack_complexity')">
                    <el-select class="filter-item" v-model="temp.attack_complexity" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.authentication">
                  <el-form-item :label="$t('VulnerabilityManagementObj.authentication')">
                    <el-select class="filter-item" v-model="temp.authentication" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.confidentiality">
                  <el-form-item :label="$t('VulnerabilityManagementObj.confidentiality')">
                    <el-select class="filter-item" v-model="temp.confidentiality" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.integrality">
                  <el-form-item :label="$t('VulnerabilityManagementObj.integrality')">
                    <el-select class="filter-item" v-model="temp.integrality" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.availability">
                  <el-form-item :label="$t('VulnerabilityManagementObj.availability')">
                    <el-select class="filter-item" v-model="temp.availability" placeholder="Please select">
                      <el-option v-for="item in  sourceOptions" :key="item.key" :label="item.display_name"
                                 :value="item.key">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="spans.CVSS">
                  <el-form-item :label="$t('VulnerabilityManagementObj.CVSS')">
                    <el-input v-model="temp.CVSS"></el-input>
                  </el-form-item>
                </el-col>
              </fieldset>
              <el-col :span="spans.impact_product">
                <el-form-item :label="$t('VulnerabilityManagementObj.impact_product')" prop="impact_product">
                  <el-input type="textarea" v-model="temp.impact_product"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.vulnerability_description">
                <el-form-item :label="$t('VulnerabilityManagementObj.vulnerability_description')"
                              prop="vulnerability_description">
                  <el-input type="textarea" v-model="temp.vulnerability_description"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.reference_linking">
                <el-form-item :label="$t('VulnerabilityManagementObj.reference_linking')" prop="reference_linking">
                  <el-input type="textarea" v-model="temp.reference_linking"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.vulnerability_solution">
                <el-form-item :label="$t('VulnerabilityManagementObj.vulnerability_solution')"
                              prop="vulnerability_solution">
                  <el-input type="textarea" v-model="temp.vulnerability_solution"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="spans.manufacturers_patch">
                <el-form-item :label="$t('VulnerabilityManagementObj.manufacturers_patch')">
                  <el-input type="textarea" v-model="temp.manufacturers_patch"></el-input>
                </el-form-item>
              </el-col>

            </el-row>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}
        </el-button>
        <el-button v-else type="primary" @click="updateData">{{$t('table.confirm')}}</el-button>
      </div>

    </el-dialog>


  </div>
</template>

<script>
  import {fetchList, fetchPv, createArticle, updateArticle} from '@/api/myNotification'
  import waves from '@/components/waves' // 水波纹指令
  import {parseTime} from '@/utils'
  //    图标
  import p1 from '@/assets/images/opertion/task_start.png'
  import p2 from '@/assets/images/opertion/task_process.png'
  import p3 from '@/assets/images/opertion/task_end.png'
  import p4 from '@/assets/images/opertion/task_fail.png'
  import ElHeader from "element-ui/packages/header/src/main";

  const sourceOptions = [
    {key: '国家信息安全漏洞平台（CNVD）', display_name: '国家信息安全漏洞平台（CNVD）'},
    {key: '中国南方电网有限责任公司通报', display_name: '中国南方电网有限责任公司通报'},
    {key: '美国国家漏洞库NVD（CVE）', display_name: '美国国家漏洞库NVD（CVE）'},
    {key: '南网传媒安全漏洞库（NWCM）', display_name: '南网传媒安全漏洞库（NWCM）'}
  ]

  // arr to obj ,such as { CN : "China", US : "USA" }
  const calendarTypeKeyValue = sourceOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.display_name
    return acc
  }, {})

  export default {
    components: {ElHeader},
    name: 'myNotification',
    directives: {
      waves
    },
    data() {
      return {
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
          type: undefined,
          title: undefined,
          CVE: undefined,
          CNVD: undefined,
          sort: '+id'
        },
        sourceOptions,
        showReviewer: false,
        spans: {
          id: 24,
          title: 8,
          source: 8,
          CVE: 8,
          Bugtraq: 8,
          CWE: 8,
          CNVD: 8,
          type: 8,
          grade: 8,
          update_time: 8,
          public_time: 8,
          attack_vector: 8,
          attack_complexity: 8,
          authentication: 8,
          confidentiality: 8,
          integrality: 8,
          availability: 8,
          CVSS: 8,
          impact_product: 24,
          vulnerability_description: 24,
          reference_linking: 24,
          vulnerability_solution: 24,
          manufacturers_patch: 24,
        },
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
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: '编辑',
          create: '创建'
        },
        rules: {
          title: [{required: true, message: 'this value is required', trigger: 'blur'}],
          impact_product: [{required: true, message: 'this value is required', trigger: 'blur'}],
          vulnerability_description: [{required: true, message: 'this value is required', trigger: 'blur'}],
          reference_linking: [{required: true, message: 'this value is required', trigger: 'blur'}],
          vulnerability_solution: [{required: true, message: 'this value is required', trigger: 'blur'}],
        },
        downloadLoading: false,
        icons: {
          1: p1,
          2: p2,
          3: p3,
          4: p4,
        },
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },
    created() {
      this.getList()
    },
    methods: {
      openWarningProcess(){
        alert(1)
      },
    skipWarningProcess(){
      this.$router.push({path: '/warning/warning_management/warning_process'})
      },
      getList() {
        this.listLoading = true
        fetchList(this.listQuery).then(response => {
          this.list = response.data.items
          this.total = response.data.total
          this.listLoading = false
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getList()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getList()
      },
      handleModifyStatus(row, status) {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        row.status = status
      },
      resetTemp() {
        this.temp = {
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
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
            this.temp.author = 'vue-element-admin'
            createArticle(this.temp).then(() => {
              this.list.unshift(this.temp)
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleUpdate(row) {
        this.temp = Object.assign({}, row) // copy obj
        this.temp.timestamp = new Date(this.temp.timestamp)
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            const tempData = Object.assign({}, this.temp)
            tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
            updateArticle(tempData).then(() => {
              for (const v of this.list) {
                if (v.id === this.temp.id) {
                  const index = this.list.indexOf(v)
                  this.list.splice(index, 1, this.temp)
                  break
                }
              }
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '更新成功',
                type: 'success',
                duration: 2000
              })
            })
          }
        })
      },
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
      },

      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      }
    }
  }
</script>
