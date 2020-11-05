

cat <<EOF > .gitignore

######################
## node.js/typescript
######################

*~
package-lock.json
yarn.lock
node_modules/

EOF

cat <<EOF > tsconfig.json

{
	"include": [
		"src/**/*"
	],
	"exclude": [
		"dist/**/*",
		"node_modules",
		"test/**/*"
	],
	"compilerOptions": {
		"target": "es5",
		"esModuleInterop": true,
		"downlevelIteration": true,
		"removeComments": false,
		"preserveConstEnums": true,
		"sourceMap": true,
		"lib":[
			"es2020.string"
		],
		"types": [
			"mocha",
			"node"
		]
	},
	"moduleResolution": "node"
}

EOF

cat <<EOF > gulpfile.js
var gulp = require('gulp');
var ts   = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
	return gulp.src('src/**/*.ts')
		.pipe(tsProject())
	    .pipe(gulp.dest('dist'));
});

EOF


mkdir -p src/lib test/lib

npm install --save @types/node
npm install --save-dev typescript @types/typescript ts-node
npm install --save-dev mocha @types/mocha 
npm install --save-dev chai @types/chai 
npm install --save-dev gulp gulp-cli gulp-typescript
npm install --save log4js

cat <<EOF
Edit package.json as follows

    ...
	"main": "./dist/lib/streamlib.js",
	"types": "./src/lib/streamlib.ts",
	"scripts": {
		"build": "npx gulp",
		"typedoc": "npx typedoc  --out docs src",
		"test": "npx mocha -r ts-node/register test/**/*.spec.ts"
	},
    ...
EOF
