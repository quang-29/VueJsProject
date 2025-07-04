<script setup></script>

<template>
  <div class="course-main">
    <div class="course-title">
      <h2 class="course-header">Nội dung khóa học</h2>
    </div>
    <div class="demo-collapse">
      <el-collapse class="no-border" accordion>
        <slot></slot>
      </el-collapse>
    </div>
  </div>
</template>
