module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "bower_components",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/assets/css/styles-1.0.0.min.css': [
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'bower_components/toastr/toastr.css',
						'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css'
                    ],
                    'wwwroot/assets/fonts/font-awesome/css/font-awesome.min.css': [
                        'bower_components/font-awesome/css/font-awesome.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
					'bower_components/ngImgCrop/compile/unminified/ng-img-crop.js',
                    'bower_components/toastr/toastr.js'					
                ],
                dest: 'wwwroot/assets/libs/scripts-1.0.0.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts/',
                        src: '**',
                        dest: 'wwwroot/assets/fonts/font-awesome/fonts',
                        flatten: true,
                        filter: 'isFile',
                    }
                ]
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
};