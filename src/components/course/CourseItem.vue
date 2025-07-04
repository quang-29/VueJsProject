<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
  },
})
console.log('Course Item')
</script>

<template>
  <el-collapse-item :name="course.title" class="el-collapse-item">
    <template #title="{ isActive }">
      <div :class="['title-wrapper', { 'is-active': isActive }]">
        <div class="course-heading">
          <div class="course-id">
            <p>{{ course.id }}</p>
          </div>
          <div class="course-details">
            <p class="course-title">{{ course.title }}</p>
            <p class="course-description">{{ course.description }}</p>
          </div>
        </div>
        <div class="course-exercise-completion">
          <p>{{ course.exerciseCompletionRate }} %</p>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-collapse-item>
</template>

<style scoped>
.el-collapse-item__header {
  border-bottom: none;
}
.el-collapse-item {
  padding: 20px 0 20px 20px;
  border-radius: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-top: 10px;
}
.demo-collapse {
  height: auto;
}

.title-wrapper.is-active {
  color: var(--el-color-primary);
}
.course-main {
  margin-top: 20px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 1.5rem;
}
.course-header {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
}
.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.course-heading {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.course-id {
  font-size: 1.15rem;
  line-height: 2rem;
  color: #2563eb;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-id p {
  font-weight: 600;
}
.course-heading .course-title {
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.5rem;
}

.course-description {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #555;
  letter-spacing: 0.5px;
  margin-top: 5px;
}
.course-details {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
.course-exercise-completion {
  width: 55px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdfe6;
  border-radius: 20px;
}
.course-exercise-completion p {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
}
.el-collapse-item__content {
  padding: 0;
  margin-top: 10px;
}
</style>
