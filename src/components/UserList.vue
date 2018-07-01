<template>
    <el-table
            :data="userList"
            style="width: 100%">
        <el-table-column
                prop="EMAIL"
                label="email">
        </el-table-column>
        <el-table-column
                prop="OAUTH_PROVIDER"
                label="provider">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'userList',
  props: {
    msg: String
  },
  data () {
    return {
      userList: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:8089/user/getUserList').then((response) => {
      console.log(response)
      this.userList = response.data.result
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
