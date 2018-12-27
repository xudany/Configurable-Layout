<template>
  <div>
    <!--<el-input-->
      <!--placeholder="请输入内容"-->
      <!--v-model="input23">-->
      <!--<i slot="prefix" class="el-input__icon el-icon-search"></i>-->
    <!--</el-input>-->
    <!--<el-table-->
      <!--:data="tableData"-->
      <!--border-->
      <!--style="width: 100%; marginTop: 5rem">-->
      <!--<el-table-column-->
        <!--prop="date"-->
        <!--label="日期"-->
        <!--&gt;-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="name"-->
        <!--label="姓名"-->
      <!--&gt;-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="address"-->
        <!--label="地址">-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import LeftAside from './LeftAside'

  export default {
    name: "RightAside",
    components: {
      LeftAside
    },
    data() {
      return {
        input23: "请输入搜索内容",
        editableTabsValue: '1',
        editableTabs: [{
          title: '区域选取工具',
          name: '1',
          content: 'LeftAside'
        },],
        tabIndex: 2,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>

<style scoped>

</style>
