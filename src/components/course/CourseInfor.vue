<script setup lang="ts">
console.log('Course Info')
// const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>


<template>
 <div class="course-section">
   <div class="course-infor">
     <h3 class="course-title">React Fundamentals</h3>
     <p class="course-detail">Học các khái niệm cơ bản của React từ component đến state management</p>
   </div>
   <div class="course-progress">
     <div class="progress-summary">
       <p>Tiến độ tổng thể</p>
       <p>33%</p>
     </div>
     <div class="progress-scale">
       <el-progress :percentage="33" :show-text="false" color="black" :stroke-width="8"/>
     </div>
     <div class="progress-detail">
       <p>3/9 bài học hoàn thành</p>
       <p>1/3 bài thi đã qua</p>
     </div>
   </div>
 </div>
</template>


<style scoped>
.progress-detail .el-progress--line {
   margin-bottom: 15px;
   max-width: 600px;
}
.course-section {
   border-radius: 0.5rem;
   border-width: 1px;
   border-color: #222;
   padding: 25px;
   border: 1px solid #ccc;
}
.course-title{
   letter-spacing: -0.025em;
   line-height: 1;
   font-weight: 600;
   font-size: 1.5rem;
}
.course-infor {
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
}
.course-progress{
   padding-bottom: 1.5rem;
}
.course-detail {
   color: #555;
   margin-top: 10px;
}
.progress-summary{
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 16px;
   line-height: 1.25rem;
}
.progress-detail{
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.progress-scale {
   margin: 5px 0;
}
.progress-detail {
   color: #555;
   font-size: 15px;
}
</style>


