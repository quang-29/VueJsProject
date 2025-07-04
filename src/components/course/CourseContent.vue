<script setup>
    console.log('Course Content')
    import {ref} from 'vue'
    const courses = ref(
    [
        {
            id: 1,
            title: 'Gioi thieu React',
            description: 'Tim hieu ve React va JSX',
            exerciseCompletionRate: 75,
            lesson: [
                {
                    lessonTitle: 'React la gi?',
                    duration: 15,
                    status: 'completed',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Cai dat moi truong',
                    duration: 20,
                    status: 'completed',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'JSX co ban',
                    duration: 15,
                    status: 'completed',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Kiểm tra Module 1',
                    numberQuestions: 15,
                    status: 'passed',
                    type: 'test'
                }
            ]
        },
        {
            id: 2,
            title: 'Components va Props',
            description: 'Hoc cach tao va su dung components',
            exerciseCompletionRate: 25,
            lesson: [
                {
                    lessonTitle: 'Functional Components',
                    duration: 35,
                    status: 'completed',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Props và PropTypes',
                    duration: 20,
                    status: 'notStarted',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Component Composition',
                    duration: 35,
                    status: 'notStarted',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Kiểm tra Module 2',
                    numberQuestions: 15,
                    status: 'notStarted',
                    type: 'test'
                }
            ]
        }, {
            id: 3,
            title: 'State va EventHandling',
            description: 'Tim hieu ve React va JSX',
            exerciseCompletionRate: 0,
            lesson: [
                {
                    lessonTitle: 'useState Hook',
                    duration: 40,
                    status: 'notStarted',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Event Handling',
                    duration: 30,
                    status: 'notStarted',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Controlled Components',
                    duration: 35,
                    status: 'notStarted',
                    type: 'lesson'
                },
                {
                    lessonTitle: 'Kiểm tra Module 3',
                    numberQuestions: 15,
                    status: 'passed',
                    type: 'test'
                }
            ]
        }
    ])
</script>



<template>
    <div class="course-main">
        <div class="course-title">
            <h2 class="course-header">Nội dung khóa học</h2>
        </div>
        <div class="demo-collapse">
            <el-collapse accordion>
                <el-collapse-item 
                v-for="course in courses"
                :key="course.id"
                :name="course.title"
                class="el-collapse-item">
                    <template #title="{ isActive }">
                    <div :class="['title-wrapper', { 'is-active': isActive }]">

                        <div class="course-heading">
                            <p class="course-title">{{ course.title }}</p>
                            <p class="course-description">{{course.description}}</p>
                        </div>
                        <div>
                            <p>{{ course.exerciseCompletionRate }} %</p>
                            <el-icon class="header-icon">
                                <ArrowDown />
                            </el-icon>
                        </div>
                    </div>
                    </template>
                    <div>
                    Consistent with real life: in line with the process and logic of real
                    life, and comply with languages and habits that the users are used to;gfsdfgsdffffffffffffffffffffffffffffffffffgdfagfsdgfsgsdfgsdfgsdgsdfgsdf
                    </div>
                    <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                    </div>
                </el-collapse-item>
            
            </el-collapse>
        </div>
    </div>
</template>

<style scoped>
.title-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 200px;
  flex-wrap: wrap; 
}
.el-collapse-item{
    height: 100px !important;
    line-height: 60px;
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
.course-header{
    font-weight: 600;
}
.title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.course-heading .course-title {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.5rem;
}
.course-description{
    font-size: 1rem;
    line-height: 1.5rem;
}
</style>