import gulp from 'gulp';
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';
import config from '../config';

const fontsBuild = (ty) => {
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(ttf2woff())
    .pipe(gulp.dest(config.dest.fonts));
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(ttf2woff2())
    .pipe(gulp.dest(config.dest.fonts));
  ty();
};

export const assetsBuild = gulp.parallel(fontsBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
};
