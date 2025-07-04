<script setup>
import { ref } from 'vue'
import CourseInfor from '@/components/course/CourseInfor.vue'
import CourseProgress from '@/components/course/CourseProgress.vue'
import CourseCollapse from '@/components/course/CourseCollapse.vue'
import CourseItem from '@/components/course/CourseItem.vue'
import LessonItem from '@/components/LessonItem.vue'
console.log('Hello')
const course = ref([
  {
    id: 1,
    title: 'Giới thiệu React',
    description: 'Tìm hiểu về React và JSX',
    exerciseCompletionRate: 75,
    lessons: [
      {
        lessonTitle: 'React là gì?',
        duration: 15,
        status: 'completed',
        type: 'lesson',
      },
      {
        lessonTitle: 'Cài đặt môi trường',
        duration: 20,
        status: 'completed',
        type: 'lesson',
      },
      {
        lessonTitle: 'JSX cơ bản',
        duration: 15,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Kiểm tra Module 1',
        numberQuestions: 15,
        status: 'passed',
        type: 'test',
      },
    ],
  },
  {
    id: 2,
    title: 'Components và Props',
    description: 'Tìm hiểu cách tạo và sử dụng components',
    exerciseCompletionRate: 25,
    lessons: [
      {
        lessonTitle: 'Functional Components',
        duration: 35,
        status: 'completed',
        type: 'lesson',
      },
      {
        lessonTitle: 'Props và PropTypes',
        duration: 20,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Component Composition',
        duration: 35,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Kiểm tra Module 2',
        numberQuestions: 15,
        status: 'notStarted',
        type: 'test',
      },
    ],
  },
  {
    id: 3,
    title: 'State và Event Handling',
    description: 'Tìm hiểu về State và Event Handling',
    exerciseCompletionRate: 0,
    lessons: [
      {
        lessonTitle: 'useState Hook',
        duration: 40,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Event Handling',
        duration: 30,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Controlled Components',
        duration: 35,
        status: 'notStarted',
        type: 'lesson',
      },
      {
        lessonTitle: 'Kiểm tra Module 3',
        numberQuestions: 15,
        status: 'notStarted',
        type: 'test',
      },
    ],
  },
])
</script>

<template>
  <div class="course-page">
    <CourseInfor />
    <CourseCollapse>
      <CourseItem v-for="courseItem in course" :key="courseItem.id" :course="courseItem">
        <LessonItem
          v-for="lesson in courseItem.lessons"
          :key="lesson.lessonTitle"
          :lesson="lesson"
        />
      </CourseItem>
    </CourseCollapse>
    <CourseProgress />
  </div>
</template>

<style scoped>
.course-page {
  color: black;
  font-size: 16px;
  margin: 0 auto;
  max-width: 56rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
:deep(.title-wrapper) {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
}
:deep(.el-collapse-item__header) {
  border-bottom: none;
}
:deep(.el-collapse-item) {
  padding: 20px 0 20px 20px;
  border-radius: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-top: 10px;
}
:deep(.demo-collapse) {
  height: auto;
}

:deep(.title-wrapper.is-active) {
  color: var(--el-color-primary);
}
:deep(.course-main) {
  margin-top: 20px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 1.5rem;
}
:deep(.course-header) {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 10px;
}
:deep(.title-wrapper) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
:deep(.course-heading) {
  display: flex;
  align-items: center;
  gap: 1rem;
}
:deep(.course-id) {
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
:deep(.course-id p) {
  font-weight: 600;
}
:deep(.course-heading .course-title) {
  font-weight: 500;
  font-size: 1.15rem;
  line-height: 1.5rem;
}

:deep(.course-description) {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #555;
  letter-spacing: 0.5px;
  margin-top: 5px;
}
:deep(.course-details) {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
:deep(.course-exercise-completion) {
  width: 55px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdfe6;
  border-radius: 20px;
}
:deep(.course-exercise-completion p) {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
}
:deep(.el-collapse-item__content) {
  padding: 0;
  margin-top: 10px;
}
</style>
