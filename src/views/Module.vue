<script setup>
import CourseInfor from '@/components/course/CourseInfor.vue';
import CourseProgress from '@/components/course/CourseProgress.vue';
import ModuleList from '@/components/module/ModuleList.vue';
import {ref} from 'vue'
const modules = ref([
  {
    title: 'Giới thiệu ReactJS',
    description: 'Tìm hiểu React là gì, tại sao nên dùng và cách cài đặt môi trường',
    type: 'module',
    exerciseCompletionRate: 100,
    lessons: [
      {
        title: 'ReactJS là gì?',
        duration: 15,
        status: 'completed',
        type: 'lesson'
      },
      {
        title: 'Cài đặt môi trường React',
        duration: 20,
        status: 'completed',
        type: 'lesson'
      }, {
        title: 'Kiểm tra Module 1',
        numberQuestions: 15,
        status: 'passed',
        type: 'test',
      },
    ],
    subModules: []
  },
  {
    title: 'JSX và Component cơ bản',
    description: 'Tìm hiểu cú pháp JSX và cách xây dựng component đơn giản',
    type: 'module',
    exerciseCompletionRate: 90,
    lessons: [
      {
        title: 'JSX là gì?',
        duration: 20,
        status: 'completed',
        type: 'lesson'
      },
      {
        title: 'Tạo Functional Component',
        duration: 25,
        status: 'completed',
        type: 'lesson'
      }, {
        title: 'Kiểm tra Module 2',
        numberQuestions: 15,
        status: 'notStarted',
        type: 'test',
      },
    ],
    subModules: []
  },
  {
    title: 'Props và State trong React',
    description: 'Cách truyền dữ liệu giữa các component và quản lý trạng thái',
    type: 'module',
    exerciseCompletionRate: 80,
    lessons: [
      {
        title: 'Sử dụng Props',
        duration: 20,
        status: 'completed',
        type: 'lesson'
      },
      {
        title: 'Quản lý State với useState',
        duration: 30,
        status: 'notStarted',
        type: 'lesson'
      }, {
        title: 'Kiểm tra Module 3',
        numberQuestions: 15,
        status: 'notStarted',
        type: 'test',
      },
    ],
    subModules: []
  },
  {
    title: 'Hooks cơ bản',
    description: 'Tìm hiểu các React Hooks phổ biến như useEffect, useRef, useReducer',
    type: 'module',
    exerciseCompletionRate: 75,
    lessons: [
      {
        title: 'useEffect cơ bản',
        duration: 30,
        status: 'notStarted',
        type: 'lesson'
      },
      {
        title: 'useRef và DOM manipulation',
        duration: 25,
        status: 'notStarted',
        type: 'lesson'
      }
    ],
    subModules: [
      {
        title: 'useReducer nâng cao',
        description: 'Tìm hiểu thêm về useReducer nâng cao',
        exerciseCompletionRate: 25,
        type: 'module',
        lessons: [
          {
            title: 'useReducer với context',
            duration: 40,
            status: 'notStarted',
            type: 'lesson'
          },
          {
            title: 'Bài kiểm tra useReducer',
            numberQuestions: 10,
            status: 'notStarted',
            type: 'test'
          }
        ],
        subModules: []
      }
    ]
  },
  {
  title: 'Context API và useContext',
  description: 'Chia sẻ dữ liệu giữa các component với Context',
  type: 'module',
  exerciseCompletionRate: 50,
  lessons: [
    {
      title: 'Giới thiệu Context API',
      duration: 20,
      status: 'completed',
      type: 'lesson'
    },
    {
      title: 'Tạo Provider và Consumer',
      duration: 25,
      status: 'notStarted',
      type: 'lesson'
    }
  ],
  subModules: [
    {
      title: 'useContext cơ bản',
      description: 'Hướng dẫn sử dụng useContext thay cho Consumer',
      exerciseCompletionRate: 80,
      type: 'module',
      lessons: [
        {
          title: 'Cách sử dụng useContext trong component',
          duration: 30,
          status: 'completed',
          type: 'lesson'
        }
      ],
      subModules: [
        {
          title: 'So sánh Consumer vs useContext',
          description: 'Hiểu rõ sự khác biệt giữa cách dùng truyền thống và hook useContext',
          exerciseCompletionRate: 60,
          type: 'module',
          lessons: [
            {
              title: 'Consumer pattern trong React',
              duration: 20,
              status: 'completed',
              type: 'lesson'
            },
            {
              title: 'Tái cấu trúc với useContext',
              duration: 20,
              status: 'notStarted',
              type: 'lesson'
            }
          ],
          subModules: []
        }
      ]
    },
    {
      title: 'Truyền context lồng nhau',
      description: 'Xử lý nhiều context lồng nhau trong ứng dụng lớn',
      exerciseCompletionRate: 30,
      type: 'module',
      lessons: [
        {
          title: 'Lồng nhiều Provider',
          duration: 25,
          status: 'notStarted',
          type: 'lesson'
        },
        {
          title: 'Tối ưu context lồng nhau',
          duration: 20,
          status: 'notStarted',
          type: 'lesson'
        }
      ],
      subModules: []
    }
  ]
}
,
  {
    title: 'Tối ưu hiệu suất React',
    description: 'Tăng hiệu năng ứng dụng với memo, useCallback, useMemo',
    type: 'module',
    exerciseCompletionRate: 80,
    lessons: [
      {
        title: 'React.memo',
        duration: 20,
        status: 'completed',
        type: 'lesson'
      },
      {
        title: 'useCallback & useMemo',
        duration: 30,
        status: 'completed',
        type: 'lesson'
      }, {
        title: 'Kiểm tra Module 6',
        numberQuestions: 15,
        status: 'passed',
        type: 'test',
      },
    ],
    subModules: []
  }
]);

</script>
<template>
     <div class="course-page">
        <CourseInfor />
        <div class="course-main">
            <div class="course-title">
                <h2 class="course-header">Nội dung khóa học</h2>
            </div>

            <div class="demo-collapse">
                <el-collapse class="no-border">
                    <ModuleList v-for="(module,index) in modules" :key="index" :module="module" :index="index+1" />
                </el-collapse>
            </div>
        </div>
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


