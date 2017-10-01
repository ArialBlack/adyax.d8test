module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    lineNumbers: true
                },
                files: {
                    '../themes/adyax/css/style.css': 'styles/style.scss'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            sass: {
                files: [
                    'styles/*.scss'
                ],
                tasks: ['sass', 'postcss']
            }
            
        },
        
        postcss: {
            options: {
              processors: [
                require('autoprefixer')({browsers: ['last 2 versions', 'ie 10']})
              ]
            },
            dist: {
              src: '../themes/adyax/css/*.css'
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['sass', 'postcss', 'watch']);
};
