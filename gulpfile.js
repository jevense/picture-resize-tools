const gulp = require('gulp');
const gulpIf = require('gulp-if');
const del = require('del');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');

gulp.task('default', function () {
    gulp.src('zhiye/source/*')
        .pipe(imageResize({
            width: 750,
            // crop: true,
            // upscale: false
        })).pipe(imagemin({
            optimizationLevel: 7, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true,   //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true       //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('zhiye/resize'));
});