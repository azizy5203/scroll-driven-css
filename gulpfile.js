import gulp from "gulp";

gulp.task("css", function () {
  return gulp.src("./index.css").pipe(gulp.dest("./dist"));
});
gulp.task("html", function () {
  return gulp.src("./*.html").pipe(gulp.dest("./dist"));
});

gulp.task("default", gulp.series("css", "html"));
