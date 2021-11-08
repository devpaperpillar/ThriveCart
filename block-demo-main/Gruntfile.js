module.exports = function(grunt) {

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'sass': {
      'options': {
        //
      },
      'customise': {
        'files': [{
          'expand': true,
          'src': ['regions.scss'],
          'dest': '.',
          'cwd': '.',
          'rename': function(dst, src) {
            return dst + '/' + src.replace('.scss', '.css');
          }
        }]
      }
    },
    'concat': {
      'customise': {
        'files': {
          'regions.scss': ['shared.scss', '**/frontend/*.scss']
        }
      }
    },
    'watch': {
      'customise': {
        'files': ['shared.scss', '**/frontend/*.scss'],
        'tasks': ['concat:customise', 'sass:customise']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
};
