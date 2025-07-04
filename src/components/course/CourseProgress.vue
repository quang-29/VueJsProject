<script setup>
    console.log('Course Progress')
    import { CircleCheck,Notebook,TrophyBase } from '@element-plus/icons-vue'
</script>


<template>
    <div class="progress-section">
        <div class="progress-list">
            <div class="progress-item">
                <el-icon class="lesson-icon">
                    <Notebook />
                </el-icon>
                
            </div>
            <div class="progress-item">
                <p class="progress-header">Bài học</p>
                <p class="progress-figure">1/3</p>
            </div>
        </div>
        <div class="progress-list">
            <div class="progress-item">
                <el-icon class="trophy-icon">
                    <TrophyBase />
                </el-icon>
            </div>
            <div class="progress-item">
                <p class="progress-header">Bài thi</p>
                <p class="progress-figure">3/9</p>
            </div>
        </div>
        <div class="progress-list">
            <div class="progress-item">
                <el-icon class="check-icon">
                    <CircleCheck />
                </el-icon>
            </div>
            <div class="progress-item">
                <p class="progress-header">Hoàn thành</p>
                <p class="progress-figure">33%</p>
            </div>
        </div>
    </div>
</template>

<style>
.progress-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 20px;
}
.progress-list {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 30%;

}
.progress-header {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    margin-bottom: 10px;
}
.progress-figure {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
}
.trophy-icon {
    color: var(--el-color-warning);
    font-size: 26px;
    width: 40px;
    height: 40px;
}
.check-icon{
    color: var(--el-color-success);
    font-size: 26px;
    width: 40px;
    height: 40px;
}
.lesson-icon{
    color: rgb(37, 99, 235);
    font-size: 26px;
    width: 40px;
    height: 40px;
}
</style>