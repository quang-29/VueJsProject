<script setup>
import { ref } from 'vue';

const showDialog = ref(false);

const openDialog = () => {
  showDialog.value = true;
};
</script>

<template>
  <el-button type="primary" @click="openDialog">Mở popup 90%</el-button>

  <el-dialog
    v-model="showDialog"
    title="Chi tiết đơn hàng"
    width="90%"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    :modal="true"
    class="custom-dialog"
  >
    <p>Nội dung hiển thị ở đây: ảnh, bảng, biểu mẫu, v.v.</p>

    <template #footer>
      <el-button @click="showDialog = false">Đóng</el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
.custom-dialog .el-dialog {
  max-width: 90vw;
  height: 90vh;
}

.custom-dialog .el-dialog__body {
  height: calc(90vh - 100px); /* trừ header + footer */
  overflow-y: auto;
}
</style>
