<template>
  <div>
    <el-row>
      <el-col :span="24">
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
          <el-tab-pane label="漏洞排查">
            <warning-process-macro></warning-process-macro>
          </el-tab-pane>
          <el-tab-pane label="整改处置">
            <warning-process-macro></warning-process-macro>
          </el-tab-pane>
          <el-tab-pane label="威胁验证">
            <warning-process-macro></warning-process-macro>
          </el-tab-pane>

        </el-tabs>
      </el-col>
      <el-col :span="24">
        <div class="submit-button-autoops">
          <el-button type="primary" @click="submitForm('form')">提交
          </el-button>
          <el-button type="button" @click="backForm">返回</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {fetchList, fetchPv, createArticle, updateArticle} from '@/api/vulnerabilityManagement'
  import waves from '@/components/waves' // 水波纹指令
  import WarningProcessMacro from './WarningProcessMacro' //
  import {parseTime} from '@/utils'

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
    name: 'vulnerabilityManagement',
    directives: {
      waves,
    },
    components: {WarningProcessMacro},
    data() {
      return {
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 10,
          source: undefined,
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
        downloadLoading: false
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
      submitForm(formName) {
        alert(1)
      },
      backForm() {
        this.$router.go(-1)
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
