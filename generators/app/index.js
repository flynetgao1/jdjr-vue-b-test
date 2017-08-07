var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');


var Vue2b = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'Hello my baby!I will help you build your app!'
        ));
    },
    prompting: function() {
        var done = function() {
            this.log(chalk.green(
                'I am going to build your app!'
            ));
        }
        var prompts = [{
                type: 'list',
                name: 'apps',
                message: 'Which project do you need to install:',
                choices: [vue2b]
            },
            {
                type: 'input',
                name: 'name',
                message: 'name of app:',
                default: ''
            },
            {
                type: 'input',
                name: 'description',
                message: 'description:',
                default: 'app description'
            },
            {
                type: 'input',
                name: 'license',
                message: 'license:',
                default: 'MIT'
            },
            {
                type: 'input',
                name: 'author',
                message: 'author:',
                default: ''
            },
            {
                type: 'select',
                name: ''
            }
        ];
        this.prompt(prompts, function(props) {
            this.appName = props.name;
            this.description = props.description;
            this.author = props.author;
            this.license = props.license;
            done(); //进入下一个生命周期阶段
        }.bind(this));
    },
    generateBasic: function() {
        this.directory('build', 'build');
        this.directory('config', 'config');
        this.directory('dist', 'dist');
        this.directory('src', 'src');
        this.directory('static', 'static');
        this.directory('test', 'test');

        this.copy('.babelrc', '.babelrc');
        this.copy('.editorconfig', '.editorconfig');
        this.copy('.gitignore', '.gitignore');
        this.copy('.postcssrc.js', '.postcssrc.js');
        this.copy('config.rb', 'config.rb');
        this.copy('index.html', 'index.html');
        this.copy('package.json', 'package.json');
        this.copy('README.md', 'README.md');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});

module.exports = Vue2b;





// prompting: function() {
//     var done = this.async();
//     this.log(
//         chalk.green('I am going to build your app!')
//     );
//     var prompts = [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'name of app:',
//             default: 'tempate'
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'description:',
//             default: 'app description'
//         },
//         {
//             type: 'input',
//             name: 'license',
//             message: 'license:',
//             default: 'MIT'
//         },
//         {
//             type: 'input',
//             name: 'author',
//             message: 'author:',
//             default: ''
//         }
//     ];
//     this.prompt(prompts, function (props) {
//         this.appName = props.name;
//         this.description = props.description;
//         this.author = props.author;
//         this.license = props.license;
//         done();  //进入下一个生命周期阶段
//     }.bind(this));
// }