<script setup>
defineProps({
  lesson: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="lesson-item">
    <div class="lesson-info">
      <div>
        <p v-if="lesson.status === 'completed' && lesson.type === 'lesson'">
          <el-icon class="check-icon" :style="{ color: '#4caf50', fontSize: '1.25rem' }">
            <CircleCheck />
          </el-icon>
        </p>
        <p v-if="lesson.status === 'notStarted' && lesson.type === 'lesson'">
          <el-icon class="check-icon" :style="{ color: '#6b7280', fontSize: '1.25rem' }">
            <Stopwatch />
          </el-icon>
        </p>
        <p v-if="lesson.type === 'test' && lesson.status === 'passed'">
          <el-icon class="check-icon" :style="{ color: 'orange', fontSize: '1.25rem' }">
            <TrophyBase />
          </el-icon>
        </p>
        <p v-if="lesson.type === 'test' && lesson.status === 'notStarted'">
          <el-icon class="check-icon" :style="{ fontSize: '1.25rem' }">
            <Document />
          </el-icon>
        </p>
      </div>

      <div>
        <p class="lesson-title">{{ lesson.title }}</p>
        <p v-if="lesson.type === 'lesson'" class="lesson-duration">
          <el-icon><Clock /></el-icon>
          <span>{{ lesson.duration }} phút</span>
        </p>
        <p v-if="lesson.type === 'test'" class="lesson-question-count">
          <span>{{ lesson.numberQuestions }} câu hỏi</span>
        </p>
      </div>
    </div>
    <div class="lesson-status">
      <p
        v-if="lesson.type === 'lesson' && lesson.status === 'completed'"
        class="lesson-completed-tag"
      >
        Hoàn thành
      </p>
      <button
        v-else-if="lesson.type === 'lesson' && lesson.status === 'notStarted'"
        class="lesson-btn-learn"
      >
        <el-icon><VideoPlay /></el-icon>
        <span>Học</span>
      </button>
      <p v-if="lesson.type === 'test' && lesson.status === 'passed'" class="test-completed-tag">
        Đã qua (85%)
      </p>
      <div v-else-if="lesson.type === 'test' && lesson.status === 'notStarted'" class="lesson-test">
        <span class="test-not-started-tag">Chưa làm</span>
        <button class="lesson-btn-do">Làm bài</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesson-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
  border: 1px solid #dcdfe6;
  margin-left: 50px;
  margin-top: 10px;
  border-radius: 0.5rem;
  cursor: pointer;
}
.lesson-item:hover {
  background-color: #f9fafb;
}
.lesson-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.lesson-title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
}

.lesson-duration,
.lesson-question-count {
  font-size: 1rem;
  line-height: 1rem;
  color: #6b7280;
  margin-top: 5px;
}
.el-collapse-item__wrap {
  border: none;
}
.icon-ele {
  margin: 0 8px 0 auto;
  color: #409eff;
}
.lesson-duration,
.lesson-question-count {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.lesson-btn-learn,
.lesson-btn-do {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border: none;
  border-radius: 0.375rem;
  background-color: #f3f4f6;
  cursor: pointer;
}
.lesson-btn-learn:hover,
.lesson-btn-do:hover {
  background-color: #e5e7eb;
}
.lesson-test {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.lesson-completed-tag,
.test-completed-tag {
  color: #166534;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  background-color: #dcfce7;
  border-radius: 0.375rem;
}
.test-not-started-tag {
  color: #6b7280;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  background-color: #f3f4f6;
  border-radius: 0.475rem;
}
</style>
